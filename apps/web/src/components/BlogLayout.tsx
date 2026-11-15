import { type ReactNode } from 'react';
import Link from 'next/link';
import { type Type_BlogArticle } from '@healthkoins/config/DataBlog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@healthkoins/design/components/accordion';
import { ArrowLeft } from '@healthkoins/design/icons';
import DataLayout from '@/components/DataLayout';
import ROUTES from '@/constants/ROUTES';
import { formatBlogDate } from '@/utils/blog';
import '@/styles/Blog.css';

export default function BlogLayout({ article }: { article: Type_BlogArticle }) {
  const renderBlogContent = (content: string) => {
    const renderInlineContent = (text: string) => {
      const parts: ReactNode[] = [];
      const pattern = /\*\*[^*]+\*\*|\*[^*\n]+\*/g;
      let cursor = 0;
      let match = pattern.exec(text);

      while (match) {
        const part = match[0];
        const start = match.index;
        parts.push(text.slice(cursor, start));

        if (part.startsWith('**')) {
          parts.push(
            <strong key={`strong-${start}`}>{part.slice(2, -2)}</strong>
          );
        } else {
          parts.push(<em key={`em-${start}`}>{part.slice(1, -1)}</em>);
        }

        cursor = start + part.length;
        match = pattern.exec(text);
      }

      parts.push(text.slice(cursor));
      return parts;
    };

    return content
      .trim()
      .split(/\n\s*\n/)
      .map((block) => {
        const lines = block.split('\n');

        if (lines.every((line) => /^-\s/.test(line))) {
          return (
            <ul key={block}>
              {lines.map((line) => (
                <li key={line}>{renderInlineContent(line.slice(2))}</li>
              ))}
            </ul>
          );
        }

        if (lines.every((line) => /^\d+\.\s/.test(line))) {
          return (
            <ol key={block}>
              {lines.map((line) => (
                <li key={line}>
                  {renderInlineContent(line.replace(/^\d+\.\s/, ''))}
                </li>
              ))}
            </ol>
          );
        }

        return <p key={block}>{renderInlineContent(lines.join(' '))}</p>;
      });
  };

  return (
    <div id="layout-blog" className="layout-blog">
      <div className="blog-topbar">
        <div className="container">
          <Link href={ROUTES.BLOG.href} className="blog-back-link">
            <ArrowLeft aria-hidden={true} />
            <span>Back to Knowledge Hub</span>
          </Link>
          <div className="blog-topbar-meta">
            <span className="blog-peer-reviewed">Peer reviewed</span>
            <time dateTime={article.publishDate}>
              {formatBlogDate(article.publishDate)}
            </time>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>

      <DataLayout
        title={article.title}
        description={article.description}
        label={article.category}
      >
        <article id="page-blog-article" className="blog-article">
          <div className="article-sections">
            {article.sections.map((section) => (
              <section key={section.heading} className="article-section">
                <h2 className="section-title">{section.heading}</h2>
                <div className="article-content">
                  {renderBlogContent(section.content)}
                </div>
              </section>
            ))}
          </div>

          {article.faq.length > 0 && (
            <section className="article-faq">
              <h2 className="section-title">Frequently asked questions</h2>
              <Accordion multiple={true}>
                {article.faq.map((item) => (
                  <AccordionItem key={item.q}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>
                      <div className="article-content">
                        {renderBlogContent(item.a)}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {article.sources.length > 0 && (
            <section className="article-sources">
              <h2 className="section-title">Sources</h2>
              <ol>
                {article.sources.map((source) => (
                  <li key={source.text}>
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.text}
                      </a>
                    ) : (
                      source.text
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </article>
      </DataLayout>
    </div>
  );
}
