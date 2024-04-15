import { useEffect, useState } from "react";
import { SectionWrapper, SectionHeading } from "./styled";
import { useSelector } from "react-redux";
import { selectFetchStatus } from "../../features/pageState/pageStateSlice";

export const Section = ({ title, mobile, children }) => {
  const [show, setShow] = useState(false);
  const fetchStatus = useSelector(selectFetchStatus);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchStatus === "ready" && setShow(false);
  }, [fetchStatus])

  return (
    <SectionWrapper $show={show} $mobile={mobile}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
