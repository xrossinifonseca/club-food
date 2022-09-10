import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import banner from "./banner";
import fruits from "./fruits";
import legumes from "./legumes";
import ofertas from "./ofertas";
import verduras from "./verduras";
import bebidas from "./bebidas";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    banner,
    fruits,
    legumes,
    ofertas,
    verduras,
    bebidas,
  ]),
});
