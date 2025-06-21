import React from "react";
import { ProjectsStyles } from "../styles/components/ProjectsStyles";
import { ProjectCard } from "./ProjectCard";
import AnimatedCard from "./AnimatedCard";
import { globalStyles } from "../styles/globalStyles";

export const Projects = () => {
  const projectData = [
    {
      name: "Dwello",
      description:
        "Dwello is a digital real estate platform based in Mumbai, India, designed to assist homebuyers in making informed decisions when purchasing residential properties. It offers a comprehensive suite of services, including property listings, expert consultations, and data-driven insights, primarily focusing on the Mumbai and Pune markets.",
      tech: [
        "nextjs",
        "reactjs",
        "javascript",
        "styled-jsx",
        "axios",
        "REST APIs",
      ],
      keyFeatures: [
        "Product filtering",
        "secure checkout with Stripe",
        "user authentication",
        "responsive design",
      ],
      projectLink: "https://dwello.in/",
    },
    {
      name: "Bondskart",
      description:
        "Bondskart, launched by JM Financial Products in 2021, is a SEBI-registered digital platform for retail investors to invest in fixed-income securities like government and corporate bonds. It offers a user-friendly interface, educational tools, and high-rated (AA or above) bonds to ensure lower risk. The platform supports secondary market trading for added liquidity. Despite JM Financial facing regulatory action in 2024, Bondskart continues to operate, providing a reliable and secure option for diversifying investment portfolios with stable debt instruments.",
      tech: [
        "nextjs",
        "reactjs",
        "javascript",
        "styled-jsx",
        "axios",
        "REST APIs",
      ],
      keyFeatures: [
        "Product filtering",
        "secure checkout with Stripe",
        "user authentication",
        "responsive design",
      ],
      projectLink: "https://uatv2.bondskart.com/",
    },
    {
      name: "Dwello CRM",
      description:
        "This CRM (Customer Relationship Management) application is designed to streamline interactions between the company and its customers. It empowers the team to manage leads, track customer journeys, handle support tickets, and gain valuable insights into sales and marketing activities — all in one centralized dashboard.",
      tech: [
        "nextjs",
        "reactjs",
        "javascript",
        "styled-jsx",
        "axios",
        "REST APIs",
      ],
      keyFeatures: [
        "Product filtering",
        "secure checkout with Stripe",
        "user authentication",
        "responsive design",
      ],
      projectLink: "https://crmapp.dwello.in/dashboard",
    },
    {
      name: "Dwello Admin",
      description:
        "This admin panel is built for the website Dwello to allow authorized users to manage content, view analytics, and control user accounts efficiently.",
      tech: [
        "nextjs",
        "reactjs",
        "javascript",
        "styled-jsx",
        "axios",
        "REST APIs",
      ],
      keyFeatures: [
        "Product filtering",
        "secure checkout with Stripe",
        "user authentication",
        "responsive design",
      ],
      projectLink: "https://admin.dwello.in/",
    },
    {
      name: "Bondskart Admin",
      description:
        "This admin panel is built for the website Bondskart to allow authorized users to manage content, view analytics, and control user accounts efficiently.",
      tech: [
        "nextjs",
        "reactjs",
        "javascript",
        "styled-jsx",
        "axios",
        "REST APIs",
      ],
      keyFeatures: [
        "Product filtering",
        "secure checkout with Stripe",
        "user authentication",
        "responsive design",
      ],
      projectLink: "https://admin.bondskart.com/login",
    },
  ];
  return (
    <>
      <style jsx>{globalStyles}</style>
      <style jsx>{ProjectsStyles}</style>
      <div className="mainGlobalContainer">
        <div className="globalContainerHeader">Projects</div>
        <div className="projectsCardContainer">
          {projectData.map((ele, index) => (
            <AnimatedCard key={ele}>
              <ProjectCard projectData={ele} />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </>
  );
};
