import React from "react";

function ErrorPage() {
  return (
    <div
      className="hero min-h-screen rounded-3xl"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/9410494/pexels-photo-9410494.jpeg?auto=compress&cs=tinysrgb&w=1200)",
      }}
    >
      <div className="hero-overlay rounded-3xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Something went wrong. Please try again later.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
