import { Request, Response } from 'express';
import PostBancoService from '../services/PostBancoService';


class PostController {
  constructor() {}

  async listarPosts(req: Request, res: Response) {
    try {
      const posts = await PostBancoService.listarPostsBanco;
      res.json({
        status: 'ok',
        posts: posts,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: 'error',
        message: error,
      });
    }
  }

  async criarPost(req: Request, res: Response) {
    const body = req.body;
    console.log(body);

    if (!body.title || !body.published || !body.authorId) {
      res.json({
        status: 'error',
        message: 'Falta parâmetros',
      });
      return;
    }

    try {
      const newpost = await PostBancoService.inserirPostsBanco({
        title: body.title,
        content: body.content,
        published: body.published,
        author: { connect: { id: body.authorId } },
      });
      res.json({
        status: 'ok',
        newpost: newpost,
      });
    } catch (error) {
      res.json({
        status: 'error',
        message: error,
      });
    }
  }

  async atualizarPost(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.json({
        status: 'error',
        message: 'Faltou o ID',
      });
    }

    const { title, content, published, authorId } = req.body;
    if (!title || !published || !authorId) {
      res.json({
        status: 'error',
        message: 'Falta parâmetros',
      });
    }

    try {
      const updatedPost = await PostBancoService.atualizarPostsBanco(
        {
          title: title,
          content: content,
          published: published,
          author: { connect: { id: authorId } },
        },
        parseInt(id)
      );
      res.json({
        status: 'ok',
        newuser: updatedPost,
      });
    } catch (error) {
      res.json({
        status: 'error',
        message: error,
      });
    }
  }

  async deletarPost(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.json({
        status: 'error',
        message: 'Faltou o ID',
      });
    }

    try {
      const response = await PostBancoService.deletarPostsBanco(parseInt(id));
      if (response) {
        res.json({
          status: 'ok',
          message: 'Post deletado com sucesso',
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: 'error',
        message: error,
      });
    }
  }
}

export default new PostController();