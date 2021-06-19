import SortAlgo from './SortAlgo'
class CocktailSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Bubble sort")
        super(items);
        this.miLenItems = items.length;
        this.miPosStart = 0;
        this.miPosEnd = this.miLenItems - 1;
        this.miPosIter = 0;
        this.mbIsDirectionRight = true;
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

    setPos2(val)
    {
        this.miPos2 = val;
    }

    IncrementPosStart()
    {
        this.miPosStart = this.getPosStart() + 1;
    }

    DecrementPosEnd()
    {
        this.miPosEnd = this.getPosEnd() - 1;
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
        var lArray = this.getItems();
        if (this.getPosStart() >= this.getPosEnd())
        {
            return [lArray, true];
        }
        if (this.mbIsDirectionRight === true)
        {
            if (this.getPosIter() === this.getPosEnd())
            {
                this.DecrementPosEnd();
                this.DecrementPosIter();
                this.setDirectionRight(false);
                return [lArray, false];
            }
            if (lArray[this.getPosIter()]['value'] > lArray[this.getPosIter() + 1]['value'])
            {
                var liTemp = lArray[this.getPosIter()+1]['value'];
                lArray[this.getPosIter()+1]['value'] = lArray[this.getPosIter()]['value'];
                lArray[this.getPosIter()]['value'] = liTemp;
                
            }
            this.setItems(lArray);
            this.IncrementPosIter();
            return [lArray, false];
        }
        else
        {
            if (this.getPosIter() === this.getPosStart())
            {
                this.IncrementPosStart();
                this.IncrementPosIter();
                this.setDirectionRight(true);
                return [lArray, false];
            }
            if (lArray[this.getPosIter()]['value'] < lArray[this.getPosIter() - 1]['value'])
            {
                liTemp = lArray[this.getPosIter()-1]['value'];
                lArray[this.getPosIter()-1]['value'] = lArray[this.getPosIter()]['value'];
                lArray[this.getPosIter()]['value'] = liTemp;
                this.setItems(lArray);
            }
            this.DecrementPosIter();
            return [lArray, false];
        }
    }
}
export default CocktailSort;