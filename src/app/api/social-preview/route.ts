import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const repos = searchParams.get("repos")?.split(",") || [];

  if (repos.length === 0) {
    return NextResponse.json({ error: "No repos provided" }, { status: 400 });
  }

  const results: Record<string, string> = {};

  await Promise.all(
    repos.map(async (repo) => {
      try {
        const res = await fetch(`https://github.com/KiyarashFarahani/${repo}`, {
          next: { revalidate: 3600 },
        });
        const html = await res.text();
        const match = html.match(/og:image" content="([^"]+)"/);
        if (match) {
          results[repo] = match[1];
        }
      } catch {
        // Silently fail for individual repos
      }
    })
  );

  return NextResponse.json(results);
}
