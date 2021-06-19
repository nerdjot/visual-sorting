import SortAlgo from './SortAlgo'
class BubbleSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Bubble sort")
        super(items);
        this.miPos1 = 0;
        this.miPos2 = 0;
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
        this.miPos1 = (this.getPos1() + 1)%(this.miLenItems);
        this.setPos2(0);
    }

    IncrementPos2()
    {
        this.miPos2 = (this.getPos2() + 1)%(this.miLenItems);
    }

    step()
    {
        console.log("Taking step");
        var lArray = this.getItems();
        if (this.getPos1() === this.miLenItems - 2)
        {
            return [lArray, true];
        }
        if (this.getPos2() === this.miLenItems - 1 - this.getPos1())
        {
            this.IncrementPos1();
        }
        if (lArray[this.getPos2()]['value'] > lArray[this.getPos2() + 1]['value'])
        {
            console.log(this.items);
            var liTemp = lArray[this.getPos2()+1]['value'];
            lArray[this.getPos2()+1]['value'] = lArray[this.getPos2()]['value'];
            lArray[this.getPos2()]['value'] = liTemp;
            console.log(this.items);
            this.IncrementPos2();
        }
        else
        {
            this.IncrementPos2();
        }
        console.log("returning array ::");
        console.log(this.items);
        this.setItems(lArray);
        return [lArray, false];
    }
}
export default BubbleSort;