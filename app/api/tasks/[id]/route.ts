import { prisma } from "@/app/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await request.json();

  const task = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
  ...(body.status && { status: body.status }),
  ...(body.report && { report: body.report }),
  ...(body.rating && { rating: body.rating }),
},
  });

  return Response.json(task);
}