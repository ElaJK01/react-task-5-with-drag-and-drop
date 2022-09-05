import React, { useCallback, useEffect, useRef, useState } from "react";
import { map, path, prop } from "ramda";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import Section from "../components/section";
import CONTINENT_QUERY from "../../API/gqlCalls/getContinent";
import withLoadingData from "../withLoadingData";
import { mapIndexed } from "../helpers";

const DetailElement = ({ element, index, moveElement, id }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "element",
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "element",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      key={index}
      style={{
        border: "1px solid blue",
        margin: 2,
        background: isDragging ? "pink" : "transparent",
      }}
      ref={ref}
    >
      {element}
    </div>
  );
};

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

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
  "        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus\n" +
  "        laoreet non curabitur gravida. Dignissim diam quis enim lobortis\n" +
  "        scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
  "        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
  "        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
  "        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n" +
  "        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
  "        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
  "        officia deserunt mollit anim id est laborum.";

const ContinentDetails = withLoadingData((props) => {
  const continentDetails = props |> path(["data", "continent"]);
  const countries = continentDetails |> path(["countries"]);

  const itemsList = [
    {
      id: 1,
      tag: <h3>{continentDetails.name}</h3>,
    },
    {
      id: 2,
      tag: <p>Code: {continentDetails.code}</p>,
    },
    {
      id: 3,
      tag: (
        <div style={{ fontSize: "10px" }}>
          Countries:{" "}
          <ul style={{ listStyle: "none" }}>
            {countries
              |> map((country) => (
                <li key={prop("code", country)}>{prop("name", country)}</li>
              ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Section title="Continent Details" text={text}>
      <DetailsList list={itemsList} />
    </Section>
  );
}, CONTINENT_QUERY);

export default ContinentDetails;
