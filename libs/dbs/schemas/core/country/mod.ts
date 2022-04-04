import { assign, Infer } from "https://deno.land/x/lestruct@v0.0.1/mod.ts";
import db from "../../../db.ts";
import { countryEmbedded } from "./embed.ts";
import { pureCountry } from "./pure.ts";

// export interface RUser {
//   _id: RType;
//   name?: RType;
//   lastName?: RType;
//   phone?: RType;
//   gender?: RType;
//   birthDate?: RType;
//   postalCode?: RType;
//   addresses?: {
//     country?: RCountry;
//     state?: RState;
//     city?: RCity;
//     addressTxt?: RType;
//   };
//   level?: RType;
//   email?: RType;
//   creditCardNumber?: RType;
//   isActive?: RType;
// }

export const countryObj = assign(countryEmbedded, pureCountry);

export type Country = Infer<typeof countryObj>;

export const country = db.collection<Country>("Country");

export * from "./embed.ts";
export * from "./inRel.ts";
export * from "./outRel.ts";
export * from "./pure.ts";
export * from "./selectable.ts";
