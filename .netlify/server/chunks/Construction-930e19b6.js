var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  C: () => Construction
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("./index-6b489d84.js");
const Construction = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"m-auto pt-20 text-center"}"><h1 class="${"text-2xl text-center"}">This part of the site is currently under construction</h1>
    <img class="${"m-auto max-h-48"}" src="${"../assets/construction.png"}" alt="${"under construction"}">
    <p class="${"text-lg text-center"}">Please check back again in a few days</p>
    <p class="${"text-md"}">Last Update: Dec 28, 2022</p></div>`;
});
