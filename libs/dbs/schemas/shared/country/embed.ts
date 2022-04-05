import { array, Infer, object,optional } from "https://deno.land/x/lestruct/mod.ts";
import { pureUserObj } from "../user/mod.ts";

export const countryEmbeddedObj ={
  user: optional(array(object(pureUserObj))),
};

export const countryEmbedded = object(countryEmbeddedObj)

export type CountryEmbedded = Infer<typeof countryEmbedded>;
