import React from "react";
import { map, prop } from "ramda";
import styled from "styled-components";
import CardButton from "./cardButton";

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  box-sizing: border-box;
  flex-basis: 30%;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
`;

const CardTitle = styled.h4`
  margin: 0.5em;
  padding: 0;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: fit-content;
  background-color: yellow;
  font-size: 10px;
  padding: 0;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.cardText};
`;

const CountriesList = ({ list }) => (
  <ListContainer>
    {list
      |> map((country) => (
        <Card key={prop("code", country)}>
          <CardContent>
            <CardTitle> {prop("name", country)}</CardTitle>
            <CardInfo>
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
            </CardInfo>
            <CardButton to={`/countries/${prop("code", country)}`}>
              Details
            </CardButton>
          </CardContent>
        </Card>
      ))}
  </ListContainer>
);

export default CountriesList;
