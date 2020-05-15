#!/usr/bin/env -S node --experimental-modules --no-warnings
import commander from 'commander';
import {find} from './index.mjs';

function myParseInt(value, dummyPrevious) {
  return parseInt(value);
}

commander
.option('-p, --popular', 'List only popular English words')
.option('-r, --rank <number>', 'Filter by rank (0 - 50000)', myParseInt)
.parse(process.argv);

async function main(options){
  const result = await find(options);
  if (result.length) console.log(result.join('\n'))
}

const word = commander.args[0];

main({
  word,
  popular:commander.popular,
  rank:commander.rank,
});
