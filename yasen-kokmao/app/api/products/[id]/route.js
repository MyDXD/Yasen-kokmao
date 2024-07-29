import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const product = await prisma.products.findUnique({
    where: { id: Number(params.id) },
  });
  return Response.json(product, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { name, content } = await req.json();
    console.log(name, content);
    return Response.json(
      await prisma.products.update({
        where: { id: Number(params.id) },
        data: { name, content },
      })
    );
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    return Response.json(
      await prisma.products.delete({
        where: { id: Number(params.id)},
      })
    );
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
