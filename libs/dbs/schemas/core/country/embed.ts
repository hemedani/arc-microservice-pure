
import { array, Infer, object,Describe,optional } from "https://deno.land/x/lestruct/mod.ts";
import { pureUserObj } from "../user/pure.ts";
import { CountryEmbedded as SharedCountryEmbedded } from "../../mod.ts";

export const countryEmbeddedObj ={
 user: optional(array(object(pureUserObj))),
}
export const countryEmbedded : Describe<Partial<SharedCountryEmbedded>> = object(countryEmbeddedObj);


export type CountryEmbedded = Infer<typeof countryEmbedded>;

