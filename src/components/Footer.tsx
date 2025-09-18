import { Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: Phone, text: '(555) 123-4567' },
    { icon: Mail, text: 'susan.chen@email.com' },
    { icon: MapPin, text: 'New York, NY' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black text-[#fbf5ed] rounded-t-2xl rounded-b-none my-1 mx-0 mb-0 md:my-4 md:mx-0 md:mb-0 lg:m-4 lg:rounded-2xl">
      <div className="w-full card-padding lg:px-12 lg:py-14">
        {/* Name */}
        <div>
          <h3 className="text-7xl fade-in-up mb-8 md:mb-20">Susan Chen</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 fade-in-up">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-body mb-4">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-[#fbf5ed]" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="text-lg font-body mb-4">Connect With Me</h4>
            <div className="flex md:justify-end space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-[#fbf5ed] hover:text-gray-300 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-[#fbf5ed]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="footer-divider fade-in-up my-8"
          style={{ animationDelay: "0.5s" }}
        />
        <p className="text-sm fade-in-up">
          © 2035 by Susan Chen. Powered and secured by{" "}
          <a
            href="https://www.linkedin.com/in/aayushshaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300 transition-colors"
          >
            Aayush
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;