import {
  array,
  boolean,
  date,
  enums,
  Infer,
  number,
  object,
  optional,
  string,
} from "https://deno.land/x/lestruct/mod.ts";

const level = enums(["Admin", "Editor", "Author", "Ghost", "Normal"]);
const gender = enums(["Male", "Female"]);

export const pureUserObj = {
  name: string(),
  age: number(),
  lastName: string(),
  phone: number(),
  gender: gender,
  birthDate: optional(date()),
  postalCode: string(),
  level: array(level),
  email: optional(string()),
  isActive: optional(boolean()),
  creditCardNumber: optional(number()),
};
export const pureUser = object(pureUserObj);

export type PureUser = Infer<typeof pureUser>;
