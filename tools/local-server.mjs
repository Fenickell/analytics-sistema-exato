import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.argv[2] || 4177);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml"
};

function resolveRequest(url) {
  const cleanUrl = decodeURIComponent(new URL(url, "http://local").pathname);
  const normalized = normalize(cleanUrl).replace(/^(\.\.[/\\])+/, "");
  let target = resolve(join(root, normalized));

  if (!target.startsWith(root)) {
    return null;
  }

  if (existsSync(target) && statSync(target).isDirectory()) {
    target = join(target, "index.html");
  }

  if (!existsSync(target)) {
    const htmlTarget = `${target}.html`;
    if (existsSync(htmlTarget)) return htmlTarget;
    return null;
  }

  return target;
}

createServer((request, response) => {
  const target = resolveRequest(request.url || "/");

  if (!target) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": types[extname(target)] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff"
  });
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Analytics Sistema Exato running at http://127.0.0.1:${port}`);
});
