import rhyme from 'rhyme';

async function find(word){
  return new Promise(function(resolve, reject) {
    rhyme(function (r) {
        resolve(r.rhyme(word).join('\n').toLowerCase());
    });
  });
}

export {find};
