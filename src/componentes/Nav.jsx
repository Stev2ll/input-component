import React from "react";
import Logo from '../img/MI-Logo.gif'
import "../css/Nav.css"
import { useEffect, useRef } from 'react';

function Navegador({ li1, li2, li3, li4}) {
    const elementRef = useRef(null);

    useEffect(() => {
      function handleScroll() {
        const element = elementRef.current;
        const scrollTop = window.pageYOffset;
  
        element.style.transform = `translateY(${scrollTop}px)`;
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <nav ref={elementRef}>
      <img
        className="MiLogo"
        src={Logo}
        alt="Logo Personal"
      />
      <ul className="list-nav">
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>
    </nav>
  );
}

export default Navegador;
