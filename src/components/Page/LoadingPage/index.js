import { Section } from "../../Section";
import { StyledLoadingIcon } from "./styled";

export const LoadingPage = ({ title }) => {
  return (
    <Section title={title} show={true}>
      <StyledLoadingIcon />
    </Section>
  );
};
