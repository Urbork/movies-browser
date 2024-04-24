import { Section } from "../Section";
import { StyledLoadingIcon } from "./styled";

export const LoadingPage = ({title}) => {
  return (
    <Section title={title}>
      <StyledLoadingIcon />
    </Section>
  );
};
