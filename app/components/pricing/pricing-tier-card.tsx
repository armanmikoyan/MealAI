import { cn } from '@/lib/utils';
import { Badge } from '@/app/ui/badge';
import { Button } from '@/app/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/ui/card';

import { type PricingTierRow, PRICING_SECTION } from './constants';
import { PricingTierFeatureList } from './pricing-tier-feature-list';

type PricingTierCardProps = Readonly<{
  tier: PricingTierRow;
}>;

export function PricingTierCard({ tier }: PricingTierCardProps) {
  return (
    <Card className={cn('h-full', tier.HIGHLIGHT && 'ring-accent/35 md:-translate-y-3 md:ring-2')}>
      <CardHeader>
        {tier.BADGE ? (
          <CardAction>
            <Badge variant="secondary">{tier.BADGE}</Badge>
          </CardAction>
        ) : null}
        <CardTitle>{tier.NAME}</CardTitle>
        <CardDescription>{tier.TAGLINE}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
            {tier.PRICE}
          </span>
          <span className="text-muted-foreground text-sm font-medium">{tier.PERIOD}</span>
        </div>
        <PricingTierFeatureList lines={tier.FEATURES} />
      </CardContent>
      <CardFooter className="flex-col items-stretch">
        <Button
          type="button"
          variant={tier.HIGHLIGHT ? 'default' : 'outline'}
          size="lg"
          className="w-full"
          disabled
          aria-disabled
        >
          {tier.CTA}
        </Button>
        <p className="text-muted-foreground mt-2 text-center text-xs">
          {PRICING_SECTION.CHECKOUT_NOTE}
        </p>
      </CardFooter>
    </Card>
  );
}
