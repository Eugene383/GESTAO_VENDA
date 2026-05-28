import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const hash = await bcrypt.hash("123456", 10);

  await prisma.user.upsert({
    where: { email: "admin@teste.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@teste.com",
      password: hash,
      role: "ADMIN",
    },
  });

  console.log("Utilizador criado: admin@teste.com / 123456");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());