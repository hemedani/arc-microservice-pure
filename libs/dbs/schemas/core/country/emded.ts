
import { array, Infer, object,Describe } from "https://deno.land/x/lestruct/mod.ts";
import { userPureObj } from "../user/pure.ts";
import { CountryEmbedded as SharedCountryEmbedded } from "../../mod.ts";

export const countryEmbeddedObj ={
 user: array(object(userPureObj)),
}
export const countryEmbedded : Describe<Partial<SharedCountryEmbedded>> = object(countryEmbeddedObj);


export type CountryEmbedded = Infer<typeof countryEmbedded>;

