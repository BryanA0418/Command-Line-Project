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

function add(bicycleInventory,bicycleCart,bicycle){
    let index;
    const bikeToPurchase = bicycleInventory.find(ele => ele.name === bicycle)
    try {
        
     
    if(bikeToPurchase){
    if(bicycleCart.find((ele,ind) => ele.name === bikeToPurchase.name ? ele.quantity++ : null)){
        return bicycleCart
    }else{
        bikeToPurchase["quantity"] = 1
        bicycleCart.push(bikeToPurchase)
        return bicycleCart;
        }
    }else throw("Bike Doesn't exist")
    
    } catch (error) {
        console.error(error);
        return bicycleCart;
    }
}

function sum(bicycleCart){
    let sum = 0;
    for(let i = 0;i<bicycleCart.length;i++){
        if(bicycleCart[i].quantity > 1){
            sum += +bicycleCart[i].priceInCents * bicycleCart[i].quantity;
        } else {
            sum += +bicycleCart[i].priceInCents
        }
    }
    return `${sum/100}.00$`;
}

function empty(bicycleCart){
bicycleCart = []
return bicycleCart
}

module.exports = {all, create, show, update, destroy, add, sum, empty}