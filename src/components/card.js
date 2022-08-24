import React from "react";
import styled from "styled-components";
import CardButton from "./cardButton";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  box-sizing: border-box;
  flex-basis: 30%;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-basis: 80%;
    width: 100%;
    margin: 5px;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    flex-basis: 30%;
  }

  @media screen and (min-width: 1201px) {
    flex-basis: 30%;
    margin: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const CardContent = styled.div`
  padding: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 5px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex: 3;
  }

  @media screen and (min-width: 1201px) {
    flex: 2;
  }
`;

const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  > img {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 60%;
    flex: 1;
  }
  @media screen and (min-width: 1201px) {
    width: 60%;
    flex: 1;
  }
`;

const CardTitle = styled.h4`
  margin: 0.5em;
  padding: 0;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 10px;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1rem;
  }
`;

const CardParagraph = styled.p`
  font-size: 10px;
`;

const Card = ({ img, link }) => (
  <CardContainer>
    <ImgContainer>
      <Img src={img} alt="alt-foto" />
    </ImgContainer>
    <CardContent>
      <CardTitle>Consectetur adipiscing elit</CardTitle>
      <CardParagraph>Dignissim diam quis enim lobortis</CardParagraph>
      <CardButton to={link} />
    </CardContent>
  </CardContainer>
);

export default Card;
