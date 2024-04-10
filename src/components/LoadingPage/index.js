import { Section } from "../Section";
import { StyledLoadingIcon } from "./styled";

export const LoadingPage = () => {
  return (
    <Section title={"Searching for ... or Loading"}>
      <StyledLoadingIcon />
    </Section>
  );
};
