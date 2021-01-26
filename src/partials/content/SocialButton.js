import React from "react";
import classNames from "classnames";
import { Button, InputGroup } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppleIcon from "@material-ui/icons/Apple";

const SocialButton = ({ className, variant, icon, title, subtitle, block }) => {
  return (
    <Button
      className={classNames("p-0 overflow-hidden", className)}
      variant={variant}
      block={block}
    >
      <InputGroup className="d-flex align-items-center">
        <InputGroup.Prepend>
          <InputGroup.Text className="bg-transparent border-0 position-relative ">
            {icon === "facebook" && (
              <FacebookIcon
                style={{
                  color: "white",
                }}
              />
            )}
            {icon === "twitter" && (
              <TwitterIcon
                style={{
                  color: "white",
                }}
              />
            )}
            {icon === "youtube" && (
              <YouTubeIcon
                style={{
                  color: "white",
                }}
              />
            )}{" "}
            {icon === "redtwitter" && (
              <TwitterIcon
                style={{
                  color: "white",
                }}
              />
            )}
            {icon === "apple" && (
              <AppleIcon
                style={{
                  color: "white",
                }}
              />
            )}
            {icon === "instagram" && (
              <InstagramIcon
                style={{
                  color: "white",
                }}
              />
            )}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <div className="flex-fill text-center text-sm text-light">
          <strong>{title}</strong> {subtitle}
        </div>
      </InputGroup>
    </Button>
  );
};
export { SocialButton };
