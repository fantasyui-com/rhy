#!/usr/bin/env -S node --experimental-modules --no-warnings

import {find} from './index.mjs';

async function test({word}){
  console.log(await find(word))
}

test({word:'cat'});
