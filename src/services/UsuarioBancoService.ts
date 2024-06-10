import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioBancoService {
  constructor() {}

  async listarUsuariosBanco() {
    try {
      return await prisma.user.findMany({
        select: {
          name: true,
          email: true,
          password: false
        }
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async inserirUsuariosBanco(user: Prisma.UserCreateInput) {
    try {
      const newuser = await prisma.user.create({
        data: user,
      });
      return newuser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async atualizarUsuariosBanco(user: Prisma.UserUpdateInput, id: number) {
    try {
      const updatedUser = await prisma.user.update({
        data: user,
        where: {
          id: id,
        },
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deletarUsuariosBanco(id: number) {
    try {
      await prisma.user.delete({
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

export default new UsuarioBancoService();