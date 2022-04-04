import { Infer, object, Describe } from "https://deno.land/x/lestruct/mod.ts";
import { countryPure } from "../country/pure.ts";
import {UserInRel as SharedUserInRel} from "../../shared/mod.ts";
export const inRelUser = {
  country: object(countryPure),
};

export const userInRel:Describe<UserInRel> = object(inRelUser) 

export type UserInRel = Infer<typeof userInRel>;
