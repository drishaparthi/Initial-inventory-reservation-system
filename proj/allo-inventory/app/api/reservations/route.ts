import { NextResponse } from "next/server";

let inventory = [
  {
    productId: 1,
    stock: 5,
  },
  {
    productId: 2,
    stock: 2,
  },
  {
    productId: 3,
    stock: 8,
  },
];

export async function POST(req: Request) {
  const body = await req.json();

  const product = inventory.find(
    (item) => item.productId === body.productId
  );

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  if (product.stock <= 0) {
    return NextResponse.json(
      { error: "Not enough stock" },
      { status: 409 }
    );
  }

  product.stock -= 1;

  return NextResponse.json({
    success: true,
    message: "Reservation successful",
    remainingStock: product.stock,
  });
}