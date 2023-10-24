import { NextResponse } from "next/server";
import vehicleAPI from "@/vehicleAPI.json";

export async function GET(request, context) {
  const { params } = context;
  return NextResponse.json(
    vehicleAPI.filter((x) => params.vehicleId === x.id.toString())
  );
}
