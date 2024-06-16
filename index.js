const {all, create, show, update, destroy, add, sum, empty} = require("./src/inventoryFunctions")

const { readJSONFile, writeJSONFile} = require("./src/helpers")

function run (){
    let updatedCart = []
    let bicycleCart = readJSONFile("./data", "bicyclesCart.json")
    let bicycleInventory = readJSONFile("./data", "bicycles.json");
    let writeToFile = false;
    let updatedBicycleInventory = [];
    let action = process.argv[2];
    let bicycle = process.argv[3]
    switch(action) {
        case "all" :
            const viewInventory = all(bicycleInventory);
            console.log(viewInventory);
            break;
        case "create" :
            updatedBicycleInventory = create(bicycleInventory,process.argv.slice(3));
            writeToFile = true;
            break;
        case "show" :
            const showbicycle = show(bicycleInventory,bicycle);
            console.log(showbicycle);
        case "update" :
            updatedBicycleInventory = update(bicycleInventory,process.argv.slice(3));
            writeToFile = true;
            break;
        case "destroy":
            updatedBicycleInventory = destroy(bicycleInventory,bicycle);
            writeToFile = true;
            break;
        case "add":
            updatedCart = add(bicycleInventory,bicycleCart,bicycle);
            writeJSONFile("./data", "bicyclesCart.json", updatedCart)
            break;
        case "sum" :
            let sumOfCart = sum(bicycleCart);
            console.log(sumOfCart);
            break;
        case "empty" :
            updatedCart = empty(bicycleCart)
            writeJSONFile("./data", "bicyclesCart.json", updatedCart)
            break;
    }
    if (writeToFile) {
        writeJSONFile("./data", "bicycles.json", updatedBicycleInventory);
      }
}

run()