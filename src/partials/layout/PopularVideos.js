import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section } from "../content";
import { PostCard } from "../content/PostCard";
import _ from "lodash";
import data from "../../dummyData/carouselData";

const PopularVideos = () => {
  return (
    <>
      <Section>
        <Section.Header>
          <h5>Popular Videos</h5>
        </Section.Header>
        <Section.Body>
          <Row>
            <Col>
              <PostCard>
                <PostCard.Image
                  src="https://picsum.photos/1024/768?random=3"
                  imgClass="w-100"
                />
              </PostCard>
            </Col>
          </Row>
          {_.take(data, 6).map((entity, index) => {
            return (
              <Row className="pt-5 mt-5" key={index}>
                <Col sm={4} className="w-100 mb-5">
                  <PostCard.Image
                    className="w-100"
                    src={entity.img}
                    imgClass="w-100"
                  />
                </Col>
                <Col sm={8} className="w-100 mb-5 pl-0">
                  <PostCard.Title className="text-xs font-weight-500 mb-3">
                    {entity.title}
                  </PostCard.Title>
                  <PostCard.Desc badge="READ" date={entity.date} />
                </Col>
              </Row>
            );
          })}
        </Section.Body>
      </Section>
    </>
  );
};

export default PopularVideos;
