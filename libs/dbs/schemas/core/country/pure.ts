import {
  array,
  Describe,
  Infer,
  number,
  object,
  string,
  optional
} from "https://deno.land/x/lestruct/mod.ts";
import { PureCountry as SharedPureCountry } from "../../shared/mod.ts";

export const countryPureObj = {
  name: string(),
  enName: optional(string()),
  countryCode: optional(array(string())),
  geometries: optional(object({
    type: string(),
    coordinates: array(array(number())),
  })),
};
export const pureCountry: Describe<Partial<SharedPureCountry>> = object(countryPureObj);

export type PureCountry = Infer<typeof pureCountry>;
