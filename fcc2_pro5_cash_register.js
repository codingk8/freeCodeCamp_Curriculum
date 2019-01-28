// freeCodeCamp - JS certification - Project #5 - Cash register

// With the 2 maps

// Try with le map & reduce + the for loop

var values = [
  { name: "ONE HUNDRED", val: 100.00 },
  { name: "TWENTY", val: 20.00 },
  { name: "TEN", val: 10.00 },
  { name: "FIVE", val: 5.00 },
  { name: "ONE", val: 1.00 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.10 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {

  let result = { status: "INSUFFICIENT_FUNDS", change: [] };
  
  let change = cash - price;
  
  let totalCid = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  console.log(totalCid);
  
  if (totalCid.total === change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
  
  if (totalCid.total < change) {
    return result;
  }
  
  let newArr = values.reduce(function(acc, curr) {
    let value = 0;
    while (totalCid[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      totalCid[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  
  if (newArr.length < 1 || change > 0) {
    return result;
  }
  
  result.status = "OPEN";
  result.change = newArr;
  return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// That's all!
