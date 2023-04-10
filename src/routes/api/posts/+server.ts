import prisma from "$lib/database/prisma";

export async function GET(): Promise<Response> {
  const posts = await prisma.post.findMany({
    where: {
      published: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return new Response(JSON.stringify(posts), { status: 200 });
}