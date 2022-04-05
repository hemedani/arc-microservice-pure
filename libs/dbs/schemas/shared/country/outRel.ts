import { array, Infer, object,optional } from "https://deno.land/x/lestruct/mod.ts";
import { pureUserObj } from "../user/mod.ts";

export const countryOutRel = object({
  user: optional(array(object(pureUserObj))),
});

export type CountryOutRel = Infer<typeof countryOutRel>;
