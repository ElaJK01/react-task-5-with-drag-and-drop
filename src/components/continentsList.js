import React, { useState } from "react";
import { map, prop } from "ramda";
import styled from "styled-components";
import { useDrop } from "react-dnd";
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
  const [listOrder, setListOrder] = useState([]);

  console.log('list', list, 'listorder', listOrder)

  const changeItemPlace = (id) => {
    const itemList = list.filter((item) => id === item.code);
    console.log("itemlist", itemList);
    setListOrder((listOrder) => [...listOrder, itemList[0]]);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => changeItemPlace(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));


  return (<div><ListRoot>
      {list
        |> map((el) => (
        <Card key={prop("code", el)}
              color={"lightgreen"}
              title={prop("name", el)}
              content={<p>
                Code:
                {prop("code", el)}
              </p>}
              link={`/continents/${prop("code", el)}`}
              id={prop("code", el)}
            />

      ))}
    </ListRoot>
      <div ref={drop} style={{display: 'flex', height: 500, border: "solid black 1px" }}>{listOrder
        |> map((el) => (
            <Card
              key={prop("code", el)}
              color={"lightgreen"}
              title={prop("name", el)}
              content={
                <p>
                  Code:
                  {prop("code", el)}
                </p>
              }
              link={`/continents/${prop("code", el)}`}
              id={prop("code", el)}
            />

      ))}</div>
    </div>
  );
};

export default ContinentsList;
