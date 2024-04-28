import React, { useState } from 'react';

const Welcome = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you can add functionality to submit the form data
    // For now, let's just set submitted to true
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Welcome to Food for All!</h2>
        {!submitted ? (
          <>
            <p className="text-lg mb-4">We're delighted to have you join our community dedicated to reducing food waste and nourishing those in need.</p>
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Are you here to donate surplus food or to receive assistance?</label>
              <select id="role" name="role" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full">
                <option value="donor">I want to donate surplus food</option>
                <option value="recipient">I'm in need of assistance</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Where are you located?</label>
              <input type="text" id="location" name="location" placeholder="e.g., city, state" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2">What type of surplus food do you have or need?</label>
              <input type="text" id="type" name="type" placeholder="e.g., fruits, vegetables, cooked meals" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="donateFuture" className="block text-gray-700 font-bold mb-2">Would you be interested in donating regularly in the future?</label>
              <select id="donateFuture" name="donateFuture" className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full">
                <option value="yes">Yes, I'm interested in regular donations</option>
                <option value="no">No, this is a one-time donation</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="additionalInfo" className="block text-gray-700 font-bold mb-2">Is there any additional information you'd like to provide?</label>
              <textarea id="additionalInfo" name="additionalInfo" placeholder="Feel free to share any specific details or preferences related to your donation or assistance needs." className="border rounded-lg px-4 py-2 focus:outline-none focus:border-green-400 w-full h-24"></textarea>
            </div>
            <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">Submit</button>
          </>
        ) : (
          <><p className="text-lg text-green-700 font-bold">Thank you for your submission! Someone will contact you shortly.</p>
            <a href="https://www.youtube.com/watch?v=DNCL-1ASmNc" target="_blank" rel="noopener noreferrer" className="text-lg text-black font-bold">Know More (click here)</a>
            </>
        )}
      </div>
    </div>
  );
}

export default Welcome;
