import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const [openFaqs, setOpenFaqs] = useState([]);

  const faqItems = [
    {
      question: "What research services do you offer?",
      answer: "We offer a wide range of research services including market research, academic research, data analysis, survey design, and research consultancy. Our team specializes in both qualitative and quantitative research methods to provide comprehensive insights."
    },
    {
      question: "How can I request a quote for a research project?",
      answer: "You can request a quote by filling out our contact form with details about your project, including the scope, timeline, and specific requirements. Our team will review your request and provide a customized quote within 1-2 business days."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including healthcare, education, technology, finance, and social sciences. Our team has experience working with clients from various sectors to deliver high-quality research solutions."
    },
    {
      question: "How long does a typical research project take?",
      answer: "The duration of a research project depends on its scope and complexity. Simple projects may take 2-4 weeks, while more comprehensive studies could take several months. We provide a detailed timeline during the project planning phase."
    },
    {
      question: "Do you offer data analysis services?",
      answer: "Yes, we provide comprehensive data analysis services using advanced statistical methods and software. Our team can help with data cleaning, statistical analysis, data visualization, and interpretation of results."
    },
    {
      question: "Can you help with academic research papers?",
      answer: "Absolutely! We provide support for academic research including literature reviews, methodology design, data collection, analysis, and paper writing. We ensure all work is original and properly cited according to academic standards."
    },
    {
      question: "What makes your research services unique?",
      answer: "Our approach combines academic rigor with practical business insights. We have a team of experienced researchers with diverse backgrounds, allowing us to tackle complex research questions from multiple perspectives. We're also committed to delivering clear, actionable insights."
    },
    {
      question: "How do you ensure data privacy and confidentiality?",
      answer: "We take data privacy very seriously. All client data is handled with strict confidentiality agreements in place. We comply with relevant data protection regulations and implement robust security measures to protect sensitive information."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: null, message: '' });
      }, 5000);
      
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
     

      <div className="w-full px-4 py-12">
        <div className="w-full bg-white p-6 md:p-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-2xl md:text-4xl font-semibold text-gray-800 mb-12 leading-tight max-w-4xl font-['League_Spartan']">
                Contact us to facilitate your journey through high-quality project development and exploratory research support
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#6f35c8] text-lg mb-1 font-['League_Spartan']">Email Us</h3>
                  <a href="mailto:info@midakresearch.com" className="text-gray-700 hover:text-[#6f35c8] transition-colors font-['League_Spartan']">info@midakresearch.com</a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#6f35c8] text-lg mb-1 font-['League_Spartan']">Location</h3>
                  <p className="text-gray-700 font-['League_Spartan']">Accra, Ghana<br />Operating Globally</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#6f35c8] text-lg mb-1 font-['League_Spartan']">Connect</h3>
                  <a href="https://linkedin.com/company/midak-research-consult" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#6f35c8] transition-colors font-['League_Spartan']">
                    LinkedIn: Midak Research Consult (MRC)
                  </a>
                </div>
              </div>
            </div>
            
            {/* Horizontal Divider */}
            <div className="my-12 border-t border-gray-200 w-full"></div>
            
            <div className="md:pl-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f35c8] focus:border-transparent font-['League_Spartan'] transition-all duration-200"
                    placeholder="Michael Asante"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f35c8] focus:border-transparent font-['League_Spartan'] transition-all duration-200"
                    placeholder="midakresearch@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f35c8] focus:border-transparent font-['League_Spartan'] transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6f35c8] focus:border-transparent font-['League_Spartan'] transition-all duration-200"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center bg-[#6f35c8] border-2 border-[#6f35c8] px-6 py-3 rounded-full text-white hover:bg-white hover:text-[#6f35c8] hover:border-[#6f35c8] transition-all duration-300 font-['League_Spartan'] font-semibold shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-12 border-t border-gray-200 w-full"></div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-[#6f35c8] font-['Changa_One',cursive] mb-8">
          Frequently Asked Questions
        </h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left py-4 px-5 bg-white hover:bg-purple-50 rounded-lg transition-colors border border-gray-100 shadow-sm"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-800">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#6f35c8] transform transition-transform ${
                      openFaqs.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
  );
};

export default ContactPage;
