import React from "react";
import { Card, Container } from "react-bootstrap";
import "../templates/news.css"
import Img1 from "../../images/blog-1.jpg";
import Img2 from "../../images/blog-2.jpg";
import Img3 from "../../images/blog-3.jpg";


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
              <Card className="news-cont">
                <Container className="news-img">
                  <image src={Img1}></image>
                </Container>
                <Container className="news-text">
                  <h2></h2>
                </Container>
              </Card>
              <Container className="news-cont">
                <Container className="news-img">
                  <image src={Img2}></image>
                </Container>
                <Container className="news-text">
                  <h2></h2>
                </Container>
              </Container>
              <Container className="news-cont">
                <Container className="news-img">
                  <image src={Img3}></image>
                </Container>
                <Container className="news-text">
                  <h2></h2>
                </Container>
              </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default News;
