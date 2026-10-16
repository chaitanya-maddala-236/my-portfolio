import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Code2,
  Database,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  summary: string;
  tags: string[];
  kind: "field" | "agents" | "vision";
  github: string;
  note: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "LocalFix — Offline Field Copilot",
    summary:
      "A local-first field-service copilot built around a demo motor controller, combining camera capture, OCR, speech transcription, hybrid manual retrieval, and source-checked guidance.",
    tags: ["Local AI", "OCR + ASR", "Hybrid RAG", "FastAPI"],
    kind: "field",
    github: "https://github.com/chaitanya-maddala-236/LocalFix",
    note: "LOCAL RUNTIME · EVIDENCE FIRST",
  },
  {
    number: "02",
    title: "CS Copilot — Customer Success AI",
    summary:
      "A full-stack customer intelligence platform that coordinates specialized agents to turn customer signals into evidence-backed next steps, with a human approval gate.",
    tags: ["LangGraph", "FastAPI", "React", "PostgreSQL"],
    kind: "agents",
    github: "https://github.com/chaitanya-maddala-236/CSM-AI-MULTI-AGENT-Orchestration",
    note: "7 AGENTS · HUMAN APPROVAL",
  },
  {
    number: "03",
    title: "DocVQA-Qwen — Document Question Answering",
    summary:
      "A LoRA fine-tune of Qwen2.5-VL for document questions. The README reports 89 exact match and 0.93 ANLS on a 200-example held-out split.",
    tags: ["Qwen2.5-VL", "LoRA", "PyTorch", "DocVQA"],
    kind: "vision",
    github: "https://github.com/chaitanya-maddala-236/DocVQA-Qwen",
    note: "REPORTED HELD-OUT RESULTS",
  },
];

const moreProjects = [
  {
    title: "EduSLM-RAG — Educational QA",
    description: "A research prototype combining BM25, vector retrieval, reranking, and conversational context for course material.",
    tags: "LangChain · ChromaDB · RAG",
    href: "https://github.com/chaitanya-maddala-236/SLM-with-RAG-for-Educational-QA",
    mark: "↗",
  },
  {
    title: "Ad Copilot — LLM Evaluation Platform",
    description: "An offline evaluation harness for a simulated AdTech RAG assistant, with query-level failures and configuration scorecards.",
    tags: "LLM evals · RAG · Streamlit",
    href: "https://github.com/chaitanya-maddala-236/Ad-Copilot-EvalsLLM-GenAI-Evaluation-Monitoring-Platform-for-AdTech",
    mark: "✳",
  },
  {
    title: "Finance Dashboard Backend API",
    description: "A finance-records API with role-based access, refresh-token rotation, audit-friendly soft deletes, and analytics.",
    tags: "Fastify · Prisma · PostgreSQL",
    href: "https://github.com/chaitanya-maddala-236/Finance-Dashboard",
    mark: "◌",
  },
];

const experience = [
  {
    title: "Agentic AI Intern",
    company: "Innomatics Research Labs · Hyderabad",
    date: "Feb 2026 — May 2026",
    highlights: [
      "Built asynchronous Python/FastAPI services with modular execution, structured validation, and explicit error handling.",
      "Debugged failures through structured test cases, log analysis, and failure analysis to isolate root causes.",
      "Containerized services with Docker and contributed to version-controlled CI/CD workflows; used Claude to accelerate implementation and testing.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Viswavasu Enterprises · Hyderabad",
    date: "Jan 2026 — Apr 2026",
    highlights: [
      "Built production-facing features with React, Node.js, Python microservices, REST APIs, and PostgreSQL for live student-facing users.",
      "Resolved API, database, and integration issues through systematic debugging.",
    ],
  },
  {
    title: "AI Developer Intern",
    company: "Summer of AI Program",
    date: "Jul 2025 — Aug 2025",
    highlights: ["Worked on supervised learning pipelines and team projects, from model preparation through deployment."],
  },
  {
    title: "Campus Ambassador",
    company: "GirlScript Summer of Code",
    date: "Jun 2025 — Oct 2025",
    highlights: ["Supported open-source participation through student outreach, technical events, and community activities."],
  },
  {
    title: "Generative AI Intern",
    company: "Skillible",
    date: "Jul 2024 — Aug 2024",
    highlights: ["Explored generative AI and prompt design through experiments with language-model applications."],
  },
  {
    title: "Machine Learning Intern",
    company: "Industech · Hyderabad",
    date: "Dec 2023 — May 2024",
    highlights: ["Built a customer-review classification system in Python and scikit-learn, covering preprocessing, feature engineering, experimentation, and evaluation."],
  },
  {
    title: "Data Science Intern",
    company: "Verzeo",
    date: "Sep 2022 — Oct 2022",
    highlights: ["Used Python, scikit-learn, and MySQL to explore customer data and prepare visual reports."],
  },
];

const skillGroups = [
  {
    label: "AI + machine learning",
    icon: <Brain size={20} />,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "LlamaIndex"],
  },
  {
    label: "Code + data",
    icon: <Code2 size={20} />,
    skills: ["Python", "JavaScript", "Java", "SQL", "C/C++", "Jupyter"],
  },
  {
    label: "Tools + systems",
    icon: <Database size={20} />,
    skills: ["FastAPI", "Flask", "PostgreSQL", "MongoDB", "Pinecone", "Docker"],
  },
];

function ProjectArtwork({ kind, number, note }: Pick<Project, "kind" | "number" | "note">) {
  const label = kind === "field" ? "OFFLINE AI" : kind === "agents" ? "LANGGRAPH" : "DOCUMENT AI";

  return (
    <div className={"project-art project-art--" + kind} aria-hidden="true">
      <div className="project-art__topline">
        <span>FIELD NOTE / {label}</span>
        <span>CHAI / {number}</span>
      </div>
      {kind === "field" && (
        <div className="field-console">
          <div className="field-console__head"><span>LOCALFIX / FIELD MODE</span><b>● READY</b></div>
          <div className="field-console__body">
            <div className="field-console__scan"><span>ACM-4200<br /><small>LIVE CAMERA</small></span><b>SCAN<br />↗</b></div>
            <div className="field-console__evidence"><small>MANUAL MATCH</small><strong>Pages 12—14</strong></div>
          </div>
          <div className="field-console__footer"><span>LOCAL ONLY</span><span>✓ SOURCE CHECK</span></div>
        </div>
      )}
      {kind === "agents" && (
        <div className="agent-map">
          <div className="agent-map__node agent-map__node--intake">CUSTOMER SIGNALS</div>
          <div className="agent-map__branch">
            <span>MEMORY</span><span>KNOWLEDGE</span><span>USAGE</span>
          </div>
          <div className="agent-map__node agent-map__node--result">NEXT BEST ACTION</div>
          <div className="agent-map__gate">HUMAN APPROVAL</div>
        </div>
      )}
      {kind === "vision" && (
        <div className="document-visual">
          <div className="document-visual__sheet">
            <div className="document-visual__stamp">QWEN / VISION</div>
            <div className="document-visual__line document-visual__line--short" />
            <div className="document-visual__line" />
            <div className="document-visual__answer"><small>QUESTION</small><strong>Passport number?</strong><span>→ extracted answer</span></div>
          </div>
          <div className="document-visual__metric"><strong>89</strong><span>EXACT<br />MATCH</span></div>
        </div>
      )}
      <span className="project-art__sticker"><Sparkles size={13} /> {note}</span>
    </div>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Chaitanya Maddala — AI & Machine Learning";
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Chaitanya Maddala, home" onClick={closeMenu}>
          <span className="brand__tile">C<span>.</span></span>
          <span className="brand__name">CHAI<span>TANYA</span></span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav id="site-navigation" className={menuOpen ? "site-nav site-nav--open" : "site-nav"}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid page-shell">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow__dot" /> AI &amp; MACHINE LEARNING ENGINEER</div>
            <h1>
              Turning<br />
              <span className="hero__highlight">data into</span><br />
              useful ideas<span className="hero__period">.</span>
            </h1>
            <p className="hero__intro">
              I&apos;m Chaitanya — I build thoughtful things with machine learning, language models, and data.
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#work">Explore my work <ArrowDownRight size={18} /></a>
              <a className="text-link" href="mailto:chaitanyaa.2006@gmail.com">Get in touch <ArrowUpRight size={17} /></a>
              <a className="text-link" href="https://drive.google.com/file/d/1fp53dN9V-Q5BGrCXyDHCPWxg7j0i1t-2/view?usp=sharing" target="_blank" rel="noreferrer">View résumé <FileText size={16} /></a>
            </div>
            <div className="hero__note"><MapPin size={15} /> Curious about AI, product, and the space between.</div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-backdrop" />
            <div className="hero__photo-frame">
              <img
                className="hero__photo"
                src="/lovable-uploads/72b8105f-506c-4cae-9076-e7c19d1b0681.png"
                alt="Chaitanya Maddala"
              />
              <div className="hero__photo-caption"><span>CHAI / 01</span><span>AI + DATA SCIENCE</span></div>
            </div>
            <div className="hero__sticker">HELLO,<br />I&apos;M CHAI<span>✳</span></div>
            <div className="hero__orbit" aria-hidden="true"><span>BUILD</span><span>LEARN</span><span>REPEAT</span></div>
            <div className="hero__visual-index">01—05</div>
          </div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <div className="ticker" aria-label="Machine learning, thoughtful products, data and AI">
        <div className="ticker__track">
          <span>Machine learning</span><b>✳</b><span>Thoughtful products</span><b>✳</b><span>Data &amp; AI</span><b>✳</b><span>Curiosity in practice</span><b>✳</b>
          <span>Machine learning</span><b>✳</b><span>Thoughtful products</span><b>✳</b><span>Data &amp; AI</span><b>✳</b><span>Curiosity in practice</span><b>✳</b>
        </div>
      </div>

      <section className="work-section section-pad" id="work">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker"><span>01</span> SELECTED WORK</p>
              <h2>Ideas, meet <span>execution.</span></h2>
            </div>
            <p className="section-heading__aside">Selected projects in local AI, multi-agent systems, and document understanding.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <ProjectArtwork kind={project.kind} number={project.number} note={project.note} />
                <div className="project-card__body">
                  <div className="project-card__number">PROJECT {project.number}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Code <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="more-work">
            <div className="more-work__heading"><span>MORE EXPLORATIONS</span><span>04—06</span></div>
            {moreProjects.map((project) => (
              <a className="more-project" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span className="more-project__mark">{project.mark}</span>
                <span className="more-project__main"><strong>{project.title}</strong><small>{project.description}</small></span>
                <span className="more-project__tags">{project.tags}</span>
                <ArrowUpRight size={19} className="more-project__arrow" />
              </a>
            ))}
            <a className="all-work-link" href="https://github.com/chaitanya-maddala-236" target="_blank" rel="noreferrer">
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="page-shell about-layout">
          <div className="about-intro">
            <p className="section-kicker"><span>02</span> THE PERSON BEHIND THE PROJECTS</p>
            <h2>Good questions<br />make <span>good work.</span></h2>
            <p className="about-intro__body">
              I&apos;m an AI &amp; Machine Learning Engineer drawn to the point where technical ideas become useful tools. My work spans generative AI, deep learning, and predictive modeling.
            </p>
            <p className="about-intro__body">
              I like to understand the problem first, then find a practical way to bring data and intelligent systems to it.
            </p>
            <a className="text-link text-link--dark" href="mailto:chaitanyaa.2006@gmail.com">Have a good question? <ArrowUpRight size={17} /></a>
          </div>

          <div className="about-side">
            <div className="education-card">
              <div className="education-card__top"><GraduationCap size={21} /><span>EDUCATION</span><span className="education-card__spark">✳</span></div>
              <div className="education-item">
                <span className="education-item__year">CURRENT</span>
                <h3>VNR Vignana Jyothi Institute of Engineering and Technology</h3>
                <p>B.Tech in Artificial Intelligence and Data Science</p>
              </div>
              <div className="education-item education-item--last">
                <span className="education-item__year">2021 — 2024</span>
                <h3>Institute of Electronics</h3>
                <p>Diploma in Artificial Intelligence and Machine Learning</p>
              </div>
            </div>
            <div className="skills-card">
              <div className="skills-card__top"><BarChart3 size={20} /><span>TOOLS IN MY KIT</span></div>
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <div className="skill-group__title">{group.icon}<span>{group.label}</span></div>
                  <div className="tag-list">
                    {group.skills.map((skill) => <span className="tag tag--light" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="page-shell">
          <div className="section-heading section-heading--journey">
            <div>
              <p className="section-kicker"><span>03</span> A FEW STEPS ALONG THE WAY</p>
              <h2>Learning by <span>doing.</span></h2>
            </div>
            <p className="section-heading__aside">Different teams and projects, all adding to the same curiosity about intelligent systems.</p>
          </div>
          <div className="journey-list">
            {experience.map((role, index) => (
              <article className="journey-item" key={role.company + role.title}>
                <span className="journey-item__index">0{index + 1}</span>
                <div className="journey-item__role"><h3>{role.title}</h3><p>{role.company}</p></div>
                <ul className="journey-item__highlights">
                  {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <span className="journey-item__date">{role.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-shell page-shell">
          <div className="contact__stamp"><span>LET&apos;S</span><span>MAKE</span><span>IT</span><span>USEFUL<span className="contact__spark">✳</span></span></div>
          <div className="contact__copy">
            <p className="section-kicker section-kicker--light"><span>04</span> OPEN A CONVERSATION</p>
            <h2>Have an interesting<br />problem in mind?</h2>
            <p>I&apos;d love to hear what you&apos;re building, exploring, or trying to figure out.</p>
            <a className="button button--lime" href="mailto:chaitanyaa.2006@gmail.com">Say hello <Mail size={17} /></a>
          </div>
          <div className="contact__links">
            <a href="mailto:chaitanyaa.2006@gmail.com">chaitanyaa.2006@gmail.com <ArrowUpRight size={16} /></a>
            <a href="https://drive.google.com/file/d/1fp53dN9V-Q5BGrCXyDHCPWxg7j0i1t-2/view?usp=sharing" target="_blank" rel="noreferrer">Résumé (PDF) <ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/in/chaitanya-maddala236/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
            <a href="https://github.com/chaitanya-maddala-236" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
            <a href="https://leetcode.com/u/AI_MASTER/" target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell site-footer__inner">
          <a className="brand brand--footer" href="#top"><span className="brand__tile">C<span>.</span></span><span className="brand__name">CHAI<span>TANYA</span></span></a>
          <span>Made with curiosity &amp; a little bit of code.</span>
          <a href="#top" className="back-to-top">BACK TO TOP <ArrowUpRight size={14} /></a>
          <small>© {new Date().getFullYear()} Chaitanya Maddala</small>
        </div>
      </footer>
    </main>
  );
};

export default Index;
