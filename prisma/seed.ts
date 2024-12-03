import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  const password = "demo123"
  await prisma.user.upsert({
    update: {},
    create: {
      name: "Demo",
      email: "demo@driven.com.br",
      password: bcrypt.hashSync(password, 10)
    },
    where: {
      email: "demo@driven.com.br"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })