//https://github.com/asiffmahmudd/ph-javascript-assignment

function kilometerToMeter(km){
    if(isNaN(km) || km < 0)
        console.log("Please enter a valid output");
    else{
        var meter = km*1000;
        return Number(meter);
    }
    
}


function budgetCalculator(watch, phone, laptop){
    if(!Number.isInteger(watch) || !Number.isInteger(phone) || !Number.isInteger(laptop) || watch < 0 || phone < 0 || laptop < 0)
        console.log("Please enter a valid output");
    else{
        let watchCost = 50;
        let phoneCost = 100;
        let laptopCost = 500;

        let totalCost = watch*watchCost + phone*phoneCost + laptop*laptopCost;
        return totalCost;
    }
    
}

function hotelCost(days){
    if(Number.isInteger(days)){
        let cost = 0;
        if(days <= 10){
            cost = days*100;
        }
        else if(days <=20){
            cost = 10*100;              //calcualting first 10 days cost
            days = days-10;             //calculating remaining days
            cost += days*80;            //calculating total cost
        }
        else{
            cost = 10*100 + 10*80;      //calcualting first 20 days cost
            days = days-20;             //calculating remaining days
            cost += days*50;            //calculating total cost
        }
        return cost;
    }
    else{
        console.log("Please enter a valid input");
    }
}


function megaFriend(friendsName){
    if(Array.isArray(friendsName)){
        let maxLength = friendsName[0].length;
        let maxName = friendsName[0];
        let arrayLength = friendsName.length;
        for(let i = 0; i < arrayLength; i++){
            if(friendsName[i].length > maxLength){   //checking if the length of the name is greater than maxLength
                maxLength = friendsName[i].length;   //changing the value of maxLength
                maxName = friendsName[i];           //changing the value of return value
            }
        }
        return maxName;
    }
    else{
        console.log("Please enter a valid input");
    }
    
}


