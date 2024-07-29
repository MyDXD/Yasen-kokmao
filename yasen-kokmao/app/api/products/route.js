import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  return Response.json(await prisma.products.findMany());
}

export async function POST(req) {
  try {
    const {name, content, price ,image } = await req.json();
    const newProducts = await prisma.products.create({
      data: {
        name,
        content,
        price,
        image
      },
    });
    return Response.json(newProducts);
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}
