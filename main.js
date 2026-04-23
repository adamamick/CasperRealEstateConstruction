import { proposal } from "./content.js";
import {
  createCtaSection,
  createHeroSection,
  createLaunchPlanSection,
  createOutcomesSection,
  createPricingSection,
  createTimelineSection,
  createVideosSection,
  createWhySection,
} from "./components/sections.js";

const page = document.querySelector(".page");

const sections = [
  createHeroSection(proposal.hero),
  createWhySection(proposal.whyYouTube),
  createLaunchPlanSection(proposal.launchPlan),
  createVideosSection(proposal.videos),
  createPricingSection(proposal.pricing),
  createTimelineSection(proposal.timeline),
  createOutcomesSection(proposal.outcomes),
  createCtaSection(proposal.cta),
];

sections.forEach((section) => page.append(section));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
