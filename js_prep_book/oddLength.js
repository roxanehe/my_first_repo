function oddLength(arr){
  return arr.reduce((accumulater, num) => 
  {let length = num.length;
  if (length % 2 === 1){
    accumulater.push(length)
  }
  return accumulater;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLength(arr));