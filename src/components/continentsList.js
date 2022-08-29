import React, { useCallback, useState } from "react";
import { addIndex, map } from "ramda";
import styled from "styled-components";
import update from "immutability-helper";
import Card from "./card";

const ListRoot = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ContinentsList = ({ list }) => {
  const [cards, setCards] = useState(list);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback(
    (card, index) => (
      <Card
        key={card.code}
        index={index}
        id={card.code}
        moveCard={moveCard}
        title={card.name}
        content={
          <p>
            Code:
            {card.code}
          </p>
        }
        link={`/continents/${card.code}`}
      />
    ),
    []
  );

  const mapIndexed = addIndex(map);

  return (
    <ListRoot>{cards |> mapIndexed((card, i) => renderCard(card, i))}</ListRoot>
  );
};

export default ContinentsList;
