/*
to installnpm
1 npm init (step by step, press enter to skip
  2 npm init -y
  can install dependicies by
  npm i lodash
  in node module all dependicies are stored
  LODASH is a library
) */
const _=require('lodash');
const items=[1,[2,[3,[4]]]]
const newItems= _.flattenDeep(items);
console.log(newItems);