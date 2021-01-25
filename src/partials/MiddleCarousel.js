import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import carouselData from "../dummyData/carouselData";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import { Section } from "./content";
import { PostCard } from "./content/PostCard";

const MiddleCarousel = () => {
  const data = carouselData;
  const slider = useRef(null);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="middle-carousel-section py-10">
        <Container>
          <Row>
            <Col>
              <Section>
                <Section.Header>
                  <h5>Articles & Videos</h5>
                  <div className="d-flex">
                    <div
                      className="left-button rounded mr-1"
                      onClick={() => slider.current.slickPrev()}
                    >
                      <ChevronLeftIcon style={{ fontSize: 18 }} />
                    </div>
                    <div
                      className="right-button rounded"
                      onClick={() => slider.current.slickNext()}
                    >
                      <ChevronRightIcon style={{ fontSize: 18 }} />
                    </div>
                  </div>
                </Section.Header>
                <Section.Body>
                  <Slider ref={slider} {...settings}>
                    {data && data.length === 6
                      ? data.map((e, i) => (
                          <PostCard className="ml-3 p-3 justify-content-between">
                            <PostCard.Image
                              src={e.img}
                              imgClass="w-100"
                              direction="top-right"
                            >
                              <div className="bg-light rounded-circle p-3 m-3">
                                <PlayArrowOutlinedIcon className="text-muted text-sm-center" />
                              </div>
                            </PostCard.Image>
                            <PostCard.Title>
                              <div className="text-md font-900 color-black ">
                                {e.title}
                              </div>
                              <div className="text-xs text-muted mt-1 mb-2">
                                {e.desc.substring(0, 60)}...
                              </div>
                            </PostCard.Title>
                            <PostCard.Desc
                              className="d-flex"
                              imgUrl={e.img}
                              author={e.author}
                              date={e.date}
                            />
                          </PostCard>
                        ))
                      : null}
                  </Slider>
                </Section.Body>
              </Section>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MiddleCarousel;
