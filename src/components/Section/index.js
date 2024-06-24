import { SectionWrapper, SectionHeading } from "./styled";

export const Section = ({ title, mobile, children, show, delay }) => (
  <SectionWrapper $show={show} $delay={delay} $mobile={mobile}>
    {title && <SectionHeading>{title}</SectionHeading>}
    {children}
  </SectionWrapper>
);
