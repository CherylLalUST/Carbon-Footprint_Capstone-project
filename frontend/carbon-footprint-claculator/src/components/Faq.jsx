import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Faq.css';

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is Carbon Print?",
      answer: "Carbon Print is a platform that helps you track, reduce, and manage your carbon footprint effectively."
    },
    {
      question: "How do I get started?",
      answer: "You can get started by registering an account, adding your details, and tracking your emissions from activities like transportation, energy, and waste."
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes, the platform is free to use for all users."
    },
    {
      question: "Can I track emissions for my entire household?",
      answer: "Yes, you can enter details for your household and track emissions collectively."
    },
    {
        question: "What should I consider while tracking emissions?",
        answer: "Carbon Print tracks your emissions on a monthly basis. Make sure to enter accurate and complete data for the current month, as changes cannot be made once the month's data has been submitted. This ensures precise tracking and meaningful insights."
    },    
    {
        question: "How is transportation emission tracked?",
        answer: "Transportation emissions are tracked by analyzing details such as the type of vehicle, fuel used, mileage, and maintenance status. Our platform calculates emissions based on these factors to provide an accurate estimate of your carbon footprint from transportation."
    },
    {
        question: "How are waste emissions tracked?",
        answer: "Waste emissions are tracked based on the types and amounts of waste generated. Factors such as recycling habits, composting, and disposal methods are considered to estimate the carbon footprint from waste."
    },
    {
        question: "How are house energy emissions tracked?",
        answer: "House energy emissions are tracked by analyzing your energy consumption patterns, including electricity usage and energy sources. "
    },
    {
        question: "What is the difference between Green Energy Sources, Grid Power and Hybrid electricity types?",
        answer: "Green Energy Sources refer to renewable energy options like solar and wind power, which are environmentally friendly and sustainable. Grid Power, on the other hand, refers to non-renewable energy supplied by the government or local utility providers, typically generated from fossil fuels. Hybrid electricity combines both Green Energy Sources and Grid Power, ensuring a balance of sustainability and reliability by utilizing renewable energy when available and switching to grid power as a backup."
    },
    
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
<>

        <div className="navbar">
          <div className="navbar-center">
            <h1>Carbon Print</h1>
            <p>FAQS</p>
          </div>
        </div>

    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            <h3>{faq.question}</h3>
            
          </div>
          {openQuestion === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    <button className="back-button" onClick={() => navigate(-1)}>
        Back
    </button>

    </div>
</>
  );
}

export default Faq;
