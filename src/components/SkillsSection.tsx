import { title } from "process";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'Go']
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Sass']
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express', 'Django', 'Spring Boot', 'GraphQL', 'REST APIs']
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud', 'Azure', 'CI/CD', 'Jenkins', 'Terraform']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Leadership', 'Project Management', 'Communication', 'Mentoring', 'Agile Development']
    }
  ];

  return (
    <>
      {/* Black Header Section */}
      <section className="bg-black py-12 md:my-4 section-responsive rounded-2xl">
        <div className="w-full">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl leading-[1] text-[#fbf5ed] px-8 lg:px-12">Skills</h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="skills" className="section-responsive">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="bg-[var(--portfolio-warm-beige)] rounded-2xl card-padding lg:px-12 lg:py-14"
              >
                <h3
                  className="fade-in-up text-3xl leading-[1] md:text-2xl text-black"
                  style={{ animationDelay: `${catIndex * 0.2}s` }}
                >
                  {category.title}
                </h3>
                {catIndex < skillCategories.length && (
                  <div
                    className="experience-divider fade-in-up my-4"
                    style={{ animationDelay: `${catIndex * 0.2 + 0.5}s` }}
                  />
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 pl-4">
                  {category.skills.map((skill, skillIndex) => (
                    <p
                      key={`${category.title}-${skill}`}
                      className="fade-in-up text-base font-body text-black mb-1"
                      style={{ animationDelay: `${skillIndex * 0.2 + 0.5}s` }}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
