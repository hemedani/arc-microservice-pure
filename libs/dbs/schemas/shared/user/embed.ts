import { Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { countryPure } from "../country/pure.ts";

export const userEmbeddedObj ={
  country: object(countryPure),
};

export const userEmbedded=Object(userEmbeddedObj);


export type UserEmbedded = Infer<typeof userEmbedded>;
