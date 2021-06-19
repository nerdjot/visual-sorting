import SortAlgo from './SortAlgo'
class MergeSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Merge sort")
        super(items);
        this.miLenItems = items.length;
        this.currentCall = [];
        this.mCallStack = [];
        this.populateStack(0, this.miLenItems-1);
        this.subArray1 = [];
        this.subArray2 = [];
        this.start = 0;
        this.end = 0;
        this.Iter1 = 0;
        this.Iter2 = 0;
        this.Iter3 = 0;
    }

    getStart()
    {
        return this.start;
    }

    setStart(val)
    {
        this.start = val;
    }

    getEnd()
    {
        return this.end;
    }

    setEnd(val)
    {
        this.end = val;
    }

    getIter1()
    {
        return this.Iter1;
    }

    setIter1(val)
    {
        this.Iter1 = val;
    }

    IncrementItr1()
    {
        this.Iter1 = this.getIter1() + 1;
    }

    getIter2()
    {
        return this.Iter2;
    }

    setIter2(val)
    {
        this.Iter2 = val;
    }

    IncrementItr2()
    {
        this.Iter2 = this.getIter2() + 1;
    }

    getIter3()
    {
        return this.Iter3;
    }

    setIter3(val)
    {
        this.Iter3 = val;
    }

    IncrementItr3()
    {
        this.Iter3 = this.getIter3() + 1;
    }

    getSubAray1()
    {
        return JSON.parse(JSON.stringify(this.subArray1));
    }

    setSubArray1(subArray)
    {
        this.subArray1 = JSON.parse(JSON.stringify(subArray));
    }

    getSubAray2()
    {
        return JSON.parse(JSON.stringify(this.subArray2));
    }

    setSubArray2(subArray)
    {
        this.subArray2 = JSON.parse(JSON.stringify(subArray));
    }

    getCurrentCall()
    {
        return JSON.parse(JSON.stringify(this.currentCall));
    }

    setCurrentCall(newCall)
    {
        this.currentCall = JSON.parse(JSON.stringify(newCall));
    }

    populateStack(startIdx, endIdx)
    {
        let midIdx = Math.floor((endIdx + startIdx)/2);
        this.mCallStack.push([startIdx, midIdx]);
        this.mCallStack.push([midIdx + 1, endIdx]);
        //if (midIdx>=startIdx) {
            
            if (midIdx>startIdx){
            this.populateStack(startIdx, midIdx);}
        //}
        //if (endIdx >= (midIdx+1)){
            
            if (endIdx > (midIdx+1)){
            this.populateStack(midIdx+1, endIdx);}
        //}
    }
    

    step()
    {
        let lArray = this.getItems();
        if (this.currentCall.length === 0)
        {
            this.currentCall.push(this.mCallStack.pop());
            this.currentCall.push(this.mCallStack.pop());
            this.setSubArray1(lArray.slice(this.currentCall[0][0],
                this.currentCall[0][1]+1));
            this.setSubArray2(lArray.slice(this.currentCall[1][0],
                this.currentCall[1][1]+1));
            this.setIter3(Math.min(this.currentCall[0][0], this.currentCall[1][0]));
        }
        else
        {
            this.setStart(Math.min(this.currentCall[0][0], this.currentCall[1][0]));
            this.setEnd(Math.max(this.currentCall[0][1], this.currentCall[1][1]));
            if (this.getIter3() === this.getEnd() + 1)
            {
                this.setCurrentCall([]);
                if ((this.mCallStack.length === 0) && (this.currentCall.length === 0))
                {
                    return [lArray, true];
                }
                this.currentCall.push(this.mCallStack.pop());
                this.currentCall.push(this.mCallStack.pop());
                this.setSubArray1(lArray.slice(this.currentCall[0][0],
                    this.currentCall[0][1] + 1));
                this.setSubArray2(lArray.slice(this.currentCall[1][0],
                    this.currentCall[1][1] + 1));
                this.setStart(Math.min(this.currentCall[0][0], this.currentCall[1][0]));
                this.setEnd(Math.max(this.currentCall[0][1], this.currentCall[1][1]));
                this.setIter3(this.getStart());
                this.setIter1(0);
                this.setIter2(0);
            }
            else
            {
                if ((this.subArray1.length === this.getIter1())
                    && (this.subArray2.length === this.getIter2()))
                    {
                    this.setCurrentCall([])
                    }
                else if (this.subArray2.length === this.getIter2())
                {
                    lArray[this.getIter3()]['value'] = this.subArray1[this.getIter1()]['value'];
                    this.IncrementItr1();
                }
                else if(this.subArray1.length === this.getIter1())
                {
                    lArray[this.getIter3()]['value'] = this.subArray2[this.getIter2()]['value'];
                    this.IncrementItr2();
                }
                else if (this.subArray1[this.getIter1()]['value'] < this.subArray2[this.getIter2()]['value'])
                {
                    lArray[this.getIter3()]['value'] = this.subArray1[this.getIter1()]['value'];
                    this.IncrementItr1();
                }
                else if(!(this.subArray1[this.getIter1()]['value'] < this.subArray2[this.getIter2()]['value']))
                {
                    lArray[this.getIter3()]['value'] = this.subArray2[this.getIter2()]['value'];
                    this.IncrementItr2();
                }
                this.IncrementItr3();
            }
        }
        this.setItems(lArray);
        return [lArray, false];
    }
}
export default MergeSort;