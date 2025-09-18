const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Best Software Engineering Project',
      organization: 'Stanford University',
      description: 'Awarded for developing an innovative machine learning platform that improved data processing efficiency by 60%.'
    },
    {
      title: 'Outstanding Student Development',
      organization: 'Tech Solutions Inc.',
      description: 'Recognized for exceptional mentoring and leadership in guiding junior developers and improving team productivity.'
    },
    {
      title: 'OpenSource Contributor of the Year',
      organization: 'DevCommunity',
      description: 'Honored for significant contributions to open-source projects with over 10,000 downloads and 500+ GitHub stars.'
    },
    {
      title: 'Hackathon Winner',
      organization: 'TechCrunch Disrupt',
      description: 'First place winner for developing a sustainable tech solution that addresses environmental challenges through innovative software.'
    }
  ];

  return (
    <>
      {/* Black Header Section */}
      <section className="bg-black py-12 md:my-4 section-responsive rounded-2xl">
        <div className="w-full">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl leading-[1] text-[#fbf5ed] px-8 lg:px-12">Notable Achievements</h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-responsive">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-[5px] md:gap-5">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-[var(--portfolio-warm-beige)] rounded-2xl card-padding lg:px-12 lg:py-14"
              >
                <h3
                  className="fade-in-up text-2xl text-black"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {achievement.title}
                </h3>
                {index < achievements.length && (
                  <div
                    className="experience-divider fade-in-up my-4"
                    style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                  />
                )}
                <p
                  className="text-sm fade-in-up text-black font-body mb-4"
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  {achievement.organization}
                </p>
                <p
                  className="fade-in-up font-body text-black leading-relaxed pl-4"
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;