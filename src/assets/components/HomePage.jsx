import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-green-100'>
      <div className="container mx-auto flex ">
        <div className="w-1/2 p-4">
          <img src="https://www.africansolutions.org/wp-content/uploads/2011/07/DSC_1463-1080x675.jpg" alt="Placeholder" className="w-full" />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold align-middle">"Be a reason for someone else’s smile."</h2>
          <p>Your surplus food holds the power to spread joy and make a tangible difference in the lives of others. By donating through our platform, you're not just giving away food; you're connecting with individuals in need, reducing waste, and nourishing communities in profound ways. Each donation, no matter its size, contributes to a ripple effect of kindness and positivity that extends far beyond the immediate moment. "No act of kindness, no matter how small, is ever wasted." - Aesop.</p>
        </div>
      </div>

      <div className="container mx-auto flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold">Sharing is Caring</h2>
          <p>In a world where food insecurity and hunger persist, your simple act of generosity can make a significant impact. Together, we can create a more compassionate and sustainable future, where no one goes to bed hungry and where every donation, no matter how modest, helps build a stronger and more caring community. Join us in our mission to transform surplus food into hope, compassion, and nourishment for all..</p>
        </div>
        <div className="w-1/2 p-4">
          <img src="https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.jpg?s=1024x1024&w=is&k=20&c=4PGbQnx1BN2XaC9Y2BdWtKUOBwz7s4EnNY_QkAW2JFc=" alt="Placeholder" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
