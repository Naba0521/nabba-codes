CREATE TABLE IF NOT EXISTS "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" integer,
	"categoryId" integer,
	"userId" integer,
	"payee" varchar(256),
	"note" varchar(256),
	"date" varchar(256),
	"time" varchar(256)
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"icon" varchar(256),
	"color" varchar(256),
	"userId" integer
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	"password" varchar(256)
);
