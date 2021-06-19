import React from 'react'
import './BarGraph.css';
import Bar from './Bar';

function BarGraph(props) {
  const arrayLen = props.array.length;
  const parentHeight = props.parentHeight;
  console.log("making bar graph for ::")
  console.log(props.array);

  return (
    <div className="bar-graph">
      {props.array.map((element) =>
        <Bar key={element.id}
         len={arrayLen}
          height={element.value} 
          maxHeight = "100" 
          minHeight ="0"
          htmlHeight = {props.htmlHeight}
          parentHeight = {parentHeight}></Bar>
      )}    
    </div>
  );
}

export default BarGraph;
