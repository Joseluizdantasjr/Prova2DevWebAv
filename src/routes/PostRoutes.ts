import { Router } from 'express';
import PostController from '../controllers/PostController';
import AutenticacaoMiddleware from '../middleware/AutenticacaoMiddleware';

const PostRouter = Router();

PostRouter.use(AutenticacaoMiddleware.usuarioAutorizado);

PostRouter.get('/api/posts', AutenticacaoMiddleware.usuarioAutorizado, PostController.listarPosts);

PostRouter.post('/api/post', AutenticacaoMiddleware.usuarioAutorizado, PostController.criarPost);

PostRouter.patch('/api/post/:id', AutenticacaoMiddleware.usuarioAutorizado,PostController.atualizarPost);

PostRouter.delete('/api/post/:id', AutenticacaoMiddleware.usuarioAutorizado, PostController.deletarPost);

export default PostRouter;