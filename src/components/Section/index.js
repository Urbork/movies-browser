import { SectionWrapper, SectionHeading } from "./styled";
import { useSelector } from "react-redux";
import { selectImagesToLoad } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Section = ({ title, mobile, children, noDisplay, show }) => {
  const imagesToLoad = useSelector(selectImagesToLoad);
  const location = useLocation();
  const pathNames = location.pathname.split("/");

  return (
    <SectionWrapper
      $noDisplay={noDisplay}
      $show={!imagesToLoad || show}
      $delay={pathNames[1] === "movies" && pathNames[2] === "details"}
      $mobile={mobile}>
      {title && <SectionHeading >{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
