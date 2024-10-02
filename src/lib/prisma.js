import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();

globalThis.prisma = globalThis.prisma ?? prismaClientSingleton();

const prisma = globalThis.prisma;

export default prisma;