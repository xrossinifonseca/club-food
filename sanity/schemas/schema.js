import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import banner from "./banner";
import produtos from "./produtos";
import burguers from "./burguers";
import combos from "./combos";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([banner, produtos, burguers, combos]),
});
