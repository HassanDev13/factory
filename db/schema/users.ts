import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { userGender, userStatus } from "./enums";
import { relations, type InferSelectModel } from "drizzle-orm";
import { country } from "./country";
import { on } from "events";
import { roles } from "./role";
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';
import { z } from "zod";

export const users = pgTable("users", {
  userId: uuid("user_id").defaultRandom().primaryKey(),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  password: varchar("password", { length: 255 }),
  gender: userGender("user_gender").default("men"),
  status: userStatus("status").default("active"),
  country_id: uuid("country_id"),
  softDelete: boolean("soft_delete").default(false),
});

export const usersRelations = relations(users, ({ one }) => ({
  country: one(country, {
    fields: [users.country_id],
    references: [country.id],
  }),
}));

export const rolesRelations = relations(users, ({ many }) => ({
  roles: many(roles),
}));

export const usersRoles = pgTable(
  "users_to_roles",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.userId),
    roleId: uuid("role_id")
      .notNull()
      .references(() => roles.id),
  },
  (t) => ({
    pk: primaryKey(({ columns: [t.userId , t.roleId] })),
  })
);

export const usersRolesRelations = relations(usersRoles, ({ one }) => ({
  roles: one(roles, {
    fields: [usersRoles.roleId],
    references: [roles.id],
  }),
  user: one(users, {
    fields: [usersRoles.userId],
    references: [users.userId],
  }),
}));


// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users );
export type Country = InferSelectModel<typeof country>
export type User = InferSelectModel<typeof users> & {
  country: Country
}