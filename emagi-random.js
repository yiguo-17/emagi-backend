const eRandom = function(arr){
if (arr.length === 1){return arr[0]}
else{return arr[Math.floor(arr.length *Math.random())]}
}
module.exports = eRandom;