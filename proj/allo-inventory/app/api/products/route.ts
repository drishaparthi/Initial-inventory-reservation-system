import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    warehouse: "Chennai Warehouse",
    stock: 5,
  },
  {
    id: 2,
    name: "Samsung S25",
    warehouse: "Bangalore Warehouse",
    stock: 2,
  },
  {
    id: 3,
    name: "AirPods Pro",
    warehouse: "Mumbai Warehouse",
    stock: 8,
  },
];

export async function GET() {
  return NextResponse.json(products);
}