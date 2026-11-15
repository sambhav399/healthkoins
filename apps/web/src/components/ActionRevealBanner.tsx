import { ActionAppDownload } from './ActionAppDownload';

export default function ActionRevealBanner() {
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
        <ActionAppDownload />
      </div>
    </section>
  );
}
