const symbols = require("./emagi-symbols")
const words = require("./emagi-words")

const eSearch = function(str){
    const results = [];
    for (const word of words){
        if(str === word||word.includes(str)){
            results.push(symbols[words.indexOf(word)])
        }}
    return results;}


module.exports = eSearch;