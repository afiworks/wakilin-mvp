
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return Response.json(tasks);
}
export async function POST(request: Request) {
  const body = await request.json();

  const task = await prisma.task.create({
    data: {
      title: body.title,
      city: body.city,
      address: body.address,
      budget: Number(body.budget),
      deadline: new Date(body.deadline),
      notes: body.notes,
    },
  });

  return Response.json(task);
}
