import {
  DataTermsOfUse,
  type Type_TermsList,
  type Type_TermsSection
} from '@healthkoins/config/DataTermsOfUse';
import ROUTES from '@/constants/ROUTES';
import { renderText } from '@/utils/renderText';
import DataLayout from '../../components/DataLayout';

export const metadata = {
  title: ROUTES.TERMS_OF_USE.title,
  description: ROUTES.TERMS_OF_USE.description
};

function renderList(list: Type_TermsList) {
  const List = list.type === 'ordered' ? 'ol' : 'ul';

  return (
    <div key={list.title ?? list.data.join()} className="item-list">
      {list.title && <p className="list-title">{renderText(list.title)}</p>}
      <List className="list-data">
        {list.data.map((text) => (
          <li key={text} className="data-item">
            {renderText(text)}
          </li>
        ))}
      </List>
    </div>
  );
}

function renderContent(items: Type_TermsSection['data']) {
  return items.map((item) => {
    if (typeof item === 'string') {
      return (
        <p key={item} className="item-text">
          {renderText(item)}
        </p>
      );
    }

    return renderList(item);
  });
}

export default function TermsOfUse() {
  const { lastUpdated, data } = DataTermsOfUse;

  return (
    <DataLayout
      title={ROUTES.TERMS_OF_USE.title}
      description={ROUTES.TERMS_OF_USE.description}
      label={ROUTES.TERMS_OF_USE.label}
      lastUpdated={lastUpdated}
    >
      <ol className="data-list">
        {data.map(({ title, data: content }) => (
          <li key={title} className="data-list-item">
            <h2 className="item-title">{title}</h2>
            {renderContent(content)}
          </li>
        ))}
      </ol>
    </DataLayout>
  );
}
