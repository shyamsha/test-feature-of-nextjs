"use client";
import Info from "@/components/Info";

import { useEffect, useState } from "react";

function Blog() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showContent && (
        <Info
          title="Blog Page"
          description="This is the blog page of my Next.js app"
        />
      )}
    </div>
  );
}

export default Blog;
