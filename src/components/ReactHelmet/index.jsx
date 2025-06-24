import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = ({
  title = "United Web Developers",
  description = "This is the default description of the website.",
  keywords = "web, development, seo, react",
  url = "https://unitedwebdevelopers.com/",
  // image = "https://yourdomain.com/default-image.webp",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Helmet>
  );
};

export default ReactHelmet;
