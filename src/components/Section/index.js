import { SectionWrapper, SectionHeading } from "./styled";

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
