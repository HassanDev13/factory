import { relations } from "drizzle-orm";
import { pgTable, serial, varchar, boolean, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";

export const country = pgTable("country", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }),
  softDelete: boolean("soft_delete").default(false),
});

const countryRelations = relations(country, ({ many }) => ({
  users: many(users),
}));

