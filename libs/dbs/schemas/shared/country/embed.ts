import { array, Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { userPure } from "../user/mod.ts";

export const countryEmbedded = object({
  user: array(object(userPure)),
});

export type CountryEmbedded = Infer<typeof countryEmbedded>;
