class SortAlgo
{
    constructor(items)
    {
        this.items = JSON.parse(JSON.stringify(items));
    }

    getItems()
    {
        return JSON.parse(JSON.stringify(this.items));
    }

    setItems(newItems)
    {
        this.items = JSON.parse(JSON.stringify(newItems));
    }

    step()
    {
        //MUST implement this in inherited classes
        throw new Error('You have to implement the method step()!');
    }
}
export default SortAlgo;