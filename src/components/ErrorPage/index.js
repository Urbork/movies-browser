import {
  ErrorWrapper,
  StyledErrorIcon,
  ErrorHeading,
  ErrorSubheading,
  ErrorNavLink,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { resetFetchStatus, selectFirstMoviePage } from "../../features/pageState/pageStateSlice";
import { toMoviesList } from "../../routes";

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
      <ErrorNavLink to={`${toMoviesList({ page: firstMoviePage })}`} a
        onClick={() => dispatch(resetFetchStatus())} >
        Back to home page
      </ErrorNavLink>
    </ErrorWrapper>
  );
};
