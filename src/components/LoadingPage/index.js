import { Section } from "../Section";
import { StyledLoadingIcon } from "./styled";
import { useQueryParameter } from "../SearchInput/useQueryParameters";
import { searchInputParamName } from "../SearchInput/searchInputParamName";

export const LoadingPage = () => {
  const query = useQueryParameter(searchInputParamName);

  return (
    <Section title={query ? `Searching for "${query}"` : "Loading"}>
      <StyledLoadingIcon />
    </Section>
  );
};
