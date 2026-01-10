import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Putatoe Technologies Pvt. Ltd.",
      location: "India",
      period: "June 2022 – September 2022",
      achievements: [
        "Designed and deployed 4 REST APIs improving backend efficiency by 15%",
        "Contributed to scalable system architecture design",
        "Led Agile ceremonies including stand-ups, sprint planning, and retrospectives",
        "Built MicroStrategy dashboards and ETL pipelines, reducing manual reporting by 20%",
      ],
    },
    {
      title: "Web Development Intern",
      company: "My Captain",
      location: "Remote",
      period: "November 2020 – February 2021",
      achievements: [
        "Developed frontend and backend features for web applications",
        "Built responsive UI using HTML, CSS, and JavaScript",
        "Collaborated in Agile workflows to deliver features on time",
        "Gained foundational experience in full-stack development",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium">Work Experience</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground mt-4">
            Building expertise through hands-on experience in software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content card */}
                <div className={`glass-card-hover p-6 ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-heading font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Briefcase size={14} />
                      <span>Internship</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
