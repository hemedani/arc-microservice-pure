import { Infer, object, Describe } from "https://deno.land/x/lestruct/mod.ts";
import { countryPureObj } from "../country/pure.ts";
import {UserInRel as SharedUserInRel} from "../../shared/mod.ts";
export const inRelUser = {
  country: object(countryPureObj),
};

export const userInRel:Describe<Partial<UserInRel>> = object(inRelUser) 

export type UserInRel = Infer<typeof userInRel>;
