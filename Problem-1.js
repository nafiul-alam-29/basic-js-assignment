function radianToDegree(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
          
console.log(radianToDegree(25).toFixed(2));