import { type ComponentProps } from 'react';
import { cn } from '#lib/utils';
import { LogoImageHealthKoins } from '../images';

type BrandingProps = Omit<ComponentProps<'span'>, 'className'> & {
  className?: string;
  size?: 32 | 48;
};

export function Branding({ className, size = 48, ...props }: BrandingProps) {
  return (
    <span className={cn('branding', className)} {...props}>
      <img
        src={LogoImageHealthKoins.src}
        alt="HealthKoins"
        height={size}
        width={size}
        className="brand-icon"
      />
      <span className={cn('brand-label', size < 48 && 'size-sm')}>
        HealthKoins
      </span>
    </span>
  );
}
