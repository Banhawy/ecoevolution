import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
import 'bootstrap-css-only/css/bootstrap.min.css';

const GlobalStyles = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Philosopher);
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--body-bg);
    font-weight: 400;
    font-family: "Open Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    font-size: 1.5rem;
    line-height: 160%;
    ${media.greaterThan('large')`
      font-size: 1.7rem;
    `}
  }
  p {
    font-family: 'Philosopher', sans-serif;
    font-size: 2.5rem;
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  a {
    color: var(--primaryColor)
  }

  :root { 
    --gray-extra-light: #eaeaea; 
    --gray-light: #747d8d;  
    --gray: #475060;
    --gray-dark: #2e333e;

    --primary-color: #0066f9;
    --secondary-color: #2e333e;
    --thirdy-color: #001ff9;

    --body-bg: #FFFFFF; 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: var(--primary-color);
    --link-color-hover: var(--thirdy-color);

    --text-color: var(--gray);
    --text-light:var(--gray-light);
    --text-dark: var(--gray-dark);

    --width-container: 100%;
    --width-narrow: 1040px;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;
    section.narrow {
      @media (max-width: 768px) {
        margin: 0;
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0 13rem
      }
      @media (min-width: 1024px) { 
        margin: 0 16%
      }
    }
    .card-container {
        display: flex;
        justify-content: center;
        @media (max-width: 768px) {
            flex-wrap: wrap;
        }
        h3 {
          font-size: x-large;
        }
        p {
          font-size: 2rem;
        }
        .card-icons {
          display: flex;
          justify-content: center;
          i {
            margin: 1rem;
            &:nth-child(1){
              color: #03a9f4;
            }
            &:nth-child(2){
              color: #66bb6a;
            }
          }
        }
    }
    .card-holder {
        width: 75%;
        text-align: center;
        transform: translateY(-3rem);
    }
    .card {
        /* Add shadows to create the "card" effect */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        margin: 0 1rem;
        @media (max-width: 768px) {
            margin: 1rem 0;
        }
    }

    /* On mouse-over, add a deeper shadow */
    .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Add some padding inside the card container */
    .container {
    padding: 2px 16px;
    }

    .error {
        color: red;
    }

    .scrollbar-morpheus-den {
      scrollbar-color: #330867 #f5f5f5;
    }
    
    .scrollbar-morpheus-den::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #F5F5F5;
    border-radius: 10px; }
    
    .scrollbar-morpheus-den::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5; }
    
    .scrollbar-morpheus-den::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-image: -webkit-gradient(linear, left bottom, left top, from(#30cfd0), to(#330867));
    background-image: -webkit-linear-gradient(bottom, #30cfd0 0%, #330867 100%);
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); }
    
  }
`;
export default GlobalStyles;
