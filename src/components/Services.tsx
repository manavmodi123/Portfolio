import { Code, Layout, Server, Cloud, GitBranch, MessageSquare, ArrowRight } from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description:
        "End-to-end development of scalable web applications using modern technologies like React, Node.js, and cloud platforms.",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive, performant user interfaces with React, Vue.js, and modern CSS frameworks like Tailwind.",
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description:
        "Designing robust REST APIs, microservices architecture, and database solutions for scalable applications.",
    },
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "AWS & Azure deployment, infrastructure setup, and optimization.",
    },
    {
      icon: GitBranch,
      title: "CI/CD & DevOps",
      description: "Automated pipelines, testing strategies, and deployment workflows.",
    },
    {
      icon: MessageSquare,
      title: "Technical Consulting",
      description: "Architecture reviews, tech stack guidance, and best practices.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">What I Offer</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Services I Provide
          </h2>
          <p className="text-muted-foreground mt-4">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        {/* Primary Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {primaryServices.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 flex items-start gap-4 group"
            >
              <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors flex-shrink-0">
                <service.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
