import {
  array,
  Describe,
  Infer,
  number,
  object,
  string,
} from "https://deno.land/x/lestruct/mod.ts";
import { PureCountry as SharedPureCountry } from "../../mod.ts";

export const countryPure = {
  name: string(),
  enName: string(),
  countryCode: array(string()),
  geometries: object({
    type: string(),
    coordinates: array(array(number())),
  }),
};
export const pureCountry: Describe<SharedPureCountry> = object(countryPure);

export type PureCountry = Infer<typeof pureCountry>;
