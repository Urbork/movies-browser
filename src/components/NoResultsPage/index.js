import { Section } from "../Section";
import {
  NoResultHeading,
  NoResultWrapper,
  StyledNoResultImage,
} from "./styled";

export const NoResultPage = () => {
  return (
    <Section title="Sorry, there are no results for /search query/">
      <StyledNoResultImage />
    </Section>
  );
};
