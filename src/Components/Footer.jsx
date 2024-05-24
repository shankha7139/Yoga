// src/Footer.js
import React, { useEffect, useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`fixed bottom-0 mt-20 left-0 w-full bg-[#3e3038] text-white py-2 sm:py-6 md:py-8 transition-transform ${isVisible ? '' : 'translate-y-full'}`}>
      <div className="container mx-auto text-center">
        <div className='flex gap-8 text-center justify-center text-lg ' >  
            <a href="">Home</a>
            <a href="">Contact Us</a>
            <a href="">Photo Gallery</a>
            <a href="">Contact us</a>
        </div>
       <div>
       <IconButton aria-label="instagram">
          <InstagramIcon  className='text-white' />
        </IconButton>
        <IconButton aria-label="facebook">
          <FacebookIcon className='text-white' />
        </IconButton>
        <IconButton aria-label="tweet">
          <TwitterIcon className='text-white' />
        </IconButton>
       </div>
        <p>© 2024 Bantu Programmers | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
