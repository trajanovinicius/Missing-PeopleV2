import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST || "localhost",
	port: Number(process.env.DB_PORT) || 3306,
	username: process.env.DB_USER || "root",
	password: process.env.DB_PASS || "",
	database: process.env.DB_NAME || "pleno_stack_api",
	synchronize: true,
	logging: true,
	entities: ["src/modules/**/entities/*.ts"],
	migrations: ["src/database/migrations/*.ts"],
	subscribers: [],
});
