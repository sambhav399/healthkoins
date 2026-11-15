import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DataBlog } from '@healthkoins/config/DataBlog';
import BlogLayout from '@/components/BlogLayout';
import { getBlogArticle } from '@/utils/blog';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DataBlog.data.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords
  };
}

export default async function BlogArticlePage({
  params
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return <BlogLayout article={article} />;
}
