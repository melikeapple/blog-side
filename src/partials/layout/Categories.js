import React from "react";
import { Section } from "../content";
import { ListGroup } from "react-bootstrap";

const Categories = () => {
  return (
    <>
      <Section>
        <Section.Header>
          <h5>Categories</h5>
        </Section.Header>
        <Section.Body>
          <ListGroup className="d-flex">
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="text-muted text-md">Articles</div>
              <a href="" className="text-muted text-md text-decoration-none">
                (10)
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="text-muted text-md ">Tecnologies</div>
              <a href="" className="text-muted text-md text-decoration-none">
                (13)
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="text-muted text-md">Life</div>
              <a href="" className="text-muted text-md text-decoration-none">
                (18)
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="text-muted text-md">Travelling</div>
              <a href="" className="text-muted text-md text-decoration-none">
                (13)
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="text-muted text-md">Healty</div>
              <a href="" className="text-muted text-md text-decoration-none">
                (7)
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <div className="text-muted text-md">Packages</div>
              <a href="" className="text-muted text-md text-decoration-none">
                (7)
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Section.Body>
      </Section>
    </>
  );
};
export default Categories;
