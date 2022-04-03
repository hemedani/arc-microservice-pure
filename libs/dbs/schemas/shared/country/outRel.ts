import { array, Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { userPure } from "../user/mod.ts";

export const countryOutRel = object({
  user: array(object(userPure)),
});

export type CountryOutRel = Infer<typeof countryOutRel>;
