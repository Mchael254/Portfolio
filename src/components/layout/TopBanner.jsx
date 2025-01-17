import React from 'react'
import { BannerSection, StyledTopBanner } from '../styles/layout/TopBanner.styled'

const TopBanner = () => {
  return (
    <StyledTopBanner>
      <BannerSection showOnMobile>
        <a href="mailto:yelnatstech@gmail.com">📩 michealvenum007@gmail.com</a>
      </BannerSection>
      <BannerSection>
        <p>👻Available For Your Solutions</p> 
      </BannerSection>
    </StyledTopBanner>
  );
}

export default TopBanner