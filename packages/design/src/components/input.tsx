import type * as React from 'react';
import { cn } from 'cn';
import { Input as InputPrimitive } from '@base-ui/react/input';

type InputIcon = React.ComponentType<{
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}>;

type InputProps = React.ComponentProps<'input'> & {
  icon?: InputIcon | undefined;
  iconRight?: InputIcon | undefined;
  iconRightClick?: (() => void) | undefined;
  iconRightLabel?: string | undefined;
};

function Input({
  className,
  type,
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
        'h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base outline-none transition-[color,box-shadow,background-color] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
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
          <button
            type="button"
            onClick={iconRightClick}
            disabled={disabled}
            aria-label={iconRightLabel}
            className="absolute top-1/2 right-2 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <IconRight aria-hidden="true" className="size-4" />
          </button>
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
