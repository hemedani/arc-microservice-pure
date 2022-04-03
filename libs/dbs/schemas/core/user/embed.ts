import { Describe, Infer, object } from "https://deno.land/x/lestruct/mod.ts";
import { UserEmbedded as SharedUserEmbedded } from "../../mod.ts";
import { countryPure } from "../country/pure.ts";

export const userEmbedded: Describe<SharedUserEmbedded> = object({
  country: object(countryPure),
});

export type UserEmbedded = Infer<typeof userEmbedded>;
