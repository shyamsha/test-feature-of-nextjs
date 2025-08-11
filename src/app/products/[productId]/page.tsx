import React from "react";
import Info from "@/components/Info";

export const metadata = {
  title: "Product Details",
  description: "This is the product details page of my Next.js app",
};

function ProductDetails({ params }: { params: { productId: string } }) {
  return (
    <Info
      title={`Product Details for ${params.productId}`}
      description="This is the product details page of my Next.js app"
    />
  );
}

export default ProductDetails;
