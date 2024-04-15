import { SectionWrapper, SectionHeading } from "./styled";
import { useSelector } from "react-redux";
import { selectDisplay, selectImagesToLoad } from "../../features/pageState/pageStateSlice";

export const Section = ({ title, mobile, children }) => {
  const imagesToLoad = useSelector(selectImagesToLoad);
  const display = useSelector(selectDisplay);

  return (
    <SectionWrapper $show={!imagesToLoad} $delay={display === "movieDetails"} $mobile={mobile}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </SectionWrapper>
  );
};
