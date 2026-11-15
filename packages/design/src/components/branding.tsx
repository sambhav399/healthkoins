import { type ComponentProps } from 'react';
import { cn } from '#lib/utils';
import { LogoImageHealthKoins } from '../images';

type BrandingProps = Omit<ComponentProps<'a'>, 'href' | 'className'> & {
  href: string;
  className?: string;
};

export function Branding({ href, className, ...props }: BrandingProps) {
  return (
    <a href={href} className={cn('branding', className)} {...props}>
      <img
        src={LogoImageHealthKoins.src}
        alt="HealthKoins"
        height={48}
        width={48}
        className="brand-icon"
      />
      <span className="brand-label">HealthKoins</span>
    </a>
  );
}
