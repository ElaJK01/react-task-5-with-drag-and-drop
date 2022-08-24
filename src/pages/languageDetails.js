import React from "react";
import { path } from "ramda";
import styled from "styled-components";
import Section from "../components/section";
import GET_LANG_INFO from "../../API/gqlCalls/getLanguageInfo";
import withLoadingData from "../withLoadingData";

const languageText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
  "        tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus\n" +
  "        laoreet non curabitur gravida. Dignissim diam quis enim lobortis\n" +
  "        scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
  "        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n" +
  "        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
  "        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n";

const LanguageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LanguageDetails = withLoadingData((props) => {
  const languageDetails = props |> path(["data", "language"]);

  const message = (
    <LanguageContainer>
      {languageDetails && (
        <div>
          <p>Language Name: {languageDetails.name}</p>
          <p>Code: {languageDetails.code}</p>
          <p>Native: {languageDetails.native}</p>
        </div>
      )}
    </LanguageContainer>
  );

  return (
    <Section title="Language Details" text={languageText}>
      {message}
    </Section>
  );
}, GET_LANG_INFO);

export default LanguageDetails;
