import { Section } from "../Section";
import { StyledNoResultsImage } from "./styled";

export const NoResultsPage = ({ query, noDisplay }) => {
  return (
    <Section title={`Sorry, there are no results for “${query}”`} noDisplay={noDisplay}>
      <StyledNoResultsImage />
    </Section>
  );
};
