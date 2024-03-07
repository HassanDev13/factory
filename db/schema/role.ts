import { pgTable, uuid } from "drizzle-orm/pg-core";
import { role } from "./enums";
import { relations } from "drizzle-orm";
import { users } from "./users";

export const roles = pgTable("roles", {
  id: uuid("id").defaultRandom().primaryKey(),
  roles: role("roles").default("student"),
});

export const rolesRelations = relations(roles, ({ many }) => ({
  users: many(users),
}));
