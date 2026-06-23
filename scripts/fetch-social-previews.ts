const REPOS = [
  "WeatherApp",
  "AP-Flutter-Project",
  "sudoku",
  "MasterMind",
  "OmegaRay-legacy",
  "Notes50",
];

const OWNER = "KiyarashFarahani";

async function main() {
  const results: Record<string, string> = {};

  await Promise.all(
    REPOS.map(async (repo) => {
      try {
        const res = await fetch(`https://github.com/${OWNER}/${repo}`);
        const html = await res.text();
        const match = html.match(/og:image" content="([^"]+)"/);
        if (match) {
          results[repo] = match[1];
        }
      } catch {}
    })
  );

  const fs = await import("fs");
  fs.writeFileSync(
    "src/data/social-previews.json",
    JSON.stringify(results, null, 2)
  );
  console.log("Social previews fetched:", Object.keys(results).length);
}

main();
