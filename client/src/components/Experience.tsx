import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Server, Code } from "lucide-react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Duseca Software",
    location: "Islamabad",
    period: "Jan 2025 — Present",
    icon: Server,
    gradient: "from-cyan-500 to-blue-500",
    achievements: [
      "Configured Nginx as reverse proxy and managed SSL/TLS certificates for production servers",
      "Managed Linux servers using cron jobs for automated log rotation and S3 archiving, eliminating storage overflow and ensuring backup compliance",
      "Wrote Terraform scripts to provision cloud infrastructure on AWS, reducing manual effort by 60%",
      "Automated CI/CD pipelines using GitHub Actions, reducing deployment time by 40%"
    ],
    metrics: [
      { label: "Manual Effort", value: "60%" },
      { label: "Deployment Time", value: "40%" }
    ]
  },
  {
    role: "Software Engineer - Backend",
    company: "Tesseract Innovations",
    location: "Karachi",
    period: "Jul 2024 — Aug 2025",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    achievements: [
      "Built real-time broadcasting system using Node.js, Redis Pub/Sub & WebSockets, reducing latency by 22ms for 10K+ concurrent users",
      "Containerized microservices with Docker & Docker Compose, achieving 40% fewer environment bugs",
      "Provisioned cloud infrastructure across 2 availability zones using Terraform, enabling auto-failover and 99.5% uptime",
      "Implemented Redis caching for PostgreSQL/MySQL queries, reducing response time by 40%",
      "Configured CI/CD pipeline with GitHub Actions for Docker builds, testing, and AWS EC2 deployments"
    ],
    metrics: [
      { label: "Latency", value: "22ms" },
      { label: "Uptime", value: "99.5%" },
      { label: "Response Time", value: "40%" },
      { label: "Bugs Reduced", value: "40%" }
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center sm:text-left"
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-2">// WORK EXPERIENCE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 sm:mb-12 mx-auto sm:mx-0">
            From backend development to DevOps engineering building scalable systems and automating infrastructure
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Only visible on desktop */}
          <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="relative mb-8 sm:mb-12 last:mb-0"
            >
              {/* Timeline Dot with Icon - Only visible on desktop */}
              <div className="hidden lg:block absolute left-0 -translate-x-1/2 top-6 w-16 h-16 z-10">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.gradient} opacity-20 animate-pulse`} />
                <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${exp.gradient} p-3 flex items-center justify-center shadow-lg`}>
                  <exp.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content Card - Centered on mobile, offset on desktop */}
              <div className="lg:ml-20">
                <div className="relative group max-w-4xl mx-auto lg:mx-0">
                  {/* Hover Glow Effect - Desktop only */}
                  <div className={`hidden lg:block absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 blur-sm`} />
                  
                  <div className="relative glass-card p-5 sm:p-6 backdrop-blur-xl bg-background/80 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl sm:rounded-2xl">
                    
                    {/* Mobile Header with Icon */}
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${exp.gradient} p-2 flex items-center justify-center shadow-lg shrink-0`}>
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-base sm:text-lg text-foreground">
                            {exp.role}
                          </h3>
                          <span className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient} border border-white/10 whitespace-nowrap`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Header - Hidden on mobile */}
                    <div className="hidden lg:flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <span className={`text-xs font-mono px-2.5 py-1 rounded-full bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient} border border-white/10 whitespace-nowrap`}>
                            {exp.period}
                          </span>
                        </div>
                        
                        {/* Company & Location */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company & Location - Mobile Version */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 lg:hidden">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Briefcase className="w-3 h-3" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      {exp.achievements.map((point, j) => (
                        <motion.li 
                          key={j} 
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 * i + 0.1 * j }}
                          className="text-xs sm:text-sm text-muted-foreground flex gap-2 sm:gap-3 group/item text-left"
                        >
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient} mt-0.5 shrink-0 text-sm sm:text-base`}>▹</span>
                          <span className="leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Metrics/Stats */}
                    <div className="flex flex-wrap gap-2 pt-2 sm:pt-3 border-t border-white/5 justify-center lg:justify-start">
                      {exp.metrics.map((metric, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary/30 backdrop-blur-sm"
                        >
                          <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{metric.label}:</span>
                          <span className={`text-[10px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Elements - Desktop only */}
                    <div className="hidden lg:block absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full pointer-events-none" />
                    <div className="hidden lg:block absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about Transition */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <div className="inline-block max-w-[90%] sm:max-w-none">
            <p className="text-xs sm:text-sm text-muted-foreground bg-secondary/30 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full backdrop-blur-sm leading-relaxed">
              <span className="text-primary font-bold text-sm sm:text-base">⚡</span> 
              <span className="ml-1">Transitioned from Backend to DevOps — leveraging dev expertise to build robust infrastructure</span>
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;