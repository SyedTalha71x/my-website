import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Shield, GitBranch, Cloud, Box} from "lucide-react";

const projects = [
  {
    title: "Multi-Region Disaster Recovery System",
    desc: "Designed and implemented a highly available, fault-tolerant DR solution across two AWS regions (us-east-1 primary, ap-south-1 secondary) using Infrastructure as Code. Achieved RPO of <1 minute and RTO of <3 minutes with automated failover capabilities.",
    features: [
      "Active-Passive Architecture with Cross-Region RDS replication",
      "Cloudflare DNS health checks for zero-downtime failover",
      "Complete Terraform automation (107+ resources)",
      "Multi-AZ deployment in each region"
    ],
    tech: ["AWS", "Terraform", "RDS", "Cloudflare", "MySQL"],
    github: "https://github.com/SyedTalha71x/disaster-recovery-system-aws",
    icon: Shield,
    gradient: "from-red-500 to-orange-400"
  },
  {
    title: "Multi-Env CI/CD Pipeline",
    desc: "Complete DevOps CI/CD solution automating software delivery across Development, Staging, and Production environments. Eliminates manual deployments, reduces errors, and accelerates delivery while maintaining quality standards.",
    features: [
      "GitHub Actions with automated testing & Docker builds",
      "AWS ECR integration for container registry",
      "Zero-downtime deployments to EC2",
      "Environment-specific configurations"
    ],
    tech: ["GitHub Actions", "Docker", "AWS ECR", "EC2", "Node.js"],
    github: "https://github.com/SyedTalha71x/multi-env-cicd-pipeline",
    icon: GitBranch,
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Production EKS DevOps Pipeline",
    desc: "Production-ready cloud-native application with complete GitOps implementation. Deployed MERN stack on AWS EKS with comprehensive DevOps practices and automated workflows.",
    features: [
      "GitOps with Argo CD for automated deployments",
      "Helm charts for Kubernetes package management",
      "AWS EKS cluster with ECR integration",
      "ALB Ingress Controller for traffic management"
    ],
    tech: ["Kubernetes", "ArgoCD", "Helm", "AWS EKS", "Terraform", "MERN"],
    github: "https://github.com/SyedTalha71x/production-eks-devops-pipeline",
    icon: Box,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Production Node.js AWS Infrastructure",
    desc: "Production-grade full-stack application (React + Node.js + PostgreSQL) deployed on AWS ECS Fargate with complete Infrastructure as Code and automated CI/CD pipeline.",
    features: [
      "Complete IaC with Terraform for AWS infrastructure",
      "Jenkins CI/CD pipeline with automated builds",
      "Self-hosted PostgreSQL on EC2 in private subnet",
      "CloudWatch & Grafana monitoring with auto-scaling"
    ],
    tech: ["AWS ECS", "Terraform", "Jenkins", "Docker", "PostgreSQL", "React"],
    github: "https://github.com/SyedTalha71x/production-nodejs-aws-infrastructure",
    icon: Cloud,
    gradient: "from-purple-500 to-pink-400"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-2">// PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Things <span className="gradient-text">I've Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Real world DevOps implementations focusing on high availability, automation, and production grade practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Gradient Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm`} />
              
              {/* Main Card */}
              <div className="relative glass-card p-6 h-full backdrop-blur-xl bg-background/80 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    title="View Code on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Key Features */}
                <div className="mb-4 space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className={`text-xs mt-1.5 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>▹</span>
                      <span className="text-xs mt-2 text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-secondary/50 text-secondary-foreground border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics/Stats (Optional) */}
                {project.title.includes("Disaster Recovery") && (
                  <div className="flex gap-3 mt-2 text-xs">
                    <span className="px-2 py-1 rounded bg-red-500/10 text-red-400">RPO {'<'}1min</span>
                    <span className="px-2 py-1 rounded bg-orange-500/10 text-orange-400">RTO {'<'}3min</span>
                    <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">107 resources</span>
                  </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/SyedTalha71x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 border border-white/5 hover:border-primary/30"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;