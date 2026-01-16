import React, { useState } from 'react';
import { FaQuestion, FaTimes, FaChevronRight } from 'react-icons/fa';
import './FAQWidget.css';

const faqData = [
  {
    question: "What Makes Us Your Best Choice for B2B Lead Generation?",
    answer: "We are top-rated lead generation specialists with over 12 years of experience, 200+ successfully completed projects, and a 100% job success score on Upwork. Our team delivers highly qualified, actionable leads tailored to your industry, targets, and goals, performing rigorous quality assurance checks to ensure every lead is accurate, complete, and ready for outreach. We don’t recycle data — every lead list is researched and built from scratch to meet your unique criteria. Data privacy is our top priority, and all client information is handled securely and confidentially. Partner with us and gain a trusted, reliable team dedicated to helping your business grow with deal-ready, high-quality leads."
  },
  {
    question: "How do you keep our files confidential?",
    answer: "All client files and project details are handled with strict confidentiality. Nothing is shared outside your project team. We also know that every client has unique criteria, so we customize our process to match your specific needs while keeping everything secure. For extra security, we are happy to provide a Non-Disclosure Agreement (NDA) if required."
  },
  {
    question: "Do you offer pre-made lists or ready-to-use contacts?",
    answer: "No, we do not use pre-made lists, and no client data is ever recycled. Every client project is carefully researched and built from scratch to match your firm’s specific targets, industry, and criteria. Data privacy is our top priority, and all information is handled securely and confidentially."
  },
  {
    question: "How do you verify the leads?",
    answer: "We verify each contact and company, validate emails with trusted tools and AI, and keep bounce rates under 2%. Using professional websites like Linkedin, social media sites, global company databases, and trusted financial platforms like PitchBook, we deliver high-quality, accurate leads every time."
  },
  {
    question: "How Fast Can You Deliver Leads?",
    answer: "Timelines vary based on project complexity, the number of data points, and the research required. For example, one client may need 4 columns of data, while another may need 10, and some criteria take more time to research. We provide an estimated turnaround time before starting and keep you updated throughout the process. On average, simpler projects can be completed within the day, while more complex projects may take longer."
  },
  {
    question: "Are the Leads Fully Qualified?",
    answer: "Yes. We ensure each lead meets your specific criteria—such as company size, industry, location, and contact role. Our team cross-checks all details, removes duplicates, and performs a final Quality Assurance check to make sure the file is clean, accurate, and ready for outreach."
  },
  {
    question: "How Much Does Each Lead Cost?",
    answer: "Our rates range from $0.50 to $1.00 per lead, depending on the complexity of the criteria, the number of data points, and the level of research required. Each project is unique, so we provide a clear, customized quote before starting to ensure your expectations are met."
  },
  {
    question: "How Much Do You Charge Per Hour?",
    answer: "Our hourly rates for lead generation and related services range from $7 to $10 per hour, depending on the type of project. At $7/hr, the rate covers research and verifications, while $10/hr may also include transferring data to CRM databases like Hubspot. Each project is unique, so we provide a customized quote to match your needs and goals."
  },
  {
    question: "Can You Do Contact Enrichment and List Clean-Up?",
    answer: "Yes. We specialize in contact enrichment and list clean-up. We verify that contacts are still with their companies, remove inactive or duplicate entries, and update lists with new contacts or their most recent company affiliations as needed. We make sure your file is clean, updated, and ready for outreach."
  },
  {
    question: "What industries do you cover?",
    answer: "We specialize in B2B lead generation for investment companies across various industries, including Food & Beverage, Food Tech, e-Commerce, Retail, Manufacturing, AgTech, Home Technology, Fitness, Home Goods, Sports Teams and Entertainment Venues, Agriculture, Real Estate, and Hospitality. We can also customize our research based on your specific needs."
  },
  {
    question: "Can You Handle Different Project Types?",
    answer: "Absolutely. We handle one-time projects, long-term projects, and projects with unique or evolving requirements. We are a team, so we can manage multiple projects at once while making sure priority projects are completed first. Every project is treated individually to ensure the results align with your specific goals."
  },
  {
    question: "How Do You Ensure Transparency in Hourly Work?",
    answer: "We use WebWork, Hubstaff, Upwork, or any work tracking tool you prefer, allowing clients to monitor progress in real-time. This ensures full transparency on tasks, hours worked, and milestones achieved. You’ll always know exactly what we’re working on, making hourly projects fully accountable and easy to track."
  },
  {
    question: "What Can I Expect If I Hire You on Upwork?",
    answer: "Clients can contact Tina on Upwork for hourly or fixed-price contracts. You’ll receive the same high-quality, accurate, and verified leads as our standard service. For hourly projects, we provide full transparency using Upwork’s work tracker, so you can monitor progress in real-time. Our team handles the work under Tina’s management to ensure that everyone is on the same page and quality is consistent."
  },
  {
    question: "What if a lead bounces?",
    answer: "Even verified emails may bounce due to reasons beyond our control, such as full inboxes, deactivated accounts, or temporary server issues. Any bounced lead will be replaced, if available, at no additional cost, ensuring your list stays accurate and ready for outreach."
  },
  {
    question: "How Can I Pay for Your Services?",
    answer: "For clients hiring us on Upwork, payments are made securely through the platform. For direct clients, we accept payments via PayPal or Wise. This ensures a safe, transparent, and convenient payment process for all types of projects."
  },
  {
    question: "Do You Require a Deposit or Advance Payment?",
    answer: "For Upwork fixed-price projects, advance payment is required and will be paid through Escrow, and hourly contracts are paid weekly on the Upwork platform. For new direct clients we require at least a 50% advance for both fixed-price and hourly projects. For ongoing work, weekly or biweekly payments can be arranged, and once trust is established, the 50% advance is no longer required, with full payment allowed weekly. This ensures commitment while we deliver high-quality, verified leads immediately."
  },
  {
    question: "Can I Hire Your Team for Hourly or Fixed-Price Projects?",
    answer: "Yes. Clients can hire Tina and her team on Upwork for hourly or fixed-price projects. We ensure each project meets your specific criteria, and every client receives the same high-quality, accurate, and verified leads, whether it’s a short-term project or a long-term engagement."
  },
  {
    question: "Do You Provide Web Scraping Services?",
    answer: "Yes, we can scrape websites when required. We only collect publicly available and scrapable data and always verify and enrich the information to ensure it is accurate, complete, and ready for outreach. Some websites cannot be scraped due to technical or legal limitations, and in those cases, we use alternative methods, such as manual research or encoding, when needed."
  },
  {
    question: "What About a Contract?",
    answer: "We require a contract before starting any project to ensure clarity and mutual agreement. For Upwork clients, the contract is handled securely through the platform. For direct clients, we prepare a contract for your review and approval before work begins."
  }
];

const FAQWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Default to the first question being selected
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button 
        className={`faq-trigger-btn ${isOpen ? 'hide' : ''}`} 
        onClick={toggleModal}
        aria-label="Open FAQ"
      >
        <FaQuestion className="faq-icon" />
      </button>

      {/* MODAL BACKDROP & CONTAINER */}
      <div className={`faq-modal-backdrop ${isOpen ? 'open' : ''}`} onClick={toggleModal}>
        <div className="faq-big-modal" onClick={(e) => e.stopPropagation()}>
          
          {/* HEADER */}
          <div className="faq-header">
            <h3>Frequently Asked Questions</h3>
            <button className="faq-close-btn" onClick={toggleModal}>
              <FaTimes />
            </button>
          </div>

          {/* SPLIT CONTENT BODY */}
          <div className="faq-split-body">
            
            {/* LEFT SIDEBAR (Questions) */}
            <div className="faq-sidebar">
              {faqData.map((item, index) => (
                <button 
                  key={index} 
                  className={`faq-sidebar-item ${selectedIndex === index ? 'active' : ''}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <span>{item.question}</span>
                  <FaChevronRight className="arrow-icon"/>
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT (Answer) */}
            <div className="faq-main-content">
               <h2>{faqData[selectedIndex].question}</h2>
               <div className="answer-text">
                 {faqData[selectedIndex].answer}
               </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default FAQWidget;