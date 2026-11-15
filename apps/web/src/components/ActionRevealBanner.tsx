'use client';

import { useState } from 'react';
import Image from 'next/image';
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
import '@/styles/ActionRevealBanner.css';

export default function ActionRevealBanner() {
  const [appStoreTooltipOpen, setAppStoreTooltipOpen] = useState(false);

  return (
    <section
      id="action-reveal-banner"
      className="action-reveal-banner"
      aria-labelledby="action-reveal-title"
    >
      <div className="banner-content">
        <h2 id="action-reveal-title" className="banner-title">
          Turn Knowledge Into <span>Verified Digital Assets</span>
        </h2>
        <p className="banner-description">
          Sync your smartwatch or phone steps with Health Connect &amp; Apple
          Health. Compete in 6-month seasons, climb the rankings, and unlock
          Amazon Vouchers.
        </p>

        <div className="banner-actions">
          <a
            href={Config.storeLinks.googlePlay.href}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-store-link"
            aria-label={`Get it on ${Config.storeLinks.googlePlay.label}`}
          >
            <Image
              src={ImageDownloadPlayStore}
              alt=""
              className="banner-store-image"
            />
          </a>
          <Tooltip
            open={appStoreTooltipOpen}
            onOpenChange={setAppStoreTooltipOpen}
          >
            <TooltipTrigger
              aria-label="App Store, coming soon"
              className="banner-store-tooltip-trigger"
              closeOnClick={false}
              onClick={() => setAppStoreTooltipOpen((open) => !open)}
            >
              <Image
                src={ImageDownloadAppStore}
                alt=""
                className="banner-store-image"
              />
            </TooltipTrigger>
            <TooltipContent>Coming soon</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
