import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  type: varchar("type", { length: 256 }),
  categoryId: integer("categoryId"),
  userId: integer("userId"),
  payee: varchar("payee", { length: 256 }),
  note: varchar("note", { length: 256 }),
  date: varchar("date", { length: 256 }),
  time: varchar("time", { length: 256 }),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  icon: varchar("icon", { length: 256 }),
  color: varchar("color", { length: 256 }),
  userId: integer("userId"),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
  category: one(categories, {
    // Added: category relationship
    fields: [accounts.categoryId],
    references: [categories.id],
  }),
}));

export const categoriesRelations = relations(categories, ({ many, one }) => ({
  accounts: many(accounts),

  // user: one(users, {
  //   fields: [categories.userId],
  //   references: [users.id],
  // }),
}));
