const { nanoid } = require("nanoid")

function all(bicycles){
    return bicycles.map((bicycle) => bicycle.id + " " + bicycle.name).join("\n");
}

function create(bicycleInventory,newBike){
const [name,priceInCents,inStock] = newBike;
const newBiketoAdd = {
    id :nanoid(3),
    name : name,
    priceInCents : priceInCents,
    inStock : inStock
}
bicycleInventory.push(newBiketoAdd);
return bicycleInventory;
}

function show(bicycleInventory,bicycle){
    return bicycleInventory.find(ele => ele.name === bicycle)
}

function update(bicycleInventory,edit){
    const [oldName,newName,newPrice,stock] = edit
    let bicycleIndex = bicycleInventory.findIndex( ele => ele.name === oldName);
    const {name, priceInCents, inStock} = bicycleInventory[bicycleIndex]
    bicycleInventory[bicycleIndex].name = newName || name
    bicycleInventory[bicycleIndex].priceInCents = newPrice || priceInCents
    bicycleInventory[bicycleIndex].inStock = stock || inStock
    return bicycleInventory;
}

function destroy(bicycleInventory, bicycle){
    let bicycleIndex = bicycleInventory.findIndex( ele => ele.name === bicycle);
    bicycleInventory.splice(bicycleIndex,1);
    return bicycleInventory;
}

module.exports = {all, create, show, update, destroy}