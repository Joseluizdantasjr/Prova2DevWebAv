import { Router } from 'express';
import ComentarioController from '../controllers/ComentarioController';
import AutenticacaoMiddleware from '../middleware/AutenticacaoMiddleware';

const ComentarioRouter = Router();

ComentarioRouter.use(AutenticacaoMiddleware.usuarioAutorizado);

ComentarioRouter.get('/api/comments', AutenticacaoMiddleware.usuarioAutorizado, ComentarioController.listarCommentarios);

ComentarioRouter.post('/api/comment', AutenticacaoMiddleware.usuarioAutorizado, ComentarioController.criarComentarios);

ComentarioRouter.patch('/api/comment/:id', AutenticacaoMiddleware.usuarioAutorizado, ComentarioController.atualizarComentario);

ComentarioRouter.delete('/api/comment/:id', AutenticacaoMiddleware.usuarioAutorizado, ComentarioController.deletarComentario);

export default ComentarioRouter;