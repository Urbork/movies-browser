import { Section } from "../Section";
import { LoadingWrapper, LoadingHeading, StyledLoadingIcon } from "./styled";

export const LoadingPage = () => {
  return (
    <Section title="Searching for /search query/">
      <StyledLoadingIcon />
    </Section>
  );
};
