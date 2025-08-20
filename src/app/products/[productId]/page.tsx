import React from "react";
import Info from "@/components/Info";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const title = await new Promise((resolve) => {
    resolve(`Product iphone  ${params.productId}`);
  });
  return {
    title,
    description: "This is the product details page of my Next.js app",
  };
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
