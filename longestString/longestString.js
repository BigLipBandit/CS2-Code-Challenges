const getLongestString = (arr) => {
  let fruitName =[];
  let lngth = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lngth) {
      lngth = arr[i].length;
      fruitName = arr[i];
    }
  }

  return fruitName;
}
//const output = getLongestString(['peach','grapes','grapefruit']);
console.log(getLongestString(['peach','grapefruits','grapefruit']));