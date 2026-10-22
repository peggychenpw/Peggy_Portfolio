import React from "react";
import styles from "./home.module.scss";
import WorkList from "../../components/WorkList";

const projects = [
  {
    id: "melaleuca",
    title: "Global commerce, made clearer",
    client: "Melaleuca",
    type: "Digital experience · Front-end",
    year: "2021 — 2025",
    brief: "Responsive storefront pages and reusable Sitecore components for international markets. I partnered with design and marketing teams to make content easier to publish and shopping easier to navigate.",
    cover: "/image/projects/melaleuca.jpg",
    alt: "Melaleuca Japan storefront homepage with its navigation and featured wellness banner",
    imagePosition: "top",
    link: "https://jp.melaleuca.com/",
    className: "wide",
  },
  {
    id: "jalan",
    title: "A more welcoming way to explore Taiwan",
    client: "Jalan Project",
    type: "Service design · Co-founder",
    brief: "A travel service concept designed with migrant workers in mind, helping people navigate language barriers and transportation to enjoy local trips. The project won first place in the Startup Youth for Southeast Asia competition and received seed funding from NTU.",
    cover: "/image/projects/jalan-tour.jpg",
    alt: "Taipei skyline at dusk, photographed from above the city",
    link: "https://peggychenpw.github.io/jalan-tour/",
    className: "tall",
  },
  {
    id: "tarotpedia",
    title: "A thoughtful guide to the cards",
    client: "Tarotpedia",
    type: "Product design · Web development",
    year: "Personal project",
    brief: "A small, welcoming tarot library with card search, suit filters, daily draws, and a three-card reading that brings individual keywords into one interpretation.",
    cover: "/image/projects/tarotpedia.jpg",
    alt: "Tarotpedia homepage with its card artwork and daily reading introduction",
    imageFit: "contain",
    link: "https://peggychenpw.github.io/tarotpedia/",
    className: "tall",
  },
  {
    id: "photography",
    title: "The small moments we share",
    client: "Pet & lifestyle photography",
    type: "Photography · Editorial",
    brief: "Documentary-style portraits of pets and the people who love them. Selected work includes event photography for Petaum Taiwan and commercial photography for Giftpack.",
    cover: "/image/projects/dog-blog.jpg",
    alt: "A woman sitting with a Siberian Husky at home",
    imagePosition: "top",
    link: "https://peggychenpw.github.io/dog-blog/",
    className: "wide",
  },
];

const experience = [
  {
    date: "2026 — 2028",
    title: "M.S. Human-Computer Interaction",
    place: "University of California, Santa Cruz · Expected Jan 2028",
  },
  {
    date: "2021 — 2025",
    title: "Digital Content Specialist",
    place: "Melaleuca · UI and front-end focus",
  },
  {
    date: "2018",
    title: "Media Intern",
    place: "Yahoo · Verizon Media · Best Intern Award",
  },
  {
    date: "2015 — 2020",
    title: "B.A. Radio & Television",
    place: "National Chengchi University",
  },
];

const HomePage = () => (
  <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="intro-title">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>Designer · Developer · Photographer</p>
        <h1 id="intro-title">I make digital experiences feel <em>clear, useful, and human.</em></h1>
        <p className={styles.intro}>I’m Pingwei Chen, an HCI graduate student and UX-focused front-end developer. I bring together thoughtful interface design, careful implementation, and a photographer’s eye for detail.</p>
        <div className={styles.heroLinks}>
          <a className={styles.primaryLink} href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
          <a href="mailto:peggy.chen.pw@gmail.com">Get in touch</a>
        </div>
      </div>
      <aside className={styles.heroNote} aria-label="Location and availability">
        <img src={`${process.env.PUBLIC_URL}/image/myPhoto.png`} alt="Portrait of Pingwei Chen" />
        <p>Based in San Jose, California<br />Open to UX and front-end opportunities</p>
        <a href="https://www.linkedin.com/in/peggy-cpw" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
      </aside>
      <a className={styles.scrollCue} href="#work"><span aria-hidden="true">↓</span> Scroll to explore</a>
    </section>

    <section className={styles.workSection} id="work" aria-labelledby="work-title">
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.kicker}>Selected work</p>
          <h2 id="work-title">A few things I’ve made</h2>
        </div>
        <p>From digital products to the everyday moments worth keeping.</p>
      </div>
      <WorkList dataSource={projects} />
    </section>

    <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
      <div className={styles.aboutIntro}>
        <p className={styles.kicker}>A little about me</p>
        <h2 id="about-title">Curious about people.<br />Careful with the details.</h2>
        <p>I’ve worked across e-commerce, media, service design, and photography. I enjoy connecting what people need with the small interface decisions that make a product easier to use.</p>
        <p>My toolkit spans Figma, wireframing and prototyping, HTML, CSS/Sass, JavaScript, React, Sitecore, and Adobe Creative Cloud. I speak English, Mandarin, and Taiwanese.</p>
        <div className={styles.aboutLinks}>
          <a href="mailto:peggy.chen.pw@gmail.com">Email Pingwei <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/peggy-cpw" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className={styles.experience} aria-label="Experience and education">
        {experience.map((item) => (
          <article className={styles.experienceItem} key={item.title}>
            <p>{item.date}</p>
            <div><h3>{item.title}</h3><span>{item.place}</span></div>
          </article>
        ))}
      </div>
    </section>

    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <p className={styles.kicker}>Have a good one in mind?</p>
      <h2 id="contact-title">Let’s make it <em>meaningful.</em></h2>
      <a href="mailto:peggy.chen.pw@gmail.com">peggy.chen.pw@gmail.com <span aria-hidden="true">↗</span></a>
    </section>
  </div>
);

export default HomePage;
