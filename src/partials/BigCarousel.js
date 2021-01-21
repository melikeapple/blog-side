import React, { useState } from "react";
import { Carousel, Image, Badge, Container, Row, Col } from "react-bootstrap";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import _ from "lodash";
import data from "../dummyData/carouselData";

const BigCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="carousel-section">
        <Container>
          <Row>
            <Col>
              <Carousel
                indicators={false}
                activeIndex={index}
                onSelect={handleSelect}
                nextIcon={
                  <div className="carousel-control-next-icon">
                    <NavigateNextIcon className="next-icon " />
                  </div>
                }
                prevIcon={
                  <div className="carousel-control-prev-icon">
                    <NavigateBeforeIcon className="prev-icon text-muted" />
                  </div>
                }
              >
                {_.chunk(data, 3).map((entity, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <div className="carousel-container">
                        {entity.map((v, i) => {
                          return (
                            <div className={`carousel-content-${i + 1}`}>
                              <Image
                                className="content-image"
                                src={v.img}
                                alt={v.title}
                              />
                              <div className="carousel-content-description">
                                <div>
                                  <Badge pill="true" variant="secondary">
                                    ARTICLE
                                  </Badge>
                                  <Badge pill="true" variant="secondary">
                                    READ
                                  </Badge>
                                </div>

                                <div>
                                  <h5 className="text-light">{v.title}</h5>
                                  <p className="text-light pt-1">{v.desc}</p>
                                </div>

                                <div className="description-container">
                                  <div className="description">
                                    <Image
                                      className="small-description-image"
                                      src={v.img}
                                      alt={v.title}
                                      roundedCircle
                                    />
                                    <div>
                                      <span>{v.author}</span>
                                    </div>
                                  </div>

                                  <div className="description">
                                    <AccessTimeIcon />
                                    <div>
                                      <span className="ml-1">
                                        13 December 21
                                      </span>
                                    </div>
                                  </div>

                                  <div className="description">
                                    <VisibilityTwoToneIcon />
                                    <div>
                                      <span className="ml-1">3</span>
                                    </div>
                                  </div>

                                  <div className="description">
                                    <ChatBubbleOutlineOutlinedIcon />
                                    <div>
                                      <span className="ml-1">13</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default BigCarousel;
