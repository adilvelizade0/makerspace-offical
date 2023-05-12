import styled from "styled-components";

const AboutWrapper = styled.div`
  background-color: aliceblue;
  position: relative;
  z-index: 0;
  padding-top: 98px;

  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 0;
  }

  .about-banner {
    background-color: aliceblue;
    position: relative;

    .about-banner-text {
      position: relative;
      z-index: 1;

      h1 {
        font-size: 3rem;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
      }

      p {
        color: #fff;
        line-height: 1.5rem;
      }

      .about-title-diff {
        color: #0cc9c3 !important;
      }

      .about-subtitle-diff {
        border-bottom: 1px solid #0cc9c3;

        padding-bottom: 7px;
        border-radius: 10px;
      }
    }
  }

  .about-service {
    color: #fff;

    .loadMore-btn {
      width: 160px;
      font-size: 18px;
      padding: 0.6rem 1rem;
      margin-top: 4rem;
      color: #fff;
      background: transparent;
      border: 1px solid #0cc9c3;
      border-radius: 5px;
      transition: 0.3s;
      z-index: 1;

      &:hover {
        background-color: #0cc9c3;
      }
    }
  }
`;

export default AboutWrapper;
