import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
  const baseTitle = 'ApexBart Solutions';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Shakhzod 'Bart'" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO; 