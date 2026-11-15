'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Type_BlogArticle } from '@healthkoins/config/DataBlog';
import { Badge } from '@healthkoins/design/components/badge';
import { Button } from '@healthkoins/design/components/button';
import ROUTES from '@/constants/ROUTES';
import { formatBlogDate } from '@/utils/blog';

const PAGE_SIZE = 6;

type BlogArticleListProps = {
  articles: Type_BlogArticle[];
  featuredArticle: Type_BlogArticle | undefined;
};

export default function BlogArticleList({
  articles,
  featuredArticle
}: BlogArticleListProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <>
      {featuredArticle && (
        <section className="featured-section" aria-label="Featured article">
          <Link
            href={`${ROUTES.BLOG.href}/${featuredArticle.slug}`}
            className="featured-article"
          >
            <div className="featured-copy">
              <Badge className="featured-badge">Featured article</Badge>
              <span className="article-category">
                {featuredArticle.category}
              </span>
              <h2 className="featured-title">{featuredArticle.title}</h2>
              <p className="featured-description">
                {featuredArticle.description}
              </p>
              <div className="featured-meta">
                <time dateTime={featuredArticle.publishDate}>
                  {formatBlogDate(featuredArticle.publishDate)}
                </time>
                <span>{featuredArticle.readTime} min read</span>
              </div>
              <span className="featured-action">Read featured article</span>
            </div>
          </Link>
        </section>
      )}

      <ul id="blog-article-grid" className="article-grid">
        {visibleArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`${ROUTES.BLOG.href}/${article.slug}`}
              className="article-card"
            >
              <span className="article-category">{article.category}</span>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <div className="article-meta">
                <time dateTime={article.publishDate}>
                  {formatBlogDate(article.publishDate)}
                </time>
                <span>{article.readTime} min read</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {visibleCount < articles.length && (
        <Button
          type="button"
          aria-controls="blog-article-grid"
          onClick={() => {
            setVisibleCount((count) => count + PAGE_SIZE);
          }}
        >
          Load more...
        </Button>
      )}
    </>
  );
}
