export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="rounded-lg border border-green-300 bg-green-100 px-8 py-6 shadow-md">
        <h1 className="text-2xl font-bold text-green-700">
          Thanks for subscribing
        </h1>
        <p className="m-0 text-green-800">You&rsquo;re all set.</p>
      </div>
    </div>
  );
}
