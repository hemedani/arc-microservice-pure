import { array, Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { userPureObj } from "../user/mod.ts";

export const countryOutRel = object({
  user: array(object(userPureObj)),
});

export type CountryOutRel = Infer<typeof countryOutRel>;
