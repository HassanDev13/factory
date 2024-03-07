import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as country from "./schema/country";
import * as enums from "./schema/enums";
import * as role from "./schema/role";
import * as users from "./schema/users";

export const schema = {
  ...users,
  ...role,
  ...enums,
  ...country,
};

const connectionString = process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:54322/postgres';

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

export const connection = postgres(connectionString, { prepare: false });

export const db = drizzle(connection, {
  schema,
});
