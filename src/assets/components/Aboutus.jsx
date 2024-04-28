import React from 'react';

const AboutUs = () => {
  return (<div className='bg-green-100'>
    <div className="container mx-auto py-8 ">
      <div className="flex items-center justify-center mb-8">
        <img src="https://i.ibb.co/QjLmtvM/Screenshot-2024-04-28-at-15-37-41-Logo-Maker-Create-Stunning-Logos-Instantly-2024.png" alt="About Us" className="w-64 h-64 object-cover rounded-3xl" />
      </div>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-4">Welcome to Food for All! We are dedicated to...</p>
      <p className="text-lg mb-4">At Food for All, our mission is to end hunger and food waste by connecting surplus food with those in need. Every day, millions of people around the world go hungry while perfectly good food goes to waste. We believe that everyone deserves access to nutritious food, and no food should be thrown away when there are people who need it. Through our platform, we strive to make a positive impact on communities by facilitating food donations and reducing food waste.</p>
      <p className="text-lg mb-4">Our platform provides a simple and efficient way for individuals, businesses, and organizations to donate excess food to local charities, shelters, and community centers. By joining our network, you become part of a community dedicated to making a difference in the lives of others. Together, we can create a world where no one goes hungry, and every meal brings joy and nourishment.</p>
      <p className="text-lg mb-4">Join us in our mission to fight hunger and food waste. Together, we can make a difference, one meal at a time.</p>
      <div className="flex items-center justify-center mb-8">
        {/* <img src="https://media.istockphoto.com/id/909126120/photo/candid-shot-of-little-black-african-boy-eating-rice-outdoors.webp?s=2048x2048&w=is&k=20&c=PLrEMEwgnM-waV33LenPfvDcgsIcF9WD3_QmNGGfPzo=" alt="Another Image" className="w-96 h-96 object-cover rounded-" /> */}
      </div>
    </div></div>
  );
}

export default AboutUs;
