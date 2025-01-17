import React from "react";
import {
  HeroContent,
  HeroSocialIcons,
  SocialIcon,
  StyledArrowDown,
  StyledHeroSection,
} from "../styles/sections/HeroSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FaArrowDown } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Michael Otieno</h1>
        <h3>{"{Software Developer}"}</h3>
        <p>
          HTML | CSS | JavaScript | React | NodeJS | Angular | TypeScript |
          MongoDB | Tailwind CSS | WordPress | NextJS
        </p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contacts" primary margin="0 0 0 20px">
            Hire Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">  
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon
          href="https://www.linkedin.com/in/mike-venum-a830962a1/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://x.com/MichealVen23326" target="_blank">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://github.com/Mchael254/" target="_blank">
          <FaGithub />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};

export default HeroSection;
