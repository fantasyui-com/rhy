#!/usr/bin/env -S node --experimental-modules --no-warnings
import commander from 'commander';
import {find} from './index.mjs';

commander.option('-d, --debug', 'output extra debugging')
commander.parse(process.argv);
const word = commander.args[0];

async function main({word}){

  console.log(await find(word))

}

main({word});
