import React from "react";

function Docs({ params }: { params: { slug: string[] } }) {
  if (!params.slug || params.slug.length === 0) {
    return <div>viewing feature home page</div>;
  }
  if (params.slug.length > 3) {
    return <div>viewing feature docs page for: {params.slug.join("/")}</div>;
  }
  if (params.slug.length === 1 && params.slug[0] === "index") {
    return <div>viewing feature docs index page</div>;
  }

  const slug = params.slug.join("/");
  return <div>viewing feature docs page for: {slug}</div>;
}

export default Docs;
