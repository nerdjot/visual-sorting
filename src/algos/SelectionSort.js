import SortAlgo from './SortAlgo'
class SelectionSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Selection sort")
        super(items);
        this.miPos1 = 0;
        this.miMinPos = 0;
        this.miPos2 = 1;
        this.miLenItems = items.length;
    }
    getPos1()
    {
        return this.miPos1;
    }

    getPos2()
    {
        return this.miPos2;
    }

    getMinPos()
    {
        return this.miMinPos;
    }

    setMinPos(val)
    {
        this.miMinPos = val;
    }

    setPos2(val)
    {
        this.miPos2 = val;
    }

    IncrementPos1()
    {
        this.miPos1 = this.getPos1() + 1;
        this.setPos2(this.getPos1() + 1);
        this.setMinPos(this.getPos1());
    }

    IncrementPos2()
    {
        this.miPos2 = this.getPos2() + 1;
    }
    step()
    {
        var lArray = this.getItems();
        if(this.getPos1() === this.miLenItems - 1)
        {
            return [lArray, true];
        }
        if(this.getPos2() === this.miLenItems)
        {
            var liTemp = lArray[this.getPos1()]['value'];
            lArray[this.getPos1()]['value'] = lArray[this.getMinPos()]['value'];
            lArray[this.getMinPos()]['value'] = liTemp;
            this.IncrementPos1();
            this.setItems(lArray);
            return [lArray, false];
        }
        if(lArray[this.getMinPos()]['value'] > lArray[this.getPos2()]['value'])
        {
            this.setMinPos(this.getPos2());            
        }
        else
        {
            this.IncrementPos2();
        }
        return [lArray, false];
    }
}
export default SelectionSort;