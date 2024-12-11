import React from 'react';
import service1 from "../../assets/Services/Services.png";
import service2 from "../../assets/Services/Services2.png";
import service3 from "../../assets/Services/Services3.png";
import Image from 'next/image';

export default function Services() {
  return (
    <section className='container h-[calc(60vh-5rem)] flex md:flex-row justify-around items-center gap-8'>
      {/* Service 1 */}
      <div className='text-center'>
        <Image src={service1} alt='Free and Fast Delivery' className='mx-auto' />
        <h3 className='text-md font-semibold mt-4'>FREE AND FAST DELIVERY</h3>
        <p className='text-gray-600 text-sm'>Free delivery for all orders over $140</p>
      </div>

      {/* Service 2 */}
      <div className='text-center'>
        <Image src={service2} alt='24/7 Customer Service' className='mx-auto' />
        <h3 className='text-md font-semibold mt-4'>24/7 CUSTOMER SERVICE</h3>
        <p className='text-gray-600 text-sm'>Friendly 24/7 customer support</p>
      </div>

      {/* Service 3 */}
      <div className='text-center'>
        <Image src={service3} alt='Money Back Guarantee' className='mx-auto' />
        <h3 className='text-md font-semibold mt-4'>MONEY BACK GUARANTEE</h3>
        <p className='text-gray-600 text-sm'>We return money within 30 days</p>
      </div>
    </section>
  );
}
