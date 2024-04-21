import { Section } from "../Section";
import { StyledNoResultsImage } from "./styled";
import { useQueryParameter } from "../SearchInput/useQueryParameters";
import { searchInputParamName } from "../SearchInput/searchInputParamName";

export const NoResultsPage = () => {
  const query = useQueryParameter(searchInputParamName);

  return (
    <Section title={`Sorry, there are no results for "${query}"`}>
      <StyledNoResultsImage />
    </Section>
  );
};
