'use client';

import { type ComponentProps, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Config } from '@healthkoins/config';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@healthkoins/design/components/tooltip';
import {
  ImageDownloadAppStore,
  ImageDownloadPlayStore
} from '@healthkoins/design/images';
import { cn } from '@healthkoins/design/lib/utils';

export function ActionAppDownload({
  className,
  size = 48
}: ComponentProps<'div'> & {
  size?: number;
}) {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  return (
    <div className={cn('download-actions', className)}>
      <Link
        href={Config.storeLinks.googlePlay.href}
        target="_blank"
        rel="noopener noreferrer"
        className="download-store-link"
        aria-label={`Get it on ${Config.storeLinks.googlePlay.label}`}
      >
        <Image
          src={ImageDownloadPlayStore}
          alt="Play Store"
          height={size}
          className="download-store-image"
        />
      </Link>
      <Tooltip open={showToolTip} onOpenChange={setShowToolTip}>
        <TooltipTrigger
          aria-label="App Store, coming soon"
          closeOnClick={false}
          onClick={() => setShowToolTip((open) => !open)}
        >
          <Image
            src={ImageDownloadAppStore}
            alt="App Store"
            height={size}
            className="download-store-image"
          />
        </TooltipTrigger>
        <TooltipContent>Coming soon</TooltipContent>
      </Tooltip>
    </div>
  );
}
