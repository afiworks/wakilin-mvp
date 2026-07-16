import { prisma } from "@/app/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  const profile = await prisma.scoutProfile.create({
    data: {
      name: body.name,
      city: body.city,
      bio: body.bio,
    },
  });

  return Response.json(profile);
}