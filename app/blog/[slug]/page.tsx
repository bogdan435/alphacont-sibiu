type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main>
      <section>
        <h1>Articol blog</h1>
        <p>Slug: {slug}</p>
      </section>
    </main>
  );
}
