import React from "react";
import { map, prop } from "ramda";
import styled from "styled-components";
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

const LanguagesList = ({ list }) => (
  <ListRoot>
    {list
      |> map((el) => (
        <Card
          key={prop("code", el)}
          title={prop("name", el)}
          content={
            <div>
              <p>
                Code:
                {prop("code", el)}
              </p>
            </div>
          }
          link={`/languages/${prop("code", el)}`}
          color="lightseagreen"
        />
      ))}
  </ListRoot>
);

export default LanguagesList;
