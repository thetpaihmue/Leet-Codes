var buyChoco = function (prices, money) {
  let outputs = [];
  prices.sort(function (a, b) {
    return a - b;
  });
  console.log("sorted prices", prices);
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] >= money) {
      prices.splice(i);
    }
  }
  console.log("prices after splice", prices);
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] <= money) {
        outputs.push(money - (prices[i] + prices[j]));
      }
    }
  }
  console.log("outputs", outputs);
  outputs.sort(function (a, b) {
    return b - a;
  });
  console.log("sorted outputs", outputs);
  if (outputs.length === 0) {
    return money;
  } else {
    return outputs[0];
  }
};

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62));
