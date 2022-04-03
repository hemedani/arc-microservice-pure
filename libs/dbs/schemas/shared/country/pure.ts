import {
  array,
  Infer,
  number,
  object,
  string,
} from "https://deno.land/x/lestruct/mod.ts";

export const countryPure = {
  name: string(),
  enName: string(),
  countryCode: array(string()),
  geometries: object({
    type: string(),
    coordinates: array(array(number())),
  }),
}
export const pureCountry = object(countryPure);

export type PureCountry = Infer<typeof pureCountry>;
