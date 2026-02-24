import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen } from "lucide-react";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: Award,
    status: "Completed",
  },
  {
    title: "Linux System Administration",
    issuer: "Linux Foundation",
    icon: Award,
    status: "Completed",
  },
  {
    title: "Kubernetes for Developers",
    issuer: "CNCF / Udemy",
    icon: BookOpen,
    status: "In Progress",
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    icon: BookOpen,
    status: "In Progress",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-2">// CERTIFICATIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Always <span className="gradient-text">Learning</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card hover-glow p-5 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <cert.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                  cert.status === "Completed"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
