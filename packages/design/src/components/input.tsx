import type * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { Button } from '#components/button';
import { cn } from '#lib/utils';

const inputVariants = cva(
  'w-full min-w-0 rounded-4xl border border-transparent bg-input/50 py-1 outline-none transition-[color,box-shadow,background-color] file:inline-flex file:border-0 file:bg-transparent file:font-500 file:text-foreground file:text-body-3 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 text-body-3',
  {
    variants: {
      size: {
        xs: 'h-7 px-2',
        sm: 'h-8 px-3',
        default: 'h-9 px-3',
        lg: 'h-10 px-4'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

type InputIcon = React.ComponentType<{
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}>;

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputVariants> & {
    icon?: InputIcon | undefined;
    iconRight?: InputIcon | undefined;
    iconRightClick?: (() => void) | undefined;
    iconRightLabel?: string | undefined;
  };

function Input({
  className,
  type,
  size = 'default',
  icon: Icon,
  iconRight: IconRight,
  iconRightClick,
  iconRightLabel,
  disabled,
  ...props
}: InputProps) {
  const input = (
    <InputPrimitive
      type={type}
      data-slot="input"
      disabled={disabled}
      className={cn(
        inputVariants({ size }),
        Icon && 'pl-9',
        IconRight && 'pr-9',
        className
      )}
      {...props}
    />
  );

  if (!Icon && !IconRight) {
    return input;
  }

  return (
    <div data-slot="input-wrapper" className="relative w-full min-w-0">
      {Icon ? (
        <Icon
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground',
            disabled && 'opacity-50'
          )}
        />
      ) : null}
      {input}
      {IconRight ? (
        iconRightClick ? (
          <Button
            type="button"
            onClick={iconRightClick}
            disabled={disabled}
            aria-label={iconRightLabel}
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 active:not-aria-[haspopup]:-translate-y-1/2"
          >
            <IconRight aria-hidden="true" className="size-4" />
          </Button>
        ) : (
          <IconRight
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground',
              disabled && 'opacity-50'
            )}
          />
        )
      ) : null}
    </div>
  );
}

export { Input };
