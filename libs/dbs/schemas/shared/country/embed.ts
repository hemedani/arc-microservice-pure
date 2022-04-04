import { array, Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { userPureObj } from "../user/mod.ts";

export const countryEmbeddedObj ={
  user: array(object(userPureObj)),
};

export const countryEmbedded = object(countryEmbeddedObj)

export type CountryEmbedded = Infer<typeof countryEmbedded>;
