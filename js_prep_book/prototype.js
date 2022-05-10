let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}