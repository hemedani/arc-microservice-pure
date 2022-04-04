import { array, Infer, object,Describe } from "https://deno.land/x/lestruct/mod.ts";
import { userPureObj } from "../user/pure.ts";
import {CountryOutRel as ShareCountryOutRel} from "../../shared/country/outRel.ts"

export const outRelCountryObj = {
  user: array(object(userPureObj)),
};

export const countryOutRel: Describe<Partial<ShareCountryOutRel>> = object(outRelCountryObj)

export type CountryOutRel = Infer<typeof countryOutRel>;
