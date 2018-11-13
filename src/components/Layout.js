import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet script={[{
          type: 'application/ld+json',
          innerHTML: JSON.stringify([{
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            'name': 'Shaadi.com',
            'url': 'https://www.shaadi.com',
          },{
              "@context": "https://schema.org",
              "@type": "Organization",
              "Name": "Shaadi.com",
              "URL": "https://www.shaadi.com",
              "contactPoint": [{
                  "@type": "ContactPoint",
                  "telephone": "+91 1860-200-3456",
                  "contactType": "Customer Service"
              }],
              "logo": "https://img2.shaadi.com/assests/2016/images/home-page-layer-logo.png",
              "sameAs": ["https://www.facebook.com/shaadicom", "https://twitter.com/shaadidotcom", "https://www.youtube.com/user/shaaditv", "https://www.linkedin.com/company/people-interactive"]
          }])
        }]}>
      <title>Shaadi.com - The No.1 Site for Matrimony, Matrimonial, Shadi and Marriage</title>
      <meta name="keyword" content="matrimonial, matrimony, matrimonials, indian matrimonials, marriage, marriage sites, matchmaking, shaadi, shaadi.com, shadi" />
      <meta name="description" content="The World's No 1 Indian Matrimonial Website with over 5 million Marriages, Shaadi.com is trusted by over 35 million for Matrimony. To find Aadhaar Verified Profiles, Join Now!" />
      <meta property="og:title" content="Shaadi.com - The No.1 Site for Matrimony, Matrimonial, Shadi and Marriage" />
      <meta property="og:url" content="https://www.shaadi.com" />
      <meta property="og:description" content="The World's No 1 Indian Matrimonial Website with over 5 million Marriages, Shaadi.com is trusted by over 35 million for Matrimony. To find Aadhaar Verified Profiles, Join Now!" />
      <link href="https://www.shaadi.com/favicon-16.png" rel="icon" type="image/png" />
      <link href="https://www.shaadi.com/favicon-32.png" rel="icon" type="image/png" />
      
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
