import { DataFAQ } from '@healthkoins/config/DataFAQ';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@healthkoins/design/components/accordion';
import ROUTES from '@/constants/ROUTES';
import { renderText } from '@/utils/renderText';
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
      <div className="data-list">
        {data.map((group) => (
          <div className="data-list-item" key={group.title}>
            <h2 className="item-title">{group.title}</h2>
            <Accordion multiple={true}>
              {group.data.map((faq) => (
                <AccordionItem key={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{renderText(faq.answer)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </DataLayout>
  );
}
