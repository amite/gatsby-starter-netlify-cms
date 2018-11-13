import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>
        Shaadi.com - The No.1 Site for Matrimony, Matrimonial, Shadi and Marriage</title>
      <meta name="keyword" content="matrimonial, matrimony, matrimonials, indian matrimonials, marriage, marriage sites, matchmaking, shaadi, shaadi.com, shadi" />
      <meta name="description" content="The World's No 1 Indian Matrimonial Website with over 5 million Marriages, Shaadi.com is trusted by over 35 million for Matrimony. To find Aadhaar Verified Profiles, Join Now!" />
      <meta property="og:title" content="Shaadi.com - The No.1 Site for Matrimony, Matrimonial, Shadi and Marriage" />
      <meta property="og:url" content="https://www.shaadi.com" />
      <meta property="og:description" content="The World's No 1 Indian Matrimonial Website with over 5 million Marriages, Shaadi.com is trusted by over 35 million for Matrimony. To find Aadhaar Verified Profiles, Join Now!" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
