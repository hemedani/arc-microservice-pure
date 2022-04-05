import { countries, ICountry } from "../../schemas/mode.ts";
import { Bson } from "../../utils/deps.ts";
import {
  checkRoleFn,
  emptyTokenError,
  isAuthFn,
  notFoundError,
} from "../../utils/mod.ts";
import { Context } from "../mod.ts";
import {
  InputCountry,
} from "./createCountry.type.ts";
import { getCountry } from "./sharedFunctions/getCountry.ts";
import { country } from "../../../../../libs/dbs/schemas/core/country/mod.ts"

type CreateCountryFn = (
  details: InputCountry,
  context: Context,
) => Promise<Partial<ICountry>>;

/**
 * @function
 * Represent createCountry (insert country to db)
 * @param details
 * @param context
 */
export const createCountryFn: CreateCountryFn = async (details, context) => {
  !context ? emptyTokenError() : null;

  /**check user is authenticated */
  const user = await isAuthFn(context.token!);

  /**if user was authenticated,check the user role */
  user ? await checkRoleFn(user, ["Admin", "Normal"]) : notFoundError("User");
  /** check whether the details(input) is right or not*/
  const {
    set: { name, enName, geometries, countryCode },
    get,
  } = details;

  const createCountry = await country.insertOne({
   name,
   enName,
    geometries,
    countryCode
  });

  return getCountry({ _id: new Bson.ObjectID(createCountry), get });
};
