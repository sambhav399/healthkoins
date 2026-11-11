import ROUTES from '@/constants/ROUTES';
import DataLayout from '../../components/DataLayout';

export const metadata = {
  title: ROUTES.BLOG.title,
  description: ROUTES.BLOG.description
};

export default function Blog() {
  return (
    <DataLayout
      title={ROUTES.BLOG.pageTitle}
      description={ROUTES.BLOG.pageDescription}
      label={ROUTES.BLOG.badge}
    >
      Blog
    </DataLayout>
  );
}
