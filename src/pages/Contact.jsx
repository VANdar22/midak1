import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from "react-router-dom";
import { accentColors } from "../constants/colors";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const [openFaqs, setOpenFaqs] = useState([]);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaRef = useRef(null);

  const faqItems = [
    {
      question: "What research services do you offer?",
      answer:
        "We offer a wide range of research services including market research, academic research, data analysis, survey design, and research consultancy. Our team specializes in both qualitative and quantitative research methods to provide comprehensive insights.",
    },
    {
      question: "How can I request a quote for a research project?",
      answer:
        "You can request a quote by filling out our contact form with details about your project, including the scope, timeline, and specific requirements. Our team will review your request and provide a customized quote within 1-2 business days.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a diverse range of industries including healthcare, education, technology, finance, and social sciences. Our team has experience working with clients from various sectors to deliver high-quality research solutions.",
    },
    {
      question: "How long does a typical research project take?",
      answer:
        "The duration of a research project depends on its scope and complexity. Simple projects may take 2-4 weeks, while more comprehensive studies could take several months. We provide a detailed timeline during the project planning phase.",
    },
    {
      question: "Do you offer data analysis services?",
      answer:
        "Yes, we provide comprehensive data analysis services using advanced statistical methods and software. Our team can help with data cleaning, statistical analysis, data visualization, and interpretation of results.",
    },
    {
      question: "Can you help with academic research papers?",
      answer:
        "Absolutely! We provide support for academic research including literature reviews, methodology design, data collection, analysis, and paper writing. We ensure all work is original and properly cited according to academic standards.",
    },
    {
      question: "What makes your research services unique?",
      answer:
        "Our approach combines academic rigor with practical business insights. We have a team of experienced researchers with diverse backgrounds, allowing us to tackle complex research questions from multiple perspectives. We're also committed to delivering clear, actionable insights.",
    },
    {
      question: "How do you ensure data privacy and confidentiality?",
      answer:
        "We take data privacy very seriously. All client data is handled with strict confidentiality agreements in place. We comply with relevant data protection regulations and implement robust security measures to protect sensitive information.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      setSubmitStatus({
        success: false,
        message: 'Please complete the reCAPTCHA verification.'
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: null, message: "" });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "There was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // reCAPTCHA Site Key
  const RECAPTCHA_SITE_KEY = '6LeOSUgsAAAAADK8ApKj4ZW-xqWe8UNc03FhzL5D';

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "League Spartan, sans-serif" }}
    >
      <div className="w-full px-4 pt-32 pb-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main Content - Side by Side */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Left Column - Contact Info */}
            <div className="lg:w-1/2">
              <h1
                className="font-semibold text-black mb-8 leading-tight font-[league spartan]"
                style={{ fontSize: "2rem", lineHeight: "1.75rem" }}
              >
                Contact us to facilitate your journey through high-quality
                project development and exploratory research support
              </h1>

              <div className="space-y-8 mb-12 md:mb-16 lg:mb-20">
                <div>
                  <h3
                    className={`text-[${accentColors.DEFAULT}] text-lg font-semibold mb-2`}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@midakresearch.com"
                    className={`text-gray-700 hover:text-[${accentColors.DEFAULT}] transition-colors text-xl`}
                  >
                    info@midakresearch.com
                  </a>
                </div>

                <div className="mb-6 md:mb-0">
                  <h3
                    className={`font-semibold text-[${accentColors.DEFAULT}] text-lg font-semibold -mt-2 mb-2`}
                  >
                    Location
                  </h3>
                  <p className="text-black text-lg font-semibold">
                    Accra, Ghana
                    <br />
                    Operating Globally
                  </p>
                </div>

                <div>
                  <h3
                    className={`text-[${accentColors.DEFAULT}] text-lg font-semibold mt-4 mb-2`}
                  >
                    Connect
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 -ml-2">
                    <a
                      href="https://linkedin.com/company/midak-research-consult"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black! hover:text-[#0A66C2]! !transition-transform duration-200 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/midakresearch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black! hover:text-[#E1306C]! transition-transform duration-200 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/midakresearch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black! hover:text-black! transition-transform duration-200 hover:scale-110"
                      aria-label="X (Twitter)"
                    >
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer for mobile */}
            <div className="-mt-8 lg:hidden"></div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-1/2 bg-white p-6 md:p-8 rounded-lg border border-gray-100 lg:-mt-8">
              <h2
                className="text-xl font-bold text-gray-800 mb-6"
                style={{ fontSize: "2rem", lineHeight: "1.75rem" }}
              >
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {submitStatus.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.success
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${accentColors.DEFAULT}] focus:border-transparent transition-all duration-200"
                    placeholder="Michael Asante"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${accentColors.DEFAULT}] focus:border-transparent transition-all duration-200"
                    placeholder="midakresearch@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium text-gray-700 mb-1 font-['League_Sp
                  
                  artan']"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${accentColors.DEFAULT}] focus:border-transparent transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${accentColors.DEFAULT}] focus:border-transparent transition-all duration-200"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>

                <div className="mt-4">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    theme="light"
                    className="recaptcha"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    style={{
                      fontFamily: "league spartan, sans-serif",
                      backgroundColor: accentColors.main,
                      border: `2px solid ${accentColors.DEFAULT}`,
                      color: "white",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = "white";
                        e.target.style.color = accentColors.DEFAULT;
                        e.target.style.borderColor = accentColors.DEFAULT;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.backgroundColor = accentColors.main;
                        e.target.style.color = "white";
                        e.target.style.borderColor = accentColors.DEFAULT;
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* FAQ Section - Below both columns */}
          <div className="w-full">
            <div className="border-t border-gray-200 w-full my-12"></div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2
                className={`text-3xl font-bold text-center text-[${accentColors.DEFAULT}] mb-8`}
              >
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 max-w-4xl mx-auto">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left py-4 px-5 bg-white hover:bg-purple-50 rounded-lg transition-colors border border-gray-100 shadow-sm"
                      onClick={() => toggleFaq(index)}
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      <span className="font-semibold text-gray-800">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-[${
                          accentColors.DEFAULT
                        }] transform transition-transform ${
                          openFaqs.includes(index) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFaqs.includes(index) && (
                      <div className="px-4 pt-2 pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
