import React from "react";
import { Container } from "react-bootstrap";
import "../templates/news.css"
import ImgVirus from "../../images/blog-1.jpg";
import ImgTest from "../../images/blog-2.jpg";
import ImgMask from "../../images/blog-3.jpg";


function News() {
  return (
    <>
      <Container className="news">
        <Container className="row justify-content-center ">
          <Container className="col-xl-6">
              <Container className="news-title-cont section-title text-center justify-content-center">
                <h5 className="news-title">News</h5>
                <h2 className="news-subtitle">Latest News About Corona Virus</h2>
              </Container>  
              <Container>
                <image src={ImgVirus}></image>
                <image src={ImgTest}></image>
                <image src={ImgMask}></image>
              </Container>                        
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default News;
