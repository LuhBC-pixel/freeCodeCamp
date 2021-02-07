var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    let result = { status: null, change: [] };
    let change = cash - price;

    let register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    if (register.total === change) {
        result.status = 'CLOSED';
        result.change = cid;
        return result;
    }
    
    if (register.total < change) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }

    let changeArray = denom.reduce(function(acc, curr) {
        let value = 0;

        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            change = Math.round(change * 100) / 100;  
        }
        
        if (value > 0) {
            acc.push([curr.name, value]);
        }

        return acc;
    }, []);

    if (changeArray.length < 1 || change > 0) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    }

    result.status = 'OPEN';
    result.change = changeArray;
    console.log(result);
    return result;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);