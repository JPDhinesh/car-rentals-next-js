import { NextResponse } from "next/server";
import vehicleAPI from "@/vehicleAPI.json";

export async function GET(request) {
  return NextResponse.json(vehicleAPI);
}
