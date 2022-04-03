import { Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { countryPure } from "../country/pure.ts";

export const userEmbedded = object({
  country: object(countryPure),
});

export type UserEmbedded = Infer<typeof userEmbedded>;
