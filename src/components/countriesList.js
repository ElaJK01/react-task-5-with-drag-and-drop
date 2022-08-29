import React from "react";
import { map, prop } from "ramda";
import styled from "styled-components";
import Card from "./card";

const ListContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const CountriesList = ({ list }) => {

  return (
    <ListContainer>
      {list
        |> map((country) => (
          <Card
            key={prop("code", country)}
            title={prop("name", country)}
            content={
              <div>
                <h4>Data</h4>
                <ul style={{ listStyleType: "none" }}>
                  <li>Code: {prop("code", country)}</li>
                  <li>Currency: {prop("currency", country)}</li>
                  <li>
                    Languages:{" "}
                    <ul style={{ listStyleType: "none" }}>
                      {prop("languages", country)
                        |> map((lang) => (
                          <li key={prop("code", lang)}>{prop("name", lang)}</li>
                        ))}
                    </ul>
                  </li>
                  <li>Emoji: {prop("emoji", country)}</li>
                  <li>Capital: {prop("capital", country)}</li>
                </ul>
              </div>
            }
            link={`/countries/${prop("code", country)}`}
            color="yellow"
          />
        ))}
    </ListContainer>
  );
};

export default CountriesList;
