
// /*
// arguments: price, cash, change in drawer aka cid
// if cash is less than price return {status: "INSUFFICIENT_FUNDS", change: []};
// if cash is equal to the cid return {status: "CLOSED", change: [...]} where cid is 
// the change amount in the array
// Else return {status: "OPEN", change: [...]}; with change due in coins and bills sorted 
// from highest to lowest as the value for change



// converts nested array to array of objects
function convert(arr){
  let x = [];
  for(let i = 0; i < arr.length; i++){
    obj = {};
    let key = arr[i][0];
    let value = arr[i][1];
    obj[key] = value;
    x.push(obj);
  }
  return x;
}


// gets the total amount of all cash in drawer
function getDrawerTotal(arr){
  let total = 0;
  for(let i = 0; i< arr.length; i++){
    total += arr[i][1];
  }
  return Math.round(total*100)/100;
}


// returns an array of the customer's change
function getCustomersChange(drawer, cashInDrawer, change, currencyDictionary){
  changeArr = [];
  for(var i = 0; i < drawer.length; i++){
    let moneyName = cashInDrawer[i][0];
    let numOfMoneys = drawer[i][moneyName]/currencyDictionary[moneyName];
    let moneyCounter = 0

    while (change >= currencyDictionary[moneyName] && numOfMoneys > 0){
      change = change - currencyDictionary[moneyName];
      drawer[i][moneyName] = drawer[i][moneyName] - currencyDictionary[moneyName];
      moneyCounter++;
      numOfMoneys--;
    }
    if(moneyCounter > 0){
      changeArr.push([moneyName, currencyDictionary[moneyName] * moneyCounter]);
    }
  }
  return changeArr;
}

function checkCashRegister(price, cash, cid) {
  let currencyDictionary = {
    "PENNY":   0.01, 
    "NICKEL":  0.05, 
    "DIME":    0.10, 
    "QUARTER": 0.25, 
    "ONE":     1.00, 
    "FIVE":    5.00, 
    "TEN":    10.00, 
    "TWENTY": 20.00, 
    "ONE HUNDRED": 100.00
  }
  let cashInDrawer = cid.reverse();
  let drawer = convert(cashInDrawer);
  let totalBank = getDrawerTotal(cashInDrawer);
  let change = cash - price;

  let registerStatus = { status: 'OPEN', change: [] };
  let changeArr = [];


  // REGISTER STATUS
  if(change < 0 || totalBank < change){
    registerStatus = { status: 'INSUFFICIENT_FUNDS', change: [] };
    return registerStatus;
  }else if(change === totalBank){
    registerStatus = { status: 'CLOSED', change: cid };
    return registerStatus;
  }else{
    changeArr = getCustomersChange(drawer,cashInDrawer, change, currencyDictionary);
    registerStatus.change = changeArr;
  }
  
  return registerStatus;
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
["ONE HUNDRED", 100]]));

// {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
["ONE HUNDRED", 100]]));
