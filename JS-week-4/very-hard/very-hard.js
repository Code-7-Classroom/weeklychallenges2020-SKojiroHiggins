var amount = 11;
var coins = [1, 2, 5];

function veryHard(amount, coins) {
    var coinCount, left, coinTotal;
    var coinTotal = 0;
    coins = coins.sort((a,b)=>a-b).reverse();
    
    for (var i = 0; i < coins.length; i++) {
        coinCount = Math.floor(amount / coins[i]); 
        coinTotal += coinCount; 
        amount = amount - (coinCount * coins[i]);
    } 

    if (amount !==0) {
        return -1; 
    } else {
        return coinTotal;
    }
}
// test 
// console.log(veryHard(amount, coins));
