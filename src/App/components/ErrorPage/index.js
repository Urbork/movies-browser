import { useDispatch, useSelector } from "react-redux";
import {
  ErrorWrapper,
  StyledErrorIcon,
  ErrorHeading,
  ErrorSubheading,
  ErrorNavLink,
} from "./styled";
import { backToHome, selectFirstMoviePage } from "../../pageStateSlice";
import { toMoviesPage } from "../../routes";

export const ErrorPage = () => {
  const firstMoviePage = useSelector(selectFirstMoviePage);
  const dispatch = useDispatch();

  return (
    <ErrorWrapper>
      <StyledErrorIcon />
      <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
      <ErrorSubheading>
        <div>Please check your network connection</div>
        <div>and try again</div>
      </ErrorSubheading>
      <ErrorNavLink to={`${toMoviesPage({ page: firstMoviePage })}`}
        onClick={() => dispatch(backToHome())} >
        Back to home page
      </ErrorNavLink>
    </ErrorWrapper>
  );
};
