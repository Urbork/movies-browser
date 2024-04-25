import { SectionWrapper, SectionHeading } from "./styled";
import { useSelector } from "react-redux";
import { selectImagesToLoad } from "../../features/pageState/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Section = ({ title, mobile, children, page }) => {
  const imagesToLoad = useSelector(selectImagesToLoad);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  console.log("title",title)
  console.log("page",page)
  console.log("mobile",mobile)
  console.log("children",children)


  return (
    <SectionWrapper $page={page} $show={!imagesToLoad} $delay={path === "movies"} $mobile={mobile}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
