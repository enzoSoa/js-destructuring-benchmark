const array = Array.from(Array(100000));

const mutableStartingTime = Date.now();
let mutableIndex = 0;
const mutableArray = array.reduce((build, _) => {
  mutableIndex++;
  build[mutableIndex] = "value" + mutableIndex;
  return build;
}, {});
const mutableEndingTime = Date.now();
console.log("Mutable array method", `${mutableEndingTime - mutableStartingTime}ms`);

const destructuringStartingTime = Date.now();
let destructuringIndex = 0;
const destructuringArray = array.reduce((build, _) => {
  destructuringIndex++;
  return {...build, [destructuringIndex]: "value" + destructuringIndex};
}, {});
const destructuringEndingTime = Date.now();
console.log("Destructuring array method", `${destructuringEndingTime - destructuringStartingTime}ms`);

