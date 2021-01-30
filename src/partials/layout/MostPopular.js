import React from "react";
import { Section } from "../content";
import { Nav, Tab, Col, Row } from "react-bootstrap";
import _ from "lodash";
import { PostCard } from "../content/PostCard";
import data from "../../dummyData/carouselData";

const MostPopular = () => {
  console.log("data", data);
  return (
    <>
      <Section className="mt-7">
        <Section.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="most-popular">
            <Nav
              bsPrefix="tabs-flat"
              className="tabs-flat-fluid tabs-flat-sm"
              variant="tabs"
            >
              <Nav.Item>
                <Nav.Link eventKey="most-popular">Most Popular</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="recent-news">Recent News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comments">Comments</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="py-5">
              <Tab.Pane eventKey="most-popular">
                {_.take(data, 5).map((entity, index) => {
                  return (
                    <Row className="pt-5" key={index}>
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
              </Tab.Pane>
              <Tab.Pane eventKey="recent-news">
                {_.take(data, 5).map((entity, index) => {
                  return (
                    <Row className="pt-5" key={index}>
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
              </Tab.Pane>
              <Tab.Pane eventKey="comments">
                {_.take(data, 5).map((entity, index) => {
                  return (
                    <Row className="pt-5" key={index}>
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
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Section.Body>
      </Section>
    </>
  );
};

export default MostPopular;
