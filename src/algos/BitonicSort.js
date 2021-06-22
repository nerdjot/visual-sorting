import SortAlgo from './SortAlgo'
class MergeSort extends SortAlgo
{
    constructor(items)
    {
        console.log("Bitonic sort");
        super(items);
        this.Log2 = Math.ceil(Math.log2(items.length));
        this.LogLevel = 0;
        this.Iter1 = 0;
    }
    
    step()
    {
        let lArray = this.getItems();
        if (this.LogLevel == this.Log2)
        {
            return [lArray, true];
        }
        else
        {
            if(this.Iter1 === this.items.length - this.LogLevel - 1)
            {
                this.Iter1 = 0;
                this.LogLevel = this.LogLevel + 1;
            }
            if((Math.floor(this.Iter1 / Math.pow(2, this.LogLevel + 1)) % 2) === 0)
            {
                
            }
            else
            {

            }
        }
        this.setItems(lArray);
        return [lArray, false];
    }
}
export default MergeSort;