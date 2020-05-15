import rhyme from 'rhyme';

import common from 'most-common-words-by-language';
import byKey from 'natural-sort-by-key';

async function promiseRhyme(word){
  return new Promise(function(resolve, reject) {
    rhyme(function (r) {
        resolve( r.rhyme(word).map(s=>s.toLowerCase()) );
    });
  });
}
async function find({word, popular, rank}){

  let words = (await promiseRhyme(word))
  .map(word=>({word, rank: common.findWord(word).english}))
  .sort(byKey('rank'))
  if(popular){
    words = words.filter(o=>o.rank!==undefined)
  } else if(rank){
    words = words.filter(o=>o.rank<rank)
  }else{
    words = words
  }

  return words.map(o=>o.word);
}

export {find};
