import FastestValidator, {
  ValidationError,
} from "https://esm.sh/fastest-validator@1";
import { throwError } from "../../utils/mod.ts";
import {
  enums,
  Infer,
  is
} from "https://deno.land/x/lestruct/mod.ts";
import { createCountryFn } from "./createCountry.fn.ts";
const v = new FastestValidator();
const check = v.compile({
  doit: {
    type: "enum",
    values: [
      "createCountry",
      //"updateCountry",
      //"deleteCountry",
      //"getCountry",
      //"getCountries",
    ],
  },
});
const countryDoit = enums(['createCountry'])

export type CountryDoit =
  | "createCountry";
  //| "deleteCountry"
  //| "getCountry"
  //| "getCountries";

type countryFns = (doit: CountryDoit, details: any, context: any) => any;

export const countryFns: countryFns = (doit, details, context) => {
  is(doit,countryDoit)? {
    ["createCountry"]: async () => await createCountryFn(details, context),
    
  }[doit](): throwError("data not valid")

};
