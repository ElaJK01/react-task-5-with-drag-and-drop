import React, { useRef } from "react";
import styled from "styled-components";
import CardButton from "./cardButton";
import { useDrag, useDrop } from "react-dnd";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  box-sizing: border-box;
  flex-basis: 30%;
  align-items: center;
  justify-content: center;


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
  margin-right: 10px;
  margin-left: 10px;
  background-color: whitesmoke;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex: 3;
  }

  @media screen and (min-width: 1201px) {
    flex: 2;
  }
`;

const ImgContainer = styled.div`
  margin: 10px;
  width: 200px;
  height: 200px;
  background: ${({ color, img }) => (color && !img ? color : !img && !color ? "pink" : img)};
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

const Card = ({ img, link, color, content, title, id }) => {

  console.log('id', id)
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => ({ id }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });


  return (
    <CardContainer ref={drag}>
      <ImgContainer color={color} img={img} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {content}
        <CardButton to={link} />
      </CardContent>
    </CardContainer>
  );
};

export default Card;
