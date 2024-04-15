import { useEffect, useState } from "react";
import { SectionWrapper, SectionHeading } from "./styled";

export const Section = ({ title, mobile, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper $show={show} $mobile={mobile}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
