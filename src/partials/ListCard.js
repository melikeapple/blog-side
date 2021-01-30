import React from "react";
import { Container, Row, Col, ListGroup, Nav, Tab } from "react-bootstrap";
import LatestNews from "./layout/LatestNews";
import Categories from "./layout/Categories";
import MostPopular from "./layout/MostPopular";
import PopularVideos from "./layout/PopularVideos";

const ListCard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <LatestNews />
          </Col>
          <Col sm={4}>
            <Categories />
            <MostPopular />
            <PopularVideos />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListCard;
