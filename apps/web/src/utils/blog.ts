import { DataBlog, type Type_BlogArticle } from '@healthkoins/config/DataBlog';

const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC'
});

export function formatBlogDate(date: string) {
  return formatter.format(new Date(`${date}T00:00:00.000Z`));
}

export function getBlogArticle(slug: string): Type_BlogArticle | undefined {
  return DataBlog.data.find((article) => article.slug === slug);
}
