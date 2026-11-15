import Link from 'next/link';
import { Config } from '@healthkoins/config';
import { DataFAQ } from '@healthkoins/config/DataFAQ';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@healthkoins/design/components/accordion';
import { buttonVariants } from '@healthkoins/design/components/button';
import { cn } from '@healthkoins/design/lib/utils';
import ROUTES from '@/constants/ROUTES';
import { renderText } from '@/utils/renderText';
import '@/styles/FAQ.css';
import DataLayout from '../../components/DataLayout';

export const metadata = {
  title: ROUTES.FAQ.title,
  description: ROUTES.FAQ.description
};

export default function FAQ() {
  const { data, lastUpdated } = DataFAQ;
  return (
    <DataLayout
      title={ROUTES.FAQ.pageTitle}
      description={ROUTES.FAQ.pageDescription}
      label={ROUTES.FAQ.badge}
      lastUpdated={lastUpdated}
    >
      <div id="page-faq" className="page-faq">
        <div className="data-list">
          {data.map((group) => (
            <div className="data-list-item" key={group.title}>
              <h2 className="item-title">{group.title}</h2>
              <Accordion multiple={true}>
                {group.data.map((faq) => (
                  <AccordionItem key={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {renderText(faq.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <section className="faq-support">
          <h2 className="support-title">Still Have Questions?</h2>
          <p className="support-description">
            If you could not find the answer you were looking for, our team is
            happy to help.
          </p>
          <div className="support-actions">
            <Link
              href={ROUTES.CONTACT.href}
              className={buttonVariants({ variant: 'default' })}
            >
              Contact Support
            </Link>
            <a
              href={`mailto:${Config.email}`}
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </DataLayout>
  );
}
