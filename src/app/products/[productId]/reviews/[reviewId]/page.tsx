import Info from "@/components/Info";
import React from "react";

export const metadata = {
  title: "Product Review",
  description: "This is the product review page of my Next.js app",
};

function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <Info
      title={`Product Review for ${params.productId}`}
      description={`This is the product review page for ${params.productId} - Review ${params.reviewId}`}
    />
  );
}

export default ProductReview;
