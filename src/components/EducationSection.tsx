const EducationSection = () => {
  const education = [
    {
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      period: '2017 - 2019',
      details: 'Focus on Software Engineering and Machine Learning'
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      period: '2013 - 2017',
      details: 'Graduated Magna Cum Laude, GPA: 3.8/4.0'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer'
  ];

  const internships = [
    {
      company: 'Google',
      role: 'Software Engineering Intern',
      period: 'Summer 2018'
    },
    {
      company: 'Facebook',
      role: 'Frontend Development Intern',
      period: 'Summer 2017'
    }
  ];

  // New: Projects data
  const projects = [
    {
      title: 'Real-time Chat App',
      tech: 'React, Node.js, Socket.IO',
      period: '2024',
      description: 'Built a scalable WebSocket chat with rooms, typing indicators, and JWT auth.'
    },
    {
      title: 'E-commerce Admin Dashboard',
      tech: 'Next.js, Tailwind CSS, PostgreSQL',
      period: '2023',
      description: 'Implemented sales analytics, inventory CRUD, and role-based access control.'
    }
  ];

  return (
    <>
      {/* Black Header Section */}
      <section className="bg-black py-12 md:my-4 section-responsive rounded-2xl">
        <div className="w-full">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl leading-[1] text-[#fbf5ed] px-8 lg:px-12">Education & Certifications</h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="education" className="md:my-4 section-responsive">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
            {/* Education Column */}
            <div className="bg-[var(--portfolio-warm-beige)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-2xl text-black mb-8">Education</h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-black font-body">{edu.degree}</h4>
                  <p className="text-black font-medium font-body">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-600 mb-2 font-body">{edu.period}</p>
                  <p className="text-base text-black font-body">{edu.details}</p>
                  {index < education.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Projects Column (replaces cloned Internships) */}
            <div className="bg-[var(--portfolio-warm-beige)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-2xl text-black mb-8">Projects</h3>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{
                    animationDelay: `${(education.length + index) * 0.2}s`
                  }}
                >
                  <h4 className="text-black font-medium font-body">{project.title}</h4>
                  <p className="text-black text-base font-body">
                    {project.tech}
                  </p>
                  <p className="text-xs text-gray-600 mb-2 font-body">{project.period}</p>
                  <p className="text-base text-black font-body">{project.description}</p>
                  {index < projects.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Internships Column */}
            <div className="bg-[var(--portfolio-warm-beige)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-2xl text-black mb-8">Internships</h3>
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${(education.length + projects.length + index) * 0.2}s` }}
                >
                  <h4 className="text-black font-body">{internship.role}</h4>
                  <p className="text-black font-medium font-body">
                    {internship.company}
                  </p>
                  <p className="text-xs text-gray-600 font-body">{internship.period}</p>
                  {index < internships.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Column */}
            <div className="bg-[var(--portfolio-warm-beige)] card-padding lg:px-12 lg:py-14 rounded-2xl">
              <h3 className="text-2xl text-black mb-8">Certifications</h3>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="fade-in-up px-4"
                  style={{ animationDelay: `${(education.length + projects.length + internships.length + index) * 0.2}s` }}
                >
                  <p className="font-medium text-black font-body">{cert}</p>
                  {index < certifications.length - 1 && (
                    <div
                      className="experience-divider fade-in-up"
                      style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
