function findfingers(arr){
  return arr.filter(num => Number.isInteger(num))
}
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findfingers(things);
console.log(integers);