import app from "./src/app";
import { AppDataSource } from "./src/data-source";

AppDataSource.initialize()
  .then((): void => {
    console.log("Server is running on postgres");

    const PORT: number = Number(process.env.PORT) || 3000;

    app.listen(PORT, () => {
      console.log("Servidor executando");
    });
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err);
  });
