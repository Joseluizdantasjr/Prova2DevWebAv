import { Router } from "express";

const AutenticacaoRouter = Router();

AutenticacaoRouter.post("/api/auth/signin");

AutenticacaoRouter.post("/api/auth/signup");

export default AutenticacaoRouter;