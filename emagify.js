const words = require("/mnt/l/Users/yiguo/git/week-8/emagi-backend/emagi-words");
const symbols = require("/mnt/l/Users/yiguo/git/week-8/emagi-backend/emagi-symbols");

const toEmoji = function(arr){
    const results = [];
    for(const str of arr){
        if(words.includes(str)){
            results.push(symbols[words.indexOf(str)]);
        }
        else{results.push(str);}
    }
    return results
}
module.exports = toEmoji;