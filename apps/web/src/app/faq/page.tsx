import { FrequentlyAskedQuestions } from '@healthkoins/config/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@healthkoins/design/components/accordion';
import ROUTES from '@/constants/ROUTES';
import '@/styles/FAQ.css';
import DataLayout from '../../components/DataLayout';

export const metadata = {
  title: ROUTES.FAQ.title,
  description: ROUTES.FAQ.description
};

export default function FAQ() {
  return (
    <DataLayout
      title={ROUTES.FAQ.pageTitle}
      description={ROUTES.FAQ.pageDescription}
      label={ROUTES.FAQ.badge}
    >
      {FrequentlyAskedQuestions.map((data) => (
        <div className="group-faq" key={data.category}>
          <h2 className="faq-category">{data.category}</h2>
          <Accordion multiple={true}>
            {data.faq.map((faq) => (
              <AccordionItem key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </DataLayout>
  );
}
