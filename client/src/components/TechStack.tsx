import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud, Container, GitBranch, FileCode, Activity, Monitor,
} from "lucide-react";

const categories = [
  {
    title: "Cloud",
    icon: Cloud,
    iconBg: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    tools: ["AWS EC2", "S3", "RDS", "VPC", "IAM", "Route 53", "ECS", "EKS"],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Containers",
    icon: Container,
    iconBg: "from-sky-500/20 to-indigo-500/20",
    iconColor: "text-sky-400",
    tools: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
    gradient: "from-sky-500 to-indigo-400"
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    iconBg: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    tools: ["GitHub Actions", "Jenkins", "ArgoCD"],
    gradient: "from-green-500 to-emerald-400"
  },
  {
    title: "Infrastructure as Code",
    icon: FileCode,
    iconBg: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    tools: ["Terraform", "CloudFormation"],
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "Monitoring",
    icon: Activity,
    iconBg: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
    tools: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
    gradient: "from-orange-500 to-red-400"
  },
  {
    title: "OS & Networking",
    icon: Monitor,
    iconBg: "from-gray-500/20 to-slate-500/20",
    iconColor: "text-gray-400",
    tools: ["Linux", "Bash", "Nginx", "TCP/IP", "DNS", "SSH"],
    gradient: "from-gray-500 to-slate-400"
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-2">// TECH STACK</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Tools of the <span className="gradient-text">Trade</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cat.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm`} />
              
              {/* Main Card */}
              <div className="relative glass-card p-6 h-full backdrop-blur-xl bg-background/80 border border-white/10 hover:border-white/20 transition-all duration-300">
                
                {/* Header with Gradient Icon Background */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`relative p-3 rounded-xl bg-gradient-to-br ${cat.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className={`w-5 h-5 ${cat.iconColor} relative z-10`} />
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{cat.title}</h3>
                </div>

                {/* Tools Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * i + 0.05 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group/tool"
                    >
                      <span className="relative z-10 px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/50 text-secondary-foreground border border-white/5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default block backdrop-blur-sm">
                        {tool}
                      </span>
                      {/* Tooltip on Hover (Optional) */}
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-[10px] rounded opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-border">
                        {tool}
                      </span>
                    </motion.span>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TechStack;