import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=darshanvijay16@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "darshanvijay16@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=darshanvijay16@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "7019700701",
      link: "tel:7019700701"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/Darshanv16"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/Darshan-V16"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
