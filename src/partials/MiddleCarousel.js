import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

const MiddleCarousel = () => {
  const slider = useRef(null);
  console.log("slider", slider);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="middle-carousel-section  py-5">
        <Container>
          <Row>
            <Col className="px-0">
              <div>
                <div className="d-flex align-items-center justify-content-between mr-3 ml-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className=" ml-0 pl-0">Articles &</h5>
                    <h5>Videos</h5>
                  </div>

                  <div className="d-flex align-items-center">
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
                </div>

                <Slider ref={slider} {...settings}>
                  {Array.from({ length: 6 }).map((e, i) => (
                    <div key={i} className="overflow-hidden">
                      <div className="m-3">
                        <img
                          src={"https://picsum.photos/1024/768?random=" + i}
                          alt="deneme"
                          className="w-100"
                        />
                        <div className="play-button">
                          <PlayArrowOutlinedIcon className="play-arrow" />
                        </div>

                        <div className="mt-2 ">
                          <h6>Red Velvet Cakes</h6>
                          <p className="text-secondary desc-text">
                            Beşyüz yıl boyunca varlığını sürdürmek kalmaz,
                            devamı...
                          </p>
                        </div>

                        <div className="d-flex align-items-center justify-content-between text-muted ">
                          <div className="d-flex small-desc-title">
                            <img
                              className="rounded-circle small-description-image"
                              src={"https://picsum.photos/1024/768?random=" + i}
                              alt="profile"
                            />
                            <p>Huskar</p>
                          </div>
                          <div className="d-flex small-desc-title">
                            <AccessTimeIcon />
                            <p className="mr-3">20 Dec 2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MiddleCarousel;
