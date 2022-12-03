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
  N: () => NavbarOther
});
module.exports = __toCommonJS(stdin_exports);
var import_index_6b489d84 = require("./index-6b489d84.js");
var import_Contact_8a18bbeb = require("./Contact-8a18bbeb.js");
const NavbarOther = (0, import_index_6b489d84.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100 fixed top-0 z-10"}"><div class="${"navbar-start"}"><a href="${"/"}" target="${"_self"}"><button class="${"glow-on-hover pl-3 pr-3"}">Home</button></a></div>
	<div class="${"navbar-center"}"><button class="${"btn btn-ghost gradient-text normal-case text-xl"}">Reid Patterson</button></div>
	<div class="${"navbar-end"}">${(0, import_index_6b489d84.v)(import_Contact_8a18bbeb.C, "Contact").$$render($$result, {}, {}, {})}</div>
</div>`;
});
