import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("🚀 PlenoStack API rodando!");
});

AppDataSource.initialize()
	.then(() => {
		console.log("✅ Conexão com o banco de dados estabelecida!");

		const PORT = process.env.PORT || 3000;
		app.listen(PORT, () => {
			console.log(`✅ Servidor rodando na porta ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("❌ Erro ao conectar no banco de dados:", error);
	});
