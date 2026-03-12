import fs from "fs";
import path from "path";
import Link from "../components/Link";

function formatTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0) + word.slice(1))
    .join(" ");
}

export default async function collections() {
  // Path to the collections directory
  const postsDirectory = path.join(process.cwd(), "src/app/collections");

  // Read all entries (files and folders) in the `collections` directory
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // Filter for directories only
  const folderNames = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // Find folders that actually have a page route and optionally read page metadata
  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const folderPath = path.join(postsDirectory, folderName);
      const routeFiles = ["page.js", "page.jsx", "page.ts", "page.tsx", "page.mdx"];
      const routeFile = routeFiles.find((file) =>
        fs.existsSync(path.join(folderPath, file))
      );

      if (!routeFile) {
        return null;
      }

      let title = formatTitle(folderName);
      let date;

      try {
        const pageModule = await import(`../collections/${folderName}/${routeFile}`);
        const meta = pageModule.meta || pageModule.metadata;

        if (meta?.title) {
          title = meta.title;
        }

        if (meta?.date) {
          date = meta.date;
        }
      } catch {
        // Fallback to folder-based title
      }

      return { title, date, slug: folderName };
    })
  );

  const validPosts = posts.filter(Boolean);

  // Sort by date when available, otherwise alphabetically by title
  validPosts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    }

    if (a.date) {
      return -1;
    }

    if (b.date) {
      return 1;
    }

    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400">
        {validPosts.map(({ title, slug }) => (
          <li className="flex justify-between items-center" key={slug}>
            <span className="text-stone-800 dark:text-stone-200 text-sm sm:text-base">
              <Link href={`/collections/${slug}`} isNextLink={true}>
                {title}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
