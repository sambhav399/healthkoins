import {
  DataPrivacyPolicy,
  type Type_PrivacyPolicyList,
  type Type_PrivacyPolicySection
} from '@healthkoins/config/DataPrivacyPolicy';
import ROUTES from '@/constants/ROUTES';
import { renderText } from '@/utils/renderText';
import DataLayout from '../../components/DataLayout';

export const metadata = {
  title: ROUTES.PRIVACY_POLICY.title,
  description: ROUTES.PRIVACY_POLICY.description
};

function renderList(list: Type_PrivacyPolicyList) {
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

function renderContent(items: Type_PrivacyPolicySection['data']) {
  return items.map((item) => {
    if (typeof item === 'string') {
      return (
        <p key={item} className="item-text">
          {renderText(item)}
        </p>
      );
    }

    if ('type' in item) {
      return renderList(item);
    }

    return (
      <section key={item.title} className="item-section">
        <h3 className="section-title">{item.title}</h3>
        {renderContent(item.data)}
      </section>
    );
  });
}

export default function PrivacyPolicy() {
  const { lastUpdated, data } = DataPrivacyPolicy;

  return (
    <DataLayout
      title={ROUTES.PRIVACY_POLICY.title}
      description={ROUTES.PRIVACY_POLICY.description}
      label={ROUTES.PRIVACY_POLICY.label}
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
