import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ComentarioBancoService {
  constructor() {}

  async listarComentariosBanco() {
    try {
      return await prisma.comment.findMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async inserirComentariosBanco(comment: Prisma.CommentCreateInput) {
    try {
      const newcomment = await prisma.comment.create({
        data: comment,
      });
      return newcomment;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async atualizarComentariosBanco(comment: Prisma.CommentUpdateInput, id: number) {
    try {
      const updatedComment = await prisma.comment.update({
        data: comment,
        where: {
          id: id,
        },
      });
      return updatedComment;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deletarComentariosBanco(id: number) {
    try {
      await prisma.comment.delete({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new ComentarioBancoService();