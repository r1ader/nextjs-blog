import { cloneDeep } from "./base.mjs";

const origin = {
  a: { b: 1 }
};
const target_deep = cloneDeep(origin);
const target_shallow = Object.assign({}, origin);
console.assert(target_deep.a !== origin.a);
console.assert(target_shallow.a === origin.a);
console.log("over");
