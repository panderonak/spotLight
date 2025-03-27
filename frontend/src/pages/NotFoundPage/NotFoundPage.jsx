export default function ErrorPage() {
  return (
    <div
      className="hero min-h-screen rounded-3xl"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4888433/pexels-photo-4888433.jpeg?auto=compress&cs=tinysrgb&w=1200)",
      }}
    >
      <div className="hero-overlay rounded-3xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Sorry, We Can't Find That Page – It's Gone to the Upside Down!
          </h1>
          <p className="mb-5">
            Looks like the page you're looking for got lost in another
            dimension. Try checking your link or head back home!
          </p>
          <button className="btn btn-primary">Home</button>
        </div>
      </div>
    </div>
  );
}
