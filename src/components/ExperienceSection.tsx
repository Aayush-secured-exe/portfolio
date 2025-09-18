import experienceImage from '@/assets/experience-working.png';
import { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');

    const apply = () => {
      if (mql.matches && leftRef.current) {
        setImgHeight(leftRef.current.offsetHeight);
      } else {
        setImgHeight(null);
      }
    };

    // Observe left column size changes
    let ro: ResizeObserver | null = null;
    if (leftRef.current) {
      ro = new ResizeObserver(apply);
      ro.observe(leftRef.current);
    }

    apply();

    const handleChange = () => apply();
    window.addEventListener('resize', handleChange);

    // Preferred API
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange);
    } else if ('addListener' in mql) {
      // Narrow type for deprecated API without ts-expect-error
      (mql as MediaQueryList & {
        addListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any) => void;
        removeListener: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any) => void;
      }).addListener(handleChange as any);
    }

    return () => {
      window.removeEventListener('resize', handleChange);
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', handleChange);
      } else if ('removeListener' in mql) {
        (mql as any).removeListener(handleChange);
      }
      ro?.disconnect();
    };
  }, []);

  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Software Engineer',
      period: '2022 - Present',
      responsibilities: [
        'Lead development of scalable web applications using React and Node.js',
        'Mentor junior developers and conduct code reviews',
        'Collaborate with cross-functional teams to deliver high-quality products',
        'Implement best practices for testing and deployment',
      ],
    },
    {
      company: 'Innovation Labs',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      responsibilities: [
        'Developed and maintained multiple client websites and applications',
        'Built RESTful APIs and integrated third-party services',
        'Optimized application performance and user experience',
        'Participated in agile development processes',
      ],
    },
    {
      company: 'StartupCo',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      responsibilities: [
        'Created responsive user interfaces using React and CSS',
        'Collaborated with designers to implement pixel-perfect designs',
        'Improved website loading speed by 40% through optimization',
        'Worked closely with backend team for seamless integration',
      ],
    },
  ];

  return (
    <section id="experience" className="flex section-responsive md:my-4 rounded-2xl">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] md:gap-4 md:items-stretch">
          {/* Left column */}
          <div ref={leftRef} className="order-2 md:order-1 space-y-[5px] sm:space-y-[5px] md:space-y-[20px] lg:space-y-[20px] md:h-full">
            <div className="bg-black py-12 rounded-2xl">
              <div className="fade-in-up">
                <h2 className="text-4xl lg:text-5xl leading-[1] text-[#fbf5ed] px-8 lg:px-12">
                  Experience
                </h2>
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--portfolio-warm-beige)] card-padding lg:px-12 lg:py-14">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <div className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="mb-4">
                        <h3 className="text-3xl leading-[1] md:text-xl text-black mb-1">{exp.role}</h3>
                        <p className="text-black font-body text-sm mb-1">{exp.company}</p>
                        <p className="text-xs font-body text-gray-600 mb-3">{exp.period}</p>
                      </div>
                      <ul className="space-y-2 list-disc list-outside pl-5 marker:text-black">
                        {exp.responsibilities.map((r, idx) => (
                          <li key={idx} className="text-base text-black leading-relaxed">
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {index < experiences.length - 1 && (
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

          {/* Right column: image (top on mobile, right on md+) */}
          <div className="order-1 md:order-2 md:h-full">
            <div className="scale-in w-full md:h-full">
              <img
                src={experienceImage}
                alt="Professional working environment"
                style={imgHeight ? { height: `${imgHeight}px` } : undefined}
                className="w-full h-[450px] md:h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
