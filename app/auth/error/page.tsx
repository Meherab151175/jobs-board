interface ErrorPageProps {
  searchParams?: {
    error?: string;
  };
}

export default function ErrorPage({ searchParams }: ErrorPageProps) {
  const error = searchParams?.error || "Unknown error";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p className="text-red-500 mt-4">{error}</p>
    </div>
  );
}
