import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Dublin, Ireland",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+353 894952924",
      href: "tel:+353894952924",
    },
    {
      icon: Mail,
      label: "Email",
      value: "modimanav999@gmail.com",
      href: "mailto:modimanav999@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/manavmodii",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/manavmodi123",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? I'd love to hear about it. Let's connect!
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-card-hover p-5 flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
              >
                <div className="p-3 rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <info.icon size={22} className="text-primary transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-4 flex items-center gap-3 group flex-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
              >
                <social.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium">{social.label}</span>
                <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
