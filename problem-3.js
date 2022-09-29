// write a program to calculate oil price

function oilPrice(dieselQuantity, petrolQuantity, OctaneQuantity)
{
    const dieselPrice = dieselQuantity * 114;
    const petrolPrice = petrolQuantity * 130;
    const octanePrice = OctaneQuantity * 135;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;

    return totalPrice;
}

const oilCost = oilPrice(30,20,10);
console.log(oilCost);