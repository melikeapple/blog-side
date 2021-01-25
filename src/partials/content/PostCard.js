import React from "react";
import classNames from "classnames";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const PostCard = ({ direction, className, children }) => {
  return (
    <div
      className={classNames(`postcard flex-direction-${direction}`, className)}
    >
      {children}
    </div>
  );
};

const Categories = ({}) => {
  return null;
};

const Title = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const Image = ({
  children,
  src,
  className,
  imgClass,
  innerClass,
  direction,
}) => {
  return (
    <div className={classNames("position-relative", className)}>
      <img src={src} alt="" className={classNames("", imgClass)} />
      {children && (
        <div
          className={classNames("postcard-img-inner p-3", innerClass, {
            "position-top": direction === "top",
            "position-top-right": direction === "top-right",
            "position-bottom": direction === "bottom",
            "position-bottom-right": direction === "bottom-right",
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Desc = ({ imgUrl, date, author, className }) => {
  return (
    <div className={classNames("postcard-desc", className)}>
      <div className="d-flex align-items-center p-1">
        <img
          src={imgUrl}
          alt=""
          className="postcard-author-img rounded-circle mr-2 "
        />
        <div className="text-xs mr-4  text-muted font-500">{author}</div>
      </div>
      <div className="d-flex align-items-center font-500">
        <AccessTimeIcon className="text-xs mr-3 text-muted font-500" />
        <div className="text-xxs text-muted font-500">{date}</div>
      </div>
    </div>
  );
};

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

PostCard.Categories = Categories;
PostCard.Title = Title;
PostCard.Desc = Desc;
PostCard.Image = Image;
PostCard.Footer = Footer;

export { PostCard };
