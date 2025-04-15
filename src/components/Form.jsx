import React, { useState } from 'react';

const Form = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/xgvapazr', {
      method: 'POST',
      body: form,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
    }
  };

  return (
        <div className="w-[80%] md:w-1/2 lg:w-1/3 m-auto font-semibold ">
            <h2 className="text-center font-bold text-4xl md:text-5xl mb-10">CONTACT ME!</h2>
          <form onSubmit={handleSubmit} className="grid">
            <div className="">
              <label htmlFor="name" className='block mb-3'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                
                required
                className="w-full p-2 text-base rounded-lg mb-8 text-background"
              />
            </div>
            <div >
              <label htmlFor="email" className="block mb-3">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                
                required
                className="w-full p-2 rounded-lg mb-8 text-background"
              />
            </div>
            <div className=''>
              <label htmlFor="message" className="block mb-3">Message:</label>
              <textarea
                id="message"
                name="message"
                
                required
                rows="4"
                className="w-full p-2 rounded-lg mb-8 text-background "
              ></textarea>
            </div>
            <button type="submit" disabled={status === 'sending'} className="buttonBlue m-auto">
              
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            <div className="flex justify-center pt-6 " >
            {status === 'success' && <p className="text-green-500 mt-2">✅ Your message has been sent successfully.</p>}
            {status === 'error' && <p className="text-red-500 mt-2">❌ Something went wrong. Please try again.</p>}
            </div>

          </form>
        </div>
      );
  
};

export default Form;