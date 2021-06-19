import SortAlgo from './SortAlgo'
class QuickSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Bubble sort")
        super(items);
        this.miLenItems = items.length;
        this.miPosStart = 0;
        this.miPosEnd = this.miLenItems - 1;
        this.miPosHead = 0;
        this.miPosTail = this.miLenItems - 1;
        this.miPosIter = 0;
        this.mCallStack = [[-1000, -1000]];
        this.mbIsDirectionRight = false;
    }

    setDirectionRight(pbVal)
    {
        this.mbIsDirectionRight = pbVal;
    }

    getPosStart()
    {
        return this.miPosStart;
    }

    getPosEnd()
    {
        return this.miPosEnd;
    }

    getPosIter()
    {
        return this.miPosIter;
    }

    getPosHead()
    {
        return this.miPosHead;
    }

    getPosTail()
    {
        return this.miPosTail;
    }

    setPosStart(val)
    {
        this.miPosStart = val;
    }

    setPosEnd(val)
    {
        this.miPosEnd = val;
    }

    setPosIter(val)
    {
        this.miPosIter = val;
    }

    setPosHead(val)
    {
        this.miPosHead = val;
    }

    setPosTail(val)
    {
        this.miPosTail = val;
    }

    IncrementPosHead()
    {
        this.miPosHead = this.getPosHead() + 1;
    }

    DecrementPosTail()
    {
        this.miPosTail = this.getPosTail() - 1;
    }

    IncrementPosIter()
    {
        this.miPosIter = this.getPosIter() + 1;
    }

    DecrementPosIter()
    {
        this.miPosIter = this.getPosIter() - 1;
    }

    step()
    {
        let lArray = this.getItems();
        if (this.mCallStack.length === 0)
        {
            return [lArray, true];
        }
        if(this.getPosStart() >= this.getPosEnd())
        {
            let call = this.mCallStack.pop();
            this.setPosStart(call[0]);
            this.setPosEnd(call[1]);
            this.setPosHead(this.getPosStart());
            this.setPosTail(this.getPosEnd());
            this.setPosIter(this.getPosStart());
            this.setDirectionRight(false);
            return [lArray, false];
        }
        else
        {
            if (this.getPosHead() >= this.getPosTail())
            {
                if (this.getPosIter() > this.getPosStart()){
                    this.mCallStack.push([this.getPosStart(), this.getPosIter() - 1]);
                }
                if (this.getPosIter() < this.getPosEnd()) {
                    this.mCallStack.push([this.getPosIter() + 1, this.getPosEnd()]);
                }
                let call = this.mCallStack.pop();
                this.setPosStart(call[0]);
                this.setPosEnd(call[1]);
                this.setPosHead(this.getPosStart());
                this.setPosTail(this.getPosEnd());
                this.setPosIter(this.getPosStart());
                this.setDirectionRight(false);
                return [lArray, false];
            }
            else
            {
                if (this.mbIsDirectionRight === false)
                {
                    if(lArray[this.getPosIter()]['value'] > lArray[this.getPosTail()]['value'])
                    {
                        var liTemp = lArray[this.getPosIter()]['value'];
                        lArray[this.getPosIter()]['value'] = lArray[this.getPosTail()]['value'];
                        lArray[this.getPosTail()]['value'] = liTemp;
                        this.setPosIter(this.getPosTail());
                        this.IncrementPosHead();
                        this.setDirectionRight(true);
                    }
                    else
                    {
                        this.DecrementPosTail();
                    }
                }
                else
                {
                    if (lArray[this.getPosIter()]['value'] < lArray[this.getPosHead()]['value'])
                    {
                        var liTemp = lArray[this.getPosIter()]['value'];
                        lArray[this.getPosIter()]['value'] = lArray[this.getPosHead()]['value'];
                        lArray[this.getPosHead()]['value'] = liTemp;
                        this.setPosIter(this.getPosHead());
                        this.DecrementPosTail();
                        this.setDirectionRight(false);
                    }
                    else
                    {
                        this.IncrementPosHead();
                    }
                }
                this.setItems(lArray);
                return [lArray, false];
            }
        }
    }
}
export default QuickSort;