import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { name, email, password, workspaceName } = await req.json();

    if (!name || !email || !password || !workspaceName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const workspaceSlug = slugify(workspaceName);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { name, email, passwordHash, role: "ADMIN" },
      });

      const workspace = await tx.workspace.create({
        data: { name: workspaceName, slug: workspaceSlug },
      });

      await tx.workspaceMember.create({
        data: { userId: user.id, workspaceId: workspace.id, role: "ADMIN" },
      });

      return { user, workspace };
    });

    return NextResponse.json({
      success: true,
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
