"use client";

// app/error.tsx
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div>
      <p>An error occurred: {error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default Error;
