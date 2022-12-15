import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import banner from "./banner";
import pizzas from "./pizzas";
import burgers from "./burgers";
import combos from "./combos";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([banner, pizzas, burgers, combos]),
});
