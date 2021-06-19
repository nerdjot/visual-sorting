import SortAlgo from './SortAlgo'
class InsertionSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Bubble sort")
        super(items);
        this.miPos1 = 1;
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

    setPos2(val)
    {
        this.miPos2 = val;
    }

    IncrementPos1()
    {
        this.miPos1 = this.getPos1() + 1;
        this.setPos2(this.getPos1());
    }

    DecrementPos2()
    {
        this.miPos2 = (this.getPos2() - 1)%(this.miLenItems);
    }
    step()
    {
        var lArray = this.getItems();
        if(this.getPos1() === this.miLenItems)
        {
            return [lArray, true];
        }
        if(this.getPos2() === 0)
        {
            this.IncrementPos1();
            return [lArray, false];
        }
        if(lArray[this.getPos2() - 1]['value'] <= lArray[this.getPos2()]['value'])
        {
            this.IncrementPos1();
            return [lArray, false];
        }
        else
        {
            var liTemp = lArray[this.getPos2()-1]['value'];
            lArray[this.getPos2()-1]['value'] = lArray[this.getPos2()]['value'];
            lArray[this.getPos2()]['value'] = liTemp;
            this.DecrementPos2();
            this.setItems(lArray);
            return [lArray, false];
        }
    }
}
export default InsertionSort;