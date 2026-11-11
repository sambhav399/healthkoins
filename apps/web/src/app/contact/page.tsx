import ROUTES from '@/constants/ROUTES';
import DataLayout from '../../components/DataLayout';

export const metadata = {
  title: ROUTES.CONTACT.title,
  description: ROUTES.CONTACT.description
};

export default function Contact() {
  return (
    <DataLayout
      title={ROUTES.CONTACT.pageTitle}
      description={ROUTES.CONTACT.pageDescription}
      label={ROUTES.CONTACT.badge}
    >
      Contact
    </DataLayout>
  );
}
