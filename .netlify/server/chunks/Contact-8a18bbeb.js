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
  C: () => Contact
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("./index-6b489d84.js");
const Contact = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `<input type="${"checkbox"}" id="${"my-modal-4"}" class="${"modal-toggle"}">
<label for="${"my-modal-4"}" class="${"modal cursor-pointer"}"><label class="${"modal-box relative"}" for="${""}"><h3 class="${"text-lg font-bold"}">Contact</h3>
    <p class="${"py-4"}">Under Construction</p></label></label>
`;
});
