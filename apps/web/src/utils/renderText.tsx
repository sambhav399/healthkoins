import { Fragment } from 'react';
import Link from 'next/link';
import { Config } from '@healthkoins/config';
import ROUTES from '@/constants/ROUTES';

const TOKENS: Record<string, { href: string; label: string }> = {
  '{email}': { href: `mailto:${Config.email}`, label: Config.email },
  '{contact}': {
    href: ROUTES.CONTACT.href,
    label: `${Config.domain}${ROUTES.CONTACT.href}`
  }
};

const TOKEN_REGEX = /(\{email\}|\{contact\})/;

export function renderText(text: string) {
  let offset = 0;

  return text.split(TOKEN_REGEX).map((part) => {
    const key = offset;
    offset += part.length;
    const token = TOKENS[part];

    if (!token) {
      return <Fragment key={key}>{part}</Fragment>;
    }

    return (
      <Link key={key} href={token.href} className="link underline">
        {token.label}
      </Link>
    );
  });
}
