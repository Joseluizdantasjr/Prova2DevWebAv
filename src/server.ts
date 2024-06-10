import express from "express";
import AutenticacaoRouter from "./routes/AutenticacaoRoutes";
import UsuarioRouter from "./routes/UsuarioRoutes";
import PostRouter from "./routes/PostRoutes";
import ComentarioRouter from "./routes/ComentarioRoutes";

const port = 3000;

const app = express();
app.use(express.json());

app.use(UsuarioRouter);
app.use(AutenticacaoRouter);
app.use(PostRouter);
app.use(ComentarioRouter);

app.listen(port, function () {
  console.log("Servidor rodando na porta " + port);
});