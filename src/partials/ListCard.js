import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Section } from "./content/section";
import carouselData from "../dummyData/carouselData";
import { PostCard } from "./content/PostCard";

const ListCard = () => {
  const data = carouselData;
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <Section>
              <Section.Header>Latest News</Section.Header>
              <Section.Body>
                {data && data.length > 0
                  ? data.map((entity, index) => (
                      <Row>
                        <Col className="w-100 mb-5" key={index}>
                          <PostCard.Image
                            className="mb-5"
                            direction="top"
                            src={entity.img}
                            imgClass="w-100"
                          >
                            {entity.categories.map((cat, i) => (
                              <Badge
                                pill={true}
                                className="text-light text-uppercase"
                              >
                                {cat.name}
                              </Badge>
                            ))}
                          </PostCard.Image>
                        </Col>
                        <Col className="w-100 mb-5">
                          <PostCard.Title className="color-purple-500 mb-3 text-lg font-600">
                            {entity.title}
                          </PostCard.Title>
                          <PostCard.Desc
                            imgUrl={entity.img}
                            author={entity.author}
                            date={entity.date}
                          />
                          <PostCard.Footer>
                            <div className="mb-3 mt-2 text-muted text-md">
                              {entity.desc.substring(0, 150) + `...`}
                            </div>
                            <Button
                              variant="slateblue"
                              className="btn-flat mt-5"
                            >
                              READ MORE
                            </Button>
                          </PostCard.Footer>
                        </Col>
                      </Row>
                    ))
                  : null}
              </Section.Body>
            </Section>
          </Col>
          <Col sm={4}>2.kısım</Col>
        </Row>
      </Container>
    </>
  );
};

export default ListCard;
