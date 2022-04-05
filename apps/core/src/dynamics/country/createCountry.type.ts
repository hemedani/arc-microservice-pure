import {
  array,
  Infer,
  number,
  object,
  string,
  optional,
  validate
} from "https://deno.land/x/lestruct/mod.ts";
import { countrySelectable } from "../../../../../libs/dbs/schemas/core/country/mod.ts";
/**
 * this is validator for create country
 * this validate the input object,
 * has a tow part {set,get}
 * object "get" for specify user what wants to return
 * object "set" for validate input value
 */

export const inputCountry =object({
  set:object({
    name: string(),
    enName: optional(string()),
    countryCode: optional(array(string())),
    geometries: optional(object({
      type: string(),
      coordinates: array(array(number())),
    })),
  }),
  get:object((countrySelectable(2)))
})

/**
 * @interface
 * Represent Input details
 * this is input of country
 * object "get" for specify user what wants to return
 * object "set" for input value
 */


export type InputCountry = Infer<typeof inputCountry>;

//export interface ICreateCountryDetails {
//  set: {
//    name: string;
//    enName?: string;
//    countryCode?: string[];
//    geometries?: [number, number][];
//  };
//  get: RCountry;
//}
export const validateCreateCountry = ( data:InputCountry )=>{
  const [error,country] = validate(data,inputCountry);
  return [error , country];
}




