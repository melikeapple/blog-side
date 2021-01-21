import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import { Section } from "./content";

const MiddleCarousel = () => {
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
                    {Array.from({ length: 6 }).map((e, i) => (
                      <div key={i} className="overflow-hidden pl-7">
                        <img
                          src={"https://picsum.photos/1024/768?random=" + i}
                          alt="deneme"
                          className="w-100"
                        />
                        <div className="d-flex flex-column mt-5">
                          <h6 className="mt-0">Red Velvet Cakes</h6>
                          <p className="text-secondary desc-text">
                            Beşyüz yıl boyunca varlığını sürdürmek kalmaz,
                            devamı...
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-start text-muted ">
                          <div className="d-flex small-desc-title">
                            <img
                              className="rounded-circle small-description-image mb-2"
                              src={"https://picsum.photos/1024/768?random=" + i}
                              alt="profile"
                            />
                            <p className="mt-2">Huskar</p>
                          </div>
                          <div className="d-flex small-desc-title ml-5">
                            <AccessTimeIcon
                              style={{ fontSize: 16 }}
                              className="mr-1 mt-2"
                            />
                            <p className="ml-2 mt-2">20 Dec 2021</p>
                          </div>
                        </div>
                        <div className="play-button">
                          <PlayArrowOutlinedIcon className="play-arrow" />
                        </div>
                      </div>
                    ))}
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
