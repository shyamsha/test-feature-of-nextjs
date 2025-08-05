import React from "react";

interface InfoProps {
  title: string;
  description: string;
}

function Info({ title, description }: InfoProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Info;
