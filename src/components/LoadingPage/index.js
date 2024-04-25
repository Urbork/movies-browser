import { Section } from "../Section";
import { StyledLoadingIcon } from "./styled";

export const LoadingPage = ({title , page}) => {
  return (
    <Section page={page} title={title}>
      <StyledLoadingIcon />
    </Section>
  );
};
