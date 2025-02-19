import React, { useState } from 'react';

function AboutUsContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, contactNumber, message } = formData;
    
    // Constructing the WhatsApp URL with pre-filled message
    const whatsAppMessage = `*New Message*\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nContact Number: ${contactNumber}\nMessage: ${message}`;
    const whatsAppUrl = `https://wa.me/+917987200339?text=${encodeURIComponent(whatsAppMessage)}`;
    
    // Redirecting to WhatsApp with the pre-filled message
    window.open(whatsAppUrl, '_blank');
  };

  return (
    <div className='mt-20 w-full min-h-[90vh] flex justify-center items-center'>
      <div className='bg-white text-black rounded-lg shadow-lg p-24 w-full max-w-5xl'>
        <h2 className='text-3xl font-bold text-center text-black mb-2'>SEND US MESSAGE</h2>
        <h3 className='text-xl font-semibold text-center text-black'>Contact With Us</h3>
        <div className="flex gap-2 justify-center items-center mb-16">
          <span className="border-2 border-red-500 w-12"></span>
          <span className="border-2 border-black w-5"></span>
          <span className="border-2 border-red-500 w-12"></span>
        </div>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
              type='text'
              name='name'
              placeholder='Your Name *'
              required
              className='p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500'
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email *'
              required
              className='p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
              type='text'
              name='subject'
              placeholder='Your Subject *'
              required
              className='p-3 rounded border border-gray-300 w-full h-12 focus:outline-none focus:ring-1 focus:ring-red-500'
              value={formData.subject}
              onChange={handleChange}
            />
            <input
              type='tel'
              name='contactNumber'
              placeholder='Contact Number'
              className='p-3 focus:outline-none focus:ring-1 focus:ring-red-500 rounded border border-gray-300 w-full h-12'
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <textarea
            name='message'
            placeholder='Message *'
            required
            className='p-3 rounded border border-gray-300 w-full h-24 focus:outline-none focus:ring-1 focus:ring-red-500'
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <div className='flex justify-start'>
            <button className='bg-red-500 text-white text-xs font-bold py-2 px-3 rounded h-12 hover:bg-black transition-all duration-500 ease-in-out'>
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutUsContact;
