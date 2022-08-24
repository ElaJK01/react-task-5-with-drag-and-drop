import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 150px;
  }
`;
const ImgHeader = ({ src, alt }) => <Img src={src} alt={alt} />;

export default ImgHeader;
