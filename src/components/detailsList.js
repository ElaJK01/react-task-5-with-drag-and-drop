import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import DetailElement from "./detailElement";
import { mapIndexed } from "../helpers";

const ContinentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsList = ({ list }) => {
  const [items, setItems] = useState(list);

  useEffect(() => setItems(list), [list]);

  const moveElement = useCallback((dragIndex, hoverIndex) => {
    setItems((prevItems) =>
      update(prevItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItems[dragIndex]],
        ],
      })
    );
  }, []);

  const renderElement = (element, index) => {
    return (
      <DetailElement
        element={element.tag}
        index={index}
        key={index}
        id={element.id}
        moveElement={moveElement}
      />
    );
  };

  return (
    <ContinentContainer>
      {items |> mapIndexed((item, index) => renderElement(item, index))}
    </ContinentContainer>
  );
};

export default DetailsList;