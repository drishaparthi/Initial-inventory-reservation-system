"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  warehouse: string;
  stock: number;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleReserve = async (productId: number) => {
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.error);
      return;
    }

    setMessage(data.message);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10 text-black">
      <h1 className="text-4xl font-bold mb-2">
        Inventory Reservation System
      </h1>

      <p className="mb-4">
        Products available across warehouses
      </p>

      {message && (
        <p className="mb-6 font-bold text-blue-600">
          {message}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-6 border"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {product.name}
            </h2>

            <p className="mb-2">
              Warehouse: {product.warehouse}
            </p>

            <p className="mb-5">
              Available Stock: {product.stock}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => handleReserve(product.id)}
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
                className="px-4 py-2 rounded-lg"
              >
                Reserve
              </button>

              <Link href={`/reservation/${product.id}`}>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                  }}
                  className="px-4 py-2 rounded-lg"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}