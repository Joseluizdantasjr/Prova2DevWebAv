import { Request, Response } from 'express';
import ComentarioBancoService from '../services/ComentarioBancoService';


class ComentarioController {
  constructor() {}

  async listarCommentarios(req: Request, res: Response) {
    try {
      const comments = await ComentarioBancoService.listarComentariosBanco;
      res.json({
        status: 'ok',
        comments: comments,
      });
    } catch (error) {
      console.log(error);
      res.json({
        status: 'error',
        message: error,
      });
    }
  }

  async criarComentarios(req: Request, res: Response) {
    const body = req.body;
    console.log(body);

    if (!body  || !body.authorId  || !body.postId) {
      res.json({
        status: 'error',
        message: 'Falta parâmetros',
      });
      return;
    }

    try {
      const newComment = await ComentarioBancoService.inserirComentariosBanco({
        content: body.content,
        author: { connect: { id: body.authorId } },
        post: { connect: { id: body.postId } }
      });
      res.json({
        status: 'ok',
        newComment: newComment,
      });
    } catch (error) {
      res.json({
        status: 'error',
        message: error,
      });
    }
  }

  async atualizarComentario(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.json({
        status: 'error',
        message: 'Faltou o ID',
      });
    }

    const { content, authorId, postId } = req.body;
    if (!content|| !authorId || !postId ) {
      res.json({
        status: 'error',
        message: 'Falta parâmetros',
      });
      return;
    }

    try {
      const updatedComment = await ComentarioBancoService.atualizarComentariosBanco(
        {
          content: content,
          post: { connect: { id: postId } },
          author: { connect: { id: authorId } },
        },
        parseInt(id)
      );
      res.json({
        status: 'ok',
        newComment: updatedComment,
      });
    } catch (error) {
      res.json({
        status: 'error',
        message: error,
      });
    }
  }

  async deletarComentario(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.json({
        status: 'error',
        message: 'Faltou o ID',
      });
    }

    try {
      const response = await ComentarioBancoService.deletarComentariosBanco(parseInt(id));
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

export default new ComentarioController();