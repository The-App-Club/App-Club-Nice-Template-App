import styled, { css } from "styled-components";

const myHeadingCssStyleText = (props) => {
  switch (props.messageType) {
    case "primary":
      return css`
        color: black;
        background-color: cadetblue;
      `;
    case "info":
      return css`
        color: black;
        background-color: wheat;
      `;
    case "error":
      return css`
        color: black;
        background-color: rosybrown;
      `;
    default:
      return css`
        color: black;
        background-color: cadetblue;
      `;
  }
};

const StyledMyHeading = styled.h1`
  font-family: "Times New Roman", Times, serif;
  ${myHeadingCssStyleText};
`;

export default StyledMyHeading;
