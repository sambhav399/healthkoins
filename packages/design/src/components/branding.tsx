import { type ComponentProps } from 'react';
import { cn } from '#lib/utils';
import { LogoImageHealthKoins } from '../images';

type BrandingProps = Omit<ComponentProps<'span'>, 'className'> & {
  className?: string;
};

export function Branding({ className, ...props }: BrandingProps) {
  return (
    <span className={cn('branding', className)} {...props}>
      <img
        src={LogoImageHealthKoins.src}
        alt="HealthKoins"
        height={48}
        width={48}
        className="brand-icon"
      />
      <span className="brand-label">HealthKoins</span>
    </span>
  );
}
