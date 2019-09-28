
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
  let moneyValues = [100,20,10,5,1,.25,.10,.05,.01];
  for(let i = 0; i < arr.length; i++){
    let obj = {};
    obj["moneyType"] = arr[i][0];
    obj["moneyValue"] = moneyValues[i];
    obj["totalMoney"] = arr[i][1];
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
function getCustomersChange(drawer, cashInDrawer, change, changeArr){
  changeArr = [];
  for(var i = 0; i < drawer.length; i++){
    if(change >= drawer[i].moneyValue && change > 0 && drawer[i].totalMoney>0){

      let partialChange = Math.floor(change/drawer[i].moneyValue) * drawer[i].moneyValue;
      if(partialChange > drawer[i].totalMoney){
        partialChange = drawer[i].totalMoney;
      }
      changeArr.push([drawer[i].moneyType,partialChange]);
      change-= partialChange;
      change = +change.toFixed(2);
    }
    
    if(change === 0){
      break;
    }
  }
  return changeArr;
}

function checkCashRegister(price, cash, cid) {
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
    registerStatus = { status: 'CLOSED', change: cid.reverse() };
    return registerStatus;
  }else{
    changeArr = getCustomersChange(drawer,cashInDrawer, change);
    if(change > getDrawerTotal(changeArr)){
      registerStatus = { status: 'INSUFFICIENT_FUNDS', change: [] };
    }else{
      registerStatus.change = changeArr;
    } 
  }
  
  return registerStatus;
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.


// // {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
// ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
// ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// //  should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}