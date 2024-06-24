import { useDispatch } from "react-redux";
import {
  ErrorWrapper,
  StyledErrorIcon,
  ErrorHeading,
  ErrorSubheading,
  ErrorNavLink,
} from "./styled";
import { backToHome } from "../../../features/pageStateSlice";
import { toMoviesPage } from "../../../utils/routes";

export const ErrorPage = () => {
  const dispatch = useDispatch();

  return (
    <ErrorWrapper>
      <StyledErrorIcon />
      <ErrorHeading>Ooops! Something went wrong…</ErrorHeading>
      <ErrorSubheading>
        <div>Please check your network connection</div>
        <div>and try again</div>
      </ErrorSubheading>
      <ErrorNavLink
        to={`${toMoviesPage({ page: 1 })}`}
        onClick={() => dispatch(backToHome())}
      >
        Back to home page
      </ErrorNavLink>
    </ErrorWrapper>
  );
};
