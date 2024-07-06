import { Section } from "../../Section";
import { StyledNoResultsImage } from "./styled";

export const NoResultsPage = ({ query, show }) => {
  return (
    <Section title={`Sorry, there are no results for “${query}”`} show={show}>
      <StyledNoResultsImage />
    </Section>
  );
};
