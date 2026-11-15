import { Suspense } from 'react';
import { type Metadata } from 'next';
import Link from 'next/link';
import { DataBlog } from '@healthkoins/config/DataBlog';
import { buttonVariants } from '@healthkoins/design/components/button';
import { Spinner } from '@healthkoins/design/components/spinner';
import { cn } from '@healthkoins/design/lib/utils';
import ActionRevealBanner from '@/components/ActionRevealBanner';
import BlogArticleList from '@/components/BlogArticleList';
import DataLayout from '@/components/DataLayout';
import ROUTES from '@/constants/ROUTES';
import '@/styles/Blog.css';

export const metadata: Metadata = {
  title: ROUTES.BLOG.title,
  description: ROUTES.BLOG.description
};

const ALL_CATEGORIES = 'All Insights';
const CATEGORIES = [
  ALL_CATEGORIES,
  ...new Set(DataBlog.data.map((article) => article.category))
];
const FEATURED_ARTICLE = DataBlog.data.find((article) => article.featured);
const ARTICLES = [...DataBlog.data].sort((a, b) =>
  b.publishDate.localeCompare(a.publishDate)
);

type BlogPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

async function BlogListing({ searchParams }: BlogPageProps) {
  const { category: requestedCategory } = await searchParams;
  const activeCategory =
    typeof requestedCategory === 'string' &&
    CATEGORIES.includes(requestedCategory)
      ? requestedCategory
      : ALL_CATEGORIES;
  const articles =
    activeCategory === ALL_CATEGORIES
      ? ARTICLES.filter((article) => article.slug !== FEATURED_ARTICLE?.slug)
      : ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <div id="page-blog-list" className="blog-list">
      <nav aria-label="Filter articles by category">
        <ul className="category-list">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const href =
              category === ALL_CATEGORIES
                ? ROUTES.BLOG.href
                : `${ROUTES.BLOG.href}?category=${encodeURIComponent(category)}`;

            return (
              <li key={category}>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({
                      variant: isActive ? 'default' : 'outline'
                    })
                  )}
                  aria-current={isActive ? 'page' : false}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <BlogArticleList
        key={activeCategory}
        articles={articles}
        featuredArticle={
          activeCategory === ALL_CATEGORIES ? FEATURED_ARTICLE : undefined
        }
      />
    </div>
  );
}

export default function Blog({ searchParams }: BlogPageProps) {
  return (
    <DataLayout
      title={ROUTES.BLOG.pageTitle}
      description={ROUTES.BLOG.pageDescription}
      label={ROUTES.BLOG.badge}
    >
      <Suspense fallback={<Spinner />}>
        <BlogListing searchParams={searchParams} />
      </Suspense>
      <ActionRevealBanner />
    </DataLayout>
  );
}
