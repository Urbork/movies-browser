import { Section } from "../Section";
import { StyledNoResultsImage } from "./styled";

export const NoResultsPage = () => {
  return (
    <Section title="Sorry, there are no results for /search query/">
      <StyledNoResultsImage />
    </Section>
  );
};
