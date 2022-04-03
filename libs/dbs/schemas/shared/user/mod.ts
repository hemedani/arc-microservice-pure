import { assign, Infer } from "https://deno.land/x/lestruct@v0.0.1/mod.ts";
import db from "../../../db.ts";
import { userEmbedded } from "./embed.ts";
import { pureUser } from "./pure.ts";

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

export const userObj = assign(userEmbedded, pureUser);

export type User = Infer<typeof userObj>;

export const user = db.collection<User>("User");

export * from "./embed.ts";
export * from "./inRel.ts";
export * from "./outRel.ts";
export * from "./pure.ts";
export * from "./selectable.ts";
