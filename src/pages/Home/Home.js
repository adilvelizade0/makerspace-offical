import React from "react";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";
import Hero2 from "../../components/Hero2/hero2.component";
import { isMobile } from "react-device-detect";

function Home({ content }) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {!isMobile && <Hero2 />}

      <Gallery content={content} />
    </>
  );
}

export default Home;
