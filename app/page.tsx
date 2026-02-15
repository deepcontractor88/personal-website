"use client";

import { useState, useCallback, useEffect } from "react";
import HeaderBar from "@/components/HeaderBar";
import Sidebar from "@/components/Sidebar";
import NotebookCanvas from "@/components/NotebookCanvas";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";
import AboutCell from "@/components/cells/AboutCell";
import TableCell from "@/components/cells/TableCell";
import FigureCell from "@/components/cells/FigureCell";
import ExperienceDetailCell from "@/components/cells/ExperienceDetailCell";
import EducationCell from "@/components/cells/EducationCell";
import ContactCell from "@/components/cells/ContactCell";
import TimelineCell from "@/components/cells/TimelineCell";
import SkillsCell from "@/components/cells/SkillsCell";
import ExpertiseCell from "@/components/cells/ExpertiseCell";
import IndustriesCell from "@/components/cells/IndustriesCell";
import SectionHeading from "@/components/SectionHeading";
import AddCellDivider from "@/components/AddCellDivider";
import { experienceDetails } from "@/content/experience";
import { badges } from "@/content/badges";
import { expertiseAreas } from "@/content/expertise";
import {
  technicalSkillsGrouped,
  certifications,
  awards,
} from "@/content/skills";
import { education } from "@/content/education";
import { contact } from "@/content/contact";
import { gallery } from "@/content/gallery";
import { industries } from "@/content/industries";

export default function Home() {
  const [expandAll, setExpandAll] = useState(false);
  const [pulse, setPulse] = useState(false);

  const onRunAll = useCallback(() => {
    setExpandAll(true);
    setPulse(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Tell every Cell to play the running → success animation
    window.dispatchEvent(new Event("run-all-cells"));
  }, []);

  useEffect(() => {
    if (!pulse) return;
    const t = setTimeout(() => setPulse(false), 1600);
    return () => clearTimeout(t);
  }, [pulse]);

  const onToggle = useCallback(() => setExpandAll(false), []);

  return (
    <>
      <HeaderBar
        onRunAll={onRunAll}
        title="deep-contractor-notebook-prod"
      />
      <Sidebar />
      <NotebookCanvas>
        <div className={pulse ? "run-all-pulse" : ""}>
          {/* ABOUT */}
          <AnimateOnScroll>
            <section id="about" className="mb-6 scroll-mt-20">
              <SectionHeading title="About" />
              <AboutCell
                name="DEEP CONTRACTOR"
                subtitle="AI Consultant, Engineer & Architect"
                location="London, UK"
                summary="AI Consultant, Engineer, and Architect with over 5+ years of experience, I've partnered with industry leaders including Databricks and Microsoft to architect and deploy end-to-end GenAI, ML, and MLOps solutions on Azure and Mosaic AI, spanning data pipelines, model development, deployment, governance, and monitoring, that scale securely across organizations. I specialize in translating complex AI use cases into pragmatic, cost-effective architectures that move teams from experimentation to reliable production systems, accelerating time-to-value and enabling strategic AI transformation. My expertise has been recognized through the Databricks Partner Solution Architect Champion title (2025), Kaggle Grandmaster status (2023), and features in Analytics India Magazine for advancing the data science community."
                cellNumber={1}
                timestamp="11:31 AM"
              />
            </section>
          </AnimateOnScroll>

          {/* BADGES */}
          <AnimateOnScroll delay={80}>
            <section id="badges" className="mb-6 scroll-mt-20">
              <SectionHeading title="Certifications & Badges" />
              <FigureCell
                cellNumber={2}
                timestamp="11:32 AM"
                duration={"<1s"}
                images={badges.map((b) => ({
                  src: b.imageUrl,
                  alt: b.name,
                  caption: b.label ?? b.name,
                  link: b.link,
                }))}
                gridCols={3}
                scrollAnimation
                showPerformance
                performanceExpanded={expandAll}
                onPerformanceToggle={onToggle}
                performanceContent={`${badges.length} certifications & badges loaded`}
              />
            </section>
          </AnimateOnScroll>

          <AddCellDivider />

          {/* EXPERIENCE */}
          <AnimateOnScroll delay={80}>
            <section id="experience" className="mb-4 scroll-mt-20">
              <SectionHeading title="Experience" />
            </section>
          </AnimateOnScroll>

          {/* Experience details with company logos */}
          {experienceDetails.map((job, idx) => (
            <AnimateOnScroll key={job.period} delay={80}>
              <section className="mb-4 scroll-mt-20">
                <ExperienceDetailCell
                  role={job.role}
                  company={job.company}
                  period={job.period}
                  location={job.location}
                  bullets={job.bullets}
                  logo={job.logo}
                  cellNumber={3 + idx}
                  timestamp="11:33 AM"
                />
              </section>
            </AnimateOnScroll>
          ))}

          {/* INDUSTRY EXPERIENCE */}
          <AnimateOnScroll delay={80}>
            <section className="mb-4 scroll-mt-20">
              <IndustriesCell
                industries={industries}
                cellNumber={3 + experienceDetails.length}
                timestamp="11:33 AM"
              />
            </section>
          </AnimateOnScroll>

          <AddCellDivider />

          {/* SPECIALIZED TECHNICAL EXPERTISE */}
          <AnimateOnScroll delay={80}>
            <section id="expertise" className="mb-4 scroll-mt-20">
              <SectionHeading title="Specialized Technical Expertise" />
              <ExpertiseCell
                areas={expertiseAreas}
                cellNumber={7}
                timestamp="11:34 AM"
              />
            </section>
          </AnimateOnScroll>

          {/* SKILLS */}
          <AnimateOnScroll delay={80}>
            <section id="skills" className="mb-4 scroll-mt-20">
              <SectionHeading title="Skills" />
              <SkillsCell
                groups={technicalSkillsGrouped}
                cellNumber={8}
                timestamp="11:34 AM"
              />
            </section>
          </AnimateOnScroll>

          <AddCellDivider />

          {/* Certifications */}
          <AnimateOnScroll delay={80}>
            <section className="mb-4 scroll-mt-20">
              <SectionHeading title="Certifications" />
              <TableCell
                cellNumber={9}
                timestamp="11:35 AM"
                duration={"<1s"}
                runtime="0.08 seconds"
                refreshed="5 hours ago"
                columns={[
                  { key: "name", label: "certification", type: "A₂" },
                  { key: "issuer", label: "issuer", type: "A₂" },
                  { key: "year", label: "year", type: "A₂" },
                ]}
                rows={certifications.map((r) => ({
                  name: r.name,
                  issuer: r.issuer,
                  year: r.year,
                }))}
                showPerformance
                performanceExpanded={expandAll}
                onPerformanceToggle={onToggle}
              />
            </section>
          </AnimateOnScroll>

          {/* Awards */}
          <AnimateOnScroll delay={80}>
            <section className="mb-4 scroll-mt-20">
              <SectionHeading title="Awards & Recognition" />
              <TimelineCell
                items={awards.map((r) => ({
                  name: r.name,
                  year: r.year,
                  detail: r.detail,
                  icon: r.icon,
                  image: r.image,
                }))}
                cellNumber={10}
                timestamp="11:35 AM"
                duration={"<1s"}
                showPerformance
                performanceExpanded={expandAll}
                onPerformanceToggle={onToggle}
              />
            </section>
          </AnimateOnScroll>

          <AddCellDivider />

          {/* EDUCATION */}
          <AnimateOnScroll delay={80}>
            <section id="education" className="mb-6 scroll-mt-20">
              <SectionHeading title="Education" />
              <EducationCell
                rows={education}
                cellNumber={11}
                timestamp="11:36 AM"
              />
            </section>
          </AnimateOnScroll>

          {/* CONTACT */}
          <AnimateOnScroll delay={80}>
            <section id="contact" className="mb-6 scroll-mt-20">
              <SectionHeading title="Contact" />
              <ContactCell
                email={contact.email}
                location={contact.location}
                linkedIn={contact.linkedIn}
                cellNumber={12}
                timestamp="11:36 AM"
              />
            </section>
          </AnimateOnScroll>

          {/* GALLERY */}
          <AnimateOnScroll delay={80}>
            <section id="gallery" className="mb-6 scroll-mt-20">
              <SectionHeading title="Gallery & Highlights" />
              <FigureCell
                cellNumber={13}
                timestamp="11:37 AM"
                duration="1s"
                images={gallery.map((g) => ({
                  src: g.src,
                  alt: g.alt,
                  caption: g.caption,
                  link: g.link,
                }))}
                slideshow
                slideshowInterval={5000}
                showPerformance
                performanceExpanded={expandAll}
                onPerformanceToggle={onToggle}
                performanceContent={`${gallery.length} highlights · Auto-advances every 5s`}
              />
            </section>
          </AnimateOnScroll>
        </div>
      </NotebookCanvas>
      <Footer />
    </>
  );
}
