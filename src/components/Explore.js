import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArticleCard from './ArticleCard.js';

const Explore = () => {
  const articles = [
    {
      id: 1,
      title: 'Advanced Underwater Object Detection',
      description: 'Utilizing state-of-the-art computer vision and machine learning, our underwater object detection system accurately identifies marine species and debris, enhancing marine biology research, environmental conservation, and real-time operational efficiency in challenging underwater environments.',
      image: 'https://www.frontiersin.org/files/Articles/918504/fmars-09-918504-HTML/image_m/fmars-09-918504-g001.jpg', 
    },
    {
      id: 2,
      title: 'Innovative Marine Object Detection Technology',
      description: 'Our cutting-edge object detection technology leverages advanced computer vision and machine learning to identify marine species and debris, revolutionizing marine research, conservation efforts, and real-time underwater operations with unparalleled accuracy and efficiency.',
      image: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-19939-2/MediaObjects/41598_2022_19939_Fig1_HTML.jpg',
    },
    {
      id: 3,
      title: 'Real-Time Underwater Object Identification',
      description: 'Harnessing advanced computer vision and machine learning, our system provides real-time identification of underwater objects, enhancing marine research, environmental conservation, and diver safety by accurately detecting marine life and debris in challenging aquatic conditions.',
      image: 'https://editor.analyticsvidhya.com/uploads/705697.jpg',
    },
    {
      id: 4,
      title: 'Precision Underwater Detection System',
      description: 'Utilizing advanced computer vision and machine learning, our underwater detection system offers precise identification of marine species and debris, significantly advancing marine research, conservation efforts, and real-time operational safety in diverse underwater environments.',
      image: 'https://www.mdpi.com/electronics/electronics-12-03413/article_deploy/html/images/electronics-12-03413-g006.png',
    },
    // Add more articles here
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Increase the number of cards displayed
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="explore" className="min-h-screen p-10 bg-Blue3 text-white">
      <h2 className="text-4xl font-poppins mb-5">Explore</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="w-full">
          <Slider {...settings}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;


// import React from 'react';
// import exploreImage from '../assets/explore.jpg'; // Ensure you have this image in the correct path

// const Explore = () => {
//   return (
//     <section id="explore" className="min-h-screen p-10 bg-blue-300">
//       <h2 className="text-4xl mb-5">Explore</h2>
//       <div className="flex flex-col lg:flex-row items-center">
//         <img src={exploreImage} alt="Explore" className="w-full lg:w-1/2 rounded-lg shadow-lg mb-5 lg:mb-0 lg:mr-5"/>
//         <p className="lg:w-1/2">Discover the wonders of the underwater world. From coral reefs to deep-sea creatures, explore the fascinating biodiversity...</p>
//       </div>
//     </section>
//   );
// };

// export default Explore;
