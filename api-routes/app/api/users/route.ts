import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("hello first api");
};
