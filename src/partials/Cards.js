import React, { useState, useEffect } from "react";
import { useMediaQueries } from "@react-hook/media-query";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

import { Section } from "./content";
import carouselData from "../dummyData/carouselData";
import { PostCard } from "./content/PostCard";
import { SocialButton } from "./content/SocialButton";

const Cards = () => {
  const data = carouselData;
  const { matches } = useMediaQueries({
    screen: "screen",
    width: "(min-width: 576px)",
  });
  const [oneData, setOneData] = useState([]);
  const [multiData, setMultiData] = useState([]);

  const initData = () => {
    setOneData(data.filter((a, b) => b === 0));
    setMultiData(data.filter((a, b) => b > 0));
  };

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    if (matches.width) {
      initData();
    } else {
      setOneData([]);
      setMultiData(data);
    }
  }, [matches]);
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Section>
              <Section.Header>
                <h5>Most Views</h5>
              </Section.Header>
              <Section.Body>
                <Row>
                  <Col md={6}>
                    {oneData && oneData.length > 0
                      ? oneData.map((entity, index) => (
                          <PostCard key={index} direction="row">
                            <PostCard.Image
                              src={entity.img}
                              imgClass="w-100"
                              direction="top"
                            >
                              {entity.categories.map((category, catIndex) => (
                                <Badge
                                  className="text-uppercase"
                                  key={catIndex}
                                  pill={true}
                                  variant="secondary"
                                >
                                  {category.name}
                                </Badge>
                              ))}
                            </PostCard.Image>
                            <PostCard.Title className="color-purple-500 mt-3 text-lg font-600">
                              {entity.title}
                            </PostCard.Title>
                            <PostCard.Desc
                              className="d-flex mt-3"
                              imgUrl={entity.img}
                              author={entity.author}
                              date={entity.date}
                            />
                            <PostCard.Footer>
                              <div className="pt-2 text-muted text-md">
                                {entity.desc}
                              </div>
                              <Button
                                variant="slateblue"
                                className="btn-flat mt-5 mb-4"
                              >
                                READ MORE
                              </Button>
                            </PostCard.Footer>
                          </PostCard>
                        ))
                      : null}
                  </Col>
                  <Col md={6}>
                    {multiData && multiData.length > 0
                      ? multiData.map((entity, index) => (
                          <PostCard
                            key={index}
                            className="d-flex pr-3 mr-4"
                            direction="column"
                          >
                            <PostCard.Image
                              src={entity.img}
                              imgClass="w-100"
                              direction="top"
                              className="postcard-md-img mr-3"
                            />

                            <div>
                              <PostCard.Title>{entity.title}</PostCard.Title>
                              <PostCard.Desc
                                imgUrl={entity.img}
                                author={entity.author}
                                date={entity.date}
                              />
                            </div>
                          </PostCard>
                        ))
                      : null}
                  </Col>
                </Row>
              </Section.Body>
            </Section>
          </Col>
          <Col md={4}>
            <Section>
              <Section.Header>
                <h5>Stay Connected</h5>
              </Section.Header>
              <Section.Body>
                <Row>
                  <Col xs={12} sm={6}>
                    <SocialButton
                      icon="facebook"
                      variant="primary"
                      block
                      title="99K"
                      subtitle="followers"
                    />
                    <SocialButton
                      icon="youtube"
                      variant="lightred"
                      block
                      title="99K"
                      subtitle="followers"
                    />
                    <SocialButton
                      icon="apple"
                      variant="teal"
                      block
                      title="99K"
                      subtitle="followers"
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <SocialButton
                      icon="twitter"
                      variant="info"
                      block
                      title="99K"
                      subtitle="followers"
                    />

                    <SocialButton
                      icon="redtwitter"
                      variant="danger"
                      block
                      title="99K"
                      subtitle="followers"
                    />
                    <SocialButton
                      icon="instagram"
                      variant="lightpurple"
                      block
                      title="99K"
                      subtitle="followers"
                    />
                  </Col>
                </Row>
                <Container>
                  <Row>
                    <Col>
                      <PostCard className="ml-5">
                        <PostCard.Image
                          direction="bottom-center"
                          className="p-0"
                          imgClass="postcard-lg-img"
                          src="https://picsum.photos/1024/768?random=2"
                        >
                          <PostCard.Footer>
                            <Button
                              variant="slateblue"
                              className="btn-flat text-sm"
                            >
                              PURCHASE NOW
                            </Button>
                          </PostCard.Footer>
                        </PostCard.Image>
                      </PostCard>
                    </Col>
                  </Row>
                </Container>
              </Section.Body>
            </Section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
