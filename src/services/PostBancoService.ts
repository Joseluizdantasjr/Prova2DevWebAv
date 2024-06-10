import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostBancoService {
  constructor() {}

  async listarPostsBanco() {
    try {
      return await prisma.post.findMany({
        select: {
          title: true
        }
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async inserirPostsBanco(post: Prisma.PostCreateInput) {
    try {
      const newpost = await prisma.post.create({
        data: post,
      });
      return newpost;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async atualizarPostsBanco(post: Prisma.PostUpdateInput, id: number) {
    try {
      const updatedPost = await prisma.post.update({
        data: post,
        where: {
          id: id,
        },
      });
      return updatedPost;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deletarPostsBanco(id: number) {
    try {
      await prisma.post.delete({
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

export default new PostBancoService();