import './App.css';
import BarGraph from './components/BarGraph';
import BubbleSort from './algos/BubbleSort';
import InsertionSort from './algos/InsertionSort';
import SelectionSort from './algos/SelectionSort';
import CocktailSort from './algos/CocktailSort';
import QuickSort from './algos/QuickSort';
import MergeSort from './algos/MergeSort';
import { Button, ButtonBase } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

//UTIL

const randomizeArray = (len, range) =>
{
  let lArray = []
  for (let i = 0; i< len; i++) {
    lArray.push({'id':i, 'value':Math.ceil(Math.random() * range)});
  }
  return lArray;
}

//stateful



//HANDLERS
//stateful


//stateful
var state = 'static';
var isDone;

function App() {
  const randArray = randomizeArray(10, 100);
  const [array, setArray] = useState(randArray);
  //const [isDone, setDone] = useState(false);
  //const [sortAlgo, setSortAlgo] = useState(new BubbleSort(array));
  var sortAlgo = new BubbleSort(array);
  const [timeDelta, setTimeDelta] = useState(0.01);
  const [algoVal, setAlgoVal] = useState(1);
  const [arrayLength, setArrayLength] = useState(10);
  const timerRef = useRef(null)
  const [htmlHeight, setHtmlHeight] = useState(window.innerHeight);

  //functions
  //HANDLERS
  const resized = () =>
  {
    setHtmlHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", resized);
    return () => window.removeEventListener("resize", resized);
  });


  const isRunning = () =>
  {
    console.log(state);
    if(state === 'running')
      return true;
    return false;
  }

  const Run = () =>
  {
     state = 'running';
  }

  const Stop = () =>
  {
    state = 'static';
  }

  const BuildAlgo = () =>
  {
    switch(algoVal)
    {
      case 1:
        sortAlgo = new BubbleSort(array);
        break;
      case 2:
        sortAlgo = new InsertionSort(array);
        break;
      case 3:
        sortAlgo = new SelectionSort(array);
        break;
      case 4:
        sortAlgo = new CocktailSort(array);
        break;
      case 5:
        sortAlgo = new QuickSort(array);
        break;
      case 6:
        sortAlgo = new MergeSort(array);
        break;
      default:
        console.log("DEFAULT");
    }
  }

  function valuetext(value) {
    return `${value}s`;
  }

  const takeStep = () =>
  {
    if(!isDone)
    {
      console.log("in ifffffffffffffff");
      let lRet = sortAlgo.step();
      isDone = lRet[1];
      setArray(lRet[0]);
    }
    else
    {
      Stop();
      clearInterval(timerRef.current);
    }
  }

  const RunAlgoHandler = () =>
  {
    if(!isRunning())
    {
      Run();
      timerRef.current = setInterval((function() {
        takeStep();}), timeDelta*1000);
    }
  }

  const RandomizeHandler = (range) => {
    clearInterval(timerRef.current);
    Stop();
    let lArray = randomizeArray(arrayLength, range);
    setArray(lArray);
    //sortAlgo = BuildAlgo();
    isDone = false;
  }

  const selectHandleChange = (event) => {
    setAlgoVal(event.target.value);
  }

  const handleArrayLengthChange = (event, newValue) => {
    setArrayLength(newValue)
  }

  const handleTimeDeltaChange = (event, newValue) => {
    setTimeDelta(newValue)
  }

  //USE EFFECTS

  useEffect(() => {
    BuildAlgo();
  }, [algoVal, array, arrayLength]); // Only re-run the effect if count changes

  return (
    <div className="App">
      <div className="menu">
      <Button onClick={() => RandomizeHandler(100)}>
        Randomize</Button>
      <Button onClick={() => RunAlgoHandler()}>
        Run Algo</Button>
      <Select
          value={algoVal}
          displayEmpty
          onChange={selectHandleChange}
          inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value={1}>Bubble Sort</MenuItem>
          <MenuItem value={2}>Insertion Sort</MenuItem>
          <MenuItem value={3}>Selection Sort</MenuItem>
          <MenuItem value={4}>Cocktail Sort</MenuItem>
          <MenuItem value={5}>Quick Sort</MenuItem>
          <MenuItem value={6}>Merge Sort</MenuItem>
        </Select>
        <div className="sliders">
        <div className="slider-div">
          <Typography id="discrete-slider" gutterBottom>
            Array size :: {arrayLength} <i>elements</i>
          </Typography>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={200}
            value={arrayLength}
            onChange={handleArrayLengthChange}
          />
        </div>

        <div className="slider-div">
          <Typography id="discrete-slider" gutterBottom>
            Step time :: {timeDelta} <i>s</i>
          </Typography>
          <Slider
            defaultValue={0.001}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.005}
            min={0.0001}
            max={0.05}
            value={timeDelta}
            onChange={handleTimeDeltaChange}
          />
        </div>
        </div>
        </div>
      <BarGraph array={array} parentHeight="500" htmlHeight={htmlHeight} />
    </div>
  );
}

export default App;
