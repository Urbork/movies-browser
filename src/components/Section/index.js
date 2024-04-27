import { SectionWrapper, SectionHeading } from "./styled";
import { useSelector } from "react-redux";
import { selectImagesToLoad } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Section = ({ title, mobile, children, noDisplay, show }) => {
  const imagesToLoad = useSelector(selectImagesToLoad);
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log("path", path)
  return (
    <SectionWrapper
      $noDisplay={noDisplay}
      $show={!imagesToLoad || show}
      $delay={path[1] === "movies" && path[2] === "details"}
      $mobile={mobile}>
      {title && <SectionHeading >{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
