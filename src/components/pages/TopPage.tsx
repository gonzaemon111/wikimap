import React from 'react';
import { PortalFeaturePanel } from '@/components/organisms/portal/FeaturePanel';
import { PortalFooter } from '@/components/organisms/portal/Footer';
import { PortalHero } from '@/components/organisms/portal/Hero';
import { PortalNavbar } from '@/components/organisms/portal/Navbar';
import { PortalPricingPanel } from '@/components/organisms/portal/PricingPanel';

export function TopPage() {
  return (
    <React.Fragment>
      <PortalNavbar />
      <PortalHero />
      <PortalFeaturePanel />
      <PortalPricingPanel />
      <PortalFooter />
    </React.Fragment>
  );
}
