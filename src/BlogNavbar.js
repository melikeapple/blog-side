import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Col, Row, Container } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const BlogNavbar = () => {
  return (
    <div className="bs-navbar border border-bottom-light">
      <Container>
        <Row>
          <Col>
            <Navbar className="justify-content-between align-items-center w-100 px-0">
              <div>
                <Link
                  className="d-flex justify-content-between text-decoration-none"
                  to="/"
                >
                  <LanguageOutlinedIcon style={{ color: "grey" }} />
                  <div className="text-muted ml-1">BLOGSIDE</div>
                </Link>
              </div>

              <div className="w-50 d-flex justify-content-between">
                <Link
                  className="d-flex text-decoration-none text-muted"
                  to="/life"
                >
                  <div> LIFE</div>
                </Link>
                <Link
                  className="d-flex text-decoration-none text-muted"
                  to="/organic"
                >
                  <div>ORGANIC</div>
                  <KeyboardArrowDownIcon style={{ color: "grey" }} />
                </Link>
                <Link
                  className="d-flex text-decoration-none text-muted"
                  to="/features"
                >
                  <div>LIFE</div>
                  <KeyboardArrowDownIcon style={{ color: "grey" }} />
                </Link>
                <Link
                  className="d-flex text-decoration-none text-muted"
                  to="/sport"
                >
                  <div>SPORT</div>
                  <KeyboardArrowDownIcon style={{ color: "grey" }} />
                </Link>
                <Link
                  className="d-flex text-decoration-none text-muted"
                  to="/tech"
                >
                  <div>TECH</div>
                  <KeyboardArrowDownIcon style={{ color: "grey" }} />
                </Link>
                <Link
                  className="d-flex text-decoration-none text-muted"
                  to="/shop"
                >
                  <div>SHOP</div>
                  <KeyboardArrowDownIcon style={{ color: "grey" }} />
                </Link>
              </div>

              <div>
                <Link className="mr-2" to="/search">
                  <SearchIcon style={{ color: "grey" }} />
                </Link>
                <Link className="mr-2" to="/articles-list">
                  <BookmarkBorderIcon style={{ color: "grey" }} />
                </Link>
                <Link className="mr-2" to="/search">
                  <Image
                    className="border border-light"
                    src="https://picsum.photos/35/35?random=4"
                    roundedCircle
                  />
                </Link>
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BlogNavbar;
