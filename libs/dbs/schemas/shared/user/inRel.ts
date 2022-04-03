import { Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { countryPure } from "../country/pure.ts";

export const userInRel = object({
  country: object(countryPure),
});

export type UserInRel = Infer<typeof userInRel>;
