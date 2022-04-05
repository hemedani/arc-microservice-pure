import { array, Infer, object,Describe,optional } from "https://deno.land/x/lestruct/mod.ts";
import { pureUserObj } from "../user/pure.ts";
import {CountryOutRel as ShareCountryOutRel} from "../../shared/country/outRel.ts"

export const outRelCountryObj = {
  user: optional(array(object(pureUserObj))),
};

export const countryOutRel: Describe<Partial<ShareCountryOutRel>> = object(outRelCountryObj)

export type CountryOutRel = Infer<typeof countryOutRel>;
