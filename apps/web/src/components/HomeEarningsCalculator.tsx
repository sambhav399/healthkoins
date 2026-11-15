'use client';

import { useState } from 'react';
import { Progress } from '@healthkoins/design/components/progress';
import { Slider } from '@healthkoins/design/components/slider';

const VOUCHER_TARGET = 30000;

function getProjectedTier(steps: number) {
  if (steps >= 14000) {
    return 'The Immortal';
  }
  if (steps >= 11000) {
    return 'Ronin Master';
  }
  if (steps >= 8000) {
    return 'Trailblazer';
  }
  return 'The Wayfarer';
}

export default function HomeEarningsCalculator() {
  const [dailySteps, setDailySteps] = useState(8000);
  const stepsCoinsDaily = Math.floor(dailySteps / 100);
  const calorieCoinsDaily = Math.floor((dailySteps * 0.04) / 10);
  const questBonusDaily = dailySteps >= 7500 ? 45 : 20;
  const totalDailyCoins = stepsCoinsDaily + calorieCoinsDaily + questBonusDaily;
  const monthlyCoins = totalDailyCoins * 30;
  const seasonCoins = totalDailyCoins * 180;
  const voucherProgress = Math.min(
    100,
    Math.round((seasonCoins / VOUCHER_TARGET) * 100)
  );

  return (
    <div className="calculator-card">
      <div className="calculator-control">
        <div className="calculator-control-heading">
          <span id="daily-step-target-label" className="calculator-label">
            Daily Step Target
          </span>
          <output className="calculator-step-value">
            {dailySteps.toLocaleString()}
            <span> steps/day</span>
          </output>
        </div>
        <Slider
          aria-labelledby="daily-step-target-label"
          min={4000}
          max={20000}
          step={500}
          value={[dailySteps]}
          onValueChange={(values) => {
            const stepValue = typeof values === 'number' ? values : values[0];
            if (stepValue !== undefined) {
              setDailySteps(stepValue);
            }
          }}
          className="calculator-slider"
        />
        <div className="calculator-range-labels" aria-hidden={true}>
          <span>4,000</span>
          <span>8,000</span>
          <span>12,000</span>
          <span>20,000</span>
        </div>
      </div>

      <dl className="calculator-results">
        <div className="calculator-result">
          <dt>Daily Coins</dt>
          <dd>
            ~{totalDailyCoins} <span>HK</span>
          </dd>
          <p className="calculator-result-description">
            Steps, calories, and quests
          </p>
        </div>
        <div className="calculator-result">
          <dt>Monthly Yield</dt>
          <dd>
            ~{monthlyCoins.toLocaleString()} <span>HK</span>
          </dd>
          <p className="calculator-result-description">
            At 30 days of activity
          </p>
        </div>
        <div className="calculator-result">
          <dt>6-Month Season</dt>
          <dd>
            {seasonCoins.toLocaleString()} <span>HK</span>
          </dd>
          <p className="calculator-result-description">180-day estimate</p>
        </div>
        <div className="calculator-result">
          <dt>Projected Avatar</dt>
          <dd className="calculator-tier">{getProjectedTier(dailySteps)}</dd>
          <p className="calculator-result-description">
            Based on your daily steps
          </p>
        </div>
      </dl>

      <div className="voucher-progress-card">
        <div className="voucher-progress-heading">
          <div>
            <h3>Amazon Gift Voucher Progress</h3>
            <p className="voucher-description">
              30,000 coins unlock a ₹1,000 / $12 USD voucher
            </p>
          </div>
          <span className="voucher-progress-value">{voucherProgress}%</span>
        </div>
        <Progress
          className="voucher-progress"
          value={voucherProgress}
          aria-label="Progress toward the 30,000-coin voucher target"
        />
        <div className="voucher-progress-labels">
          <span>0 coins</span>
          <span>
            {seasonCoins >= VOUCHER_TARGET
              ? 'Voucher target reached'
              : `${(VOUCHER_TARGET - seasonCoins).toLocaleString()} coins to go`}
          </span>
          <span>{VOUCHER_TARGET.toLocaleString()} coins</span>
        </div>
      </div>
    </div>
  );
}
