'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://cdn.silverdagger.vip/IMG_5060.webp',
    'https://cdn.silverdagger.vip/IMG_5209.webp',
    'https://cdn.silverdagger.vip/IMG_5282.webp',
    'https://cdn.silverdagger.vip/IMG_5312.webp',
    'https://cdn.silverdagger.vip/IMG_5313.webp',
    'https://cdn.silverdagger.vip/IMG_5389.webp',
    'https://cdn.silverdagger.vip/IMG_5401.webp',
    'https://cdn.silverdagger.vip/IMG_7211.webp',
    'https://cdn.silverdagger.vip/IMG_8302.webp',
    'https://cdn.silverdagger.vip/IMG_8639.webp',
    'https://cdn.silverdagger.vip/IMG_8755.webp',
    'https://cdn.silverdagger.vip/IMG_9077.webp',
    'https://cdn.silverdagger.vip/IMG_9350.webp',
    'https://cdn.silverdagger.vip/phonto.webp',
    'https://cdn.silverdagger.vip/phonto2.webp',
    'https://cdn.silverdagger.vip/silver-3.webp',
    'https://cdn.silverdagger.vip/silver-4.webp',
    'https://cdn.silverdagger.vip/silver-5.webp',
    'https://cdn.silverdagger.vip/silver-6.webp',
  ];

  const slideDuration = 5000; // Time for each slide in ms

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle keyboard navigation for slides
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + images.length) % images.length
      );
    }
  };

  return (
    <section
      className='relative bg-gradient-to-br from-purple-700 via-black to-purple-900 text-gray-100 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden'
      onKeyDown={handleKeyDown} // Enable keyboard navigation
      tabIndex={0} // Make the section focusable
    >
      {/* Background Image Slideshow */}
      <div
        className='absolute inset-0 z-0'
        onContextMenu={(e) => e.preventDefault()} // Disable right-click on images
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 transform ${
              currentSlide === index
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              pointerEvents: 'none', // Prevent interactions
              animation: currentSlide === index ? 'fadeIn 2s ease-in-out' : '',
            }}
          ></div>
        ))}
      </div>

      {/* Overlay for readability */}
      <div className='absolute inset-0 bg-black/50 z-10'></div>

      {/* Content */}
      <div className='relative z-20 text-center'>
        <h1 className='text-5xl font-bold text-purple-400 mb-4'>
          Silver Dagger
        </h1>
        <p className='text-lg text-gray-300 mb-6 max-w-3xl mx-auto'>
          Welcome to Silver Dagger, a space for personal growth, exploration,
          and connection. Please note, all applications require a $44 fee upon
          submission to ensure the commitment and dedication of every applicant.
        </p>
        <p className='text-lg text-gray-300 mb-6 max-w-3xl mx-auto'>
          Explore and evolve within a space designed to nurture individuality
          and the dynamic relationship. Growth is a shared journey, and Silver
          Dagger fosters this with care and intention.
        </p>
        <a
          href='/application'
          className='inline-block px-8 py-4 bg-purple-600 text-gray-900 font-semibold rounded-md shadow-lg hover:bg-purple-700 transition'
        >
          Start Your Application
        </a>

        {/* Dynamic Info Containers */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl'>
          {/* Example Cards */}
          {[
            {
              title: 'Deep Connection',
              description:
                'Build a unique dynamic where trust, respect, and exploration are at the forefront. Daddy Silver Dagger emphasizes meaningful connections and genuine experiences. Let her seep in and begin to take control.',
            },
            {
              title: 'Submissive Training & Conditioning',
              description:
                'Explore and evolve within a space designed to nurture both individuality and the dynamic. Daddy Silver Dagger will train and condition you to her desires and responses. You will grow not only as a submissive but as a person.',
            },
            {
              title: 'Safety for Submissives',
              description:
                "Daddy Silver Dagger is committed to providing a safe environment to all submissives. No matter what information is shared, Daddy's primary goal is to protect and nurture all dynamics as a first step.",
            },
            {
              title: 'Erotic Destruction',
              description:
                "In Daddy Silver Dagger's space, you will be given the opportunity to experience extreme bliss under her guidance. You will be broken down and rebuilt in her image. Spiraling down the rabbit hole is where you will find your true purpose beneath her.",
            },
            {
              title: 'Experiences',
              description:
                'Daddy Silver Dagger offers a number of experiences such as livestreams, drains, premade content, custom content, video/audio calls. Daddy Silver Dagger is always just one message & send away from playing with you.',
            },
            {
              title: 'Payment Security',
              description:
                'Your application fee can be sent securely using the payment methods listed on the application page. All payments are handled with confidentiality and safety.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className='bg-black/70 p-6 rounded-lg shadow-md hover:bg-black/80 transition'
            >
              <h2 className='text-2xl font-bold text-purple-400 mb-2'>
                {card.title}
              </h2>
              <p className='text-gray-300 text-sm'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
