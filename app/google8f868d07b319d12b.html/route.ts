export function GET() {
  return new Response("google-site-verification: google8f868d07b319d12b.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
