import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const UsuarioRouter = Router();

UsuarioRouter.get("/api/users", UsuarioController.listarUsuarios);

UsuarioRouter.post("/api/user", UsuarioController.criarUsuarios);

UsuarioRouter.patch("/api/user/:id", UsuarioController.atualizarUsuarios);

UsuarioRouter.delete("/api/user/:id", UsuarioController.deletarUsuario);

export default UsuarioRouter;