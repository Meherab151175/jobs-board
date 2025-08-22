export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  console.log(searchParams);
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{searchParams?.error ?? "Unknown error occurred"}</p>
      <p>{JSON.stringify(searchParams)}</p>
    </div>
  );
}
