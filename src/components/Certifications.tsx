import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "REST API (Intermediate)",
      issuer: "HackerRank",
      icon: "🏆",
    },
    {
      title: "Advanced React (Intermediate)",
      issuer: "Coursera",
      icon: "⚛️",
    },
    {
      title: "React Native (Intermediate)",
      issuer: "Coursera",
      icon: "📱",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Credentials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Certifications
          </h2>
          <p className="text-muted-foreground mt-4">
            Professional certifications validating my technical expertise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 flex items-center gap-4 min-w-[280px]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                {cert.icon}
              </div>
              <div>
                <h4 className="font-heading font-semibold">{cert.title}</h4>
                <p className="text-muted-foreground text-sm flex items-center gap-1">
                  <Award size={14} className="text-primary" />
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
