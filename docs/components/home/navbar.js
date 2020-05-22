/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link, Box } from '@hack4impact-uiuc/bridge';

const NavBar = () => {
  const router = useRouter();
  const [showNav, toggleNav] = useState(false);

  const onToggle = () => {
    toggleNav(!showNav);
  };

  const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWindowDimensions({ width: innerWidth, height: innerHeight });

    function handleResize() {
      const { innerWidth: widthResize, innerHeight: heightResize } = window;
      setWindowDimensions({ width: widthResize, height: heightResize });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={onToggle}>
          <img src="/homepage/menu.svg" alt="hamburger menu" />
        </span>
        <Link ml="22px" href="/">
          <img src="/bridge_full_logo.png" alt="bridge ui logo" width="128px" />
        </Link>
        <Box className="nav-links-box" display={showNav && windowDimensions.width <= 768 ? 'block' : windowDimensions.width > 768 ? 'flex' : 'none'}>
          <ul className="nav-links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/design">Design Guidelines</Link>
            </li>
            <li>
              <Link href="/components">Components</Link>
            </li>
            <li>
              <Link href="https://github.com/hack4impact-uiuc/bridge">
                <img width="24px" src="/homepage/github-logo.png" alt="github link logo" />
              </Link>
            </li>
          </ul>
        </Box>
        <style jsx>
          {`
          .navbar {
            max-width: ${router.pathname === '/' ? '1000px' : '1200px'};
            margin: 20px;
          }

          .logo {
            display: inline-block;
          }

          .navbar-toggle {
              position: absolute;
              top: 20px;
              right: 20px;
              cursor: pointer; 
              color: rgba(255,255,255,0.8);
              
              height: 24px;
              padding: 6px 6px;
              border: 1px solid #EBEEF2;
              border-radius: 8px;
          }

          .nav-links {
            list-style-type: none;
            margin: 15px auto;
            box-sizing: border-box;
            padding: 0;
          }
          
          .nav-links li {
            text-align: center;
            margin: 15px;
          }

        @media screen and (min-width: 768px) {
          .navbar {
            display: flex;
            justify-content: space-between;
            padding-bottom: 0;
            height: 70px;
            align-items: center;
            
            margin: 12px auto;
            width: 100%;
          }
          
          .nav-links {
            margin: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }

          .nav-links li {
            text-align: center;
            margin: 15px 40px;
          }

          .navbar-toggle {
            display: none;
        }
        }

      `}

        </style>
      </div>
    </nav>
  );
};

export default NavBar;
