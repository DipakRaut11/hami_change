"use client";

export default function Error({ error, reset }: { error: Error; reset?: () => void }) {
  console.error(error);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <p>Something went wrong.</p>
        {reset && (
          <button onClick={() => reset()} className="mt-2 px-3 py-1 border rounded">
            Try again
          </button>
        )}
      </div>
    </div>
  );
}