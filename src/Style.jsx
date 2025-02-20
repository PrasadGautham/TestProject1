import React from "react";
import styled from "styled-components";
import "./Style.css";
import classes from "./Style.module.css";
import "./Style.scss";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
const Div = styled.div`
  padding: 20px;
  border: solid;
`;
const Style = () => {
  return (
    <Div>
      Style
      <p className="external-css border">This s paragraph</p>
      <p
        style={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        This is styled by using inline styling
      </p>
      <p className="test-scss">This is from scss</p>
      <p className={`${classes.module} border ${classes.mm}`}>
        This is styled by using module css
      </p>
      <Title>This is from styld component</Title>
    </Div>
  );
};

export default Style;
