import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {  GitBranch, Cpu, Workflow, Cloud } from "lucide-react";

const highlights = [
  { icon: Workflow, label: "Distributed Systems", desc: "Trading platforms & broadcasting systems" },
  { icon: Cloud, label: "Cloud Infrastructure", desc: "AWS-native architecture" },
  { icon: GitBranch, label: "CI/CD Automation", desc: "End-to-end pipelines" },
  { icon: Cpu, label: "Container Orchestration", desc: "Docker & Kubernetes" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-2">// MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From <span className="gradient-text">Backend</span> to DevOps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              My journey into tech started as a <span className="text-primary font-medium">Backend Developer</span>, where I spent 1.5 years 
              building and maintaining distributed systems from high-frequency trading platforms 
              to real-time broadcasting systems. Working on these large-scale applications gave me 
              a deep appreciation for system architecture, but also opened my eyes to the challenges 
              of deployment, scalability, and infrastructure management.
            </p>
            <p>
              That's when I discovered my true passion <span className="text-primary font-medium">DevOps and Cloud Computing</span>. 
              The idea of automating infrastructure, ensuring zero-downtime deployments, and building 
              systems that could scale effortlessly fascinated me. I dove deep into AWS, containerization, 
              and CI/CD pipelines, and haven't looked back since.
            </p>
            <p>
              Today, I'm strategically strengthening my expertise in modern DevOps practices mastering 
              infrastructure as code, Kubernetes orchestration, and building robust CI/CD strategies. 
              My backend background gives me a unique edge: I don't just deploy infrastructure, I understand 
              the applications running on it. I'm on a mission to become a well-rounded DevOps engineer 
              who can bridge the gap between development and operations seamlessly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card hover-glow p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.label}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;