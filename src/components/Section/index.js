import { SectionWrapper, SectionHeading } from "./styled";
import { useSelector } from "react-redux";
import { selectImagesToLoad } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Section = ({ title, mobile, children }) => {
  const imagesToLoad = useSelector(selectImagesToLoad);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <SectionWrapper $show={!imagesToLoad} $delay={path === "movies"} $mobile={mobile}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
