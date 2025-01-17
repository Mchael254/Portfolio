import React from "react";
import { FaCode, FaDatabase, FaLaptopCode, FaWordpress } from "react-icons/fa";

import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServiceSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";

const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services"> 
        <SectionHeading>
          <h1>Services</h1>
          <p>Exited to work with you!</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Web Development</h1>
            <p>
              I offer comprehensive web development services, crafting dynamic
              and user-centric websites that align with your business
              objectives.
            </p>
          </SingleService>

          <SingleService>
            <IconWrapper>
              <FaDatabase />
            </IconWrapper>
            <h1>MSSQL Database Management</h1>
            <p>
            I specialize in creating, optimizing, and managing MSSQL databases to ensure robust, scalable, and efficient data solutions, providing a reliable backbone for your applications and business needs.
            </p>
          </SingleService>

        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};

export default ServicesSection;
