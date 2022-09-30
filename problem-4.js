// write a program to find out public bus fare for unlucky People :( . 

function publicBusFare(people)
{
    //how many can travel with bus.

    const busNeed = Math.trunc(people/50);
    const peopleCanTravelWithBus = busNeed * 50;

    //  find out how many can fit in microbus
    const remainingPeople = people - peopleCanTravelWithBus;

    const microBusNeed = Math.trunc(remainingPeople/11);
    const peopleCanTravelWithMicrobus = microBusNeed * 11;

    // people who have to go with the public bus

    const peopleRemainForPublicBus = remainingPeople - peopleCanTravelWithMicrobus;
    
    const busCost = peopleRemainForPublicBus * 250;

    // final output for public bus fare

    if(busCost ===0)
    {
        console.log("good news no one have to travel with Public Bus");
    }

    return busCost;
    


}

const costForPublicBus = publicBusFare(50);
console.log(costForPublicBus);