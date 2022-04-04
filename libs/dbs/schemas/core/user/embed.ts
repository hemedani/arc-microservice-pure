import { Describe, Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { UserEmbedded as SharedUserEmbedded } from "../../mod.ts";
import { countryPureObj } from "../country/pure.ts";

export const userEmbeddedObj = {
  country: object(countryPureObj),
}


export const userEmbedded: Describe<Partial<SharedUserEmbedded>> = object(userEmbeddedObj);

export type UserEmbedded = Infer<typeof userEmbedded>;
