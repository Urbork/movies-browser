import {
  ErrorWrapper,
  StyledErrorIcon,
  ErrorHeading,
  ErrorSubheading,
  ErrorButton,
} from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <StyledErrorIcon />
      <ErrorHeading>Ooops! Something went wrong...</ErrorHeading>
      <ErrorSubheading>
        Please check your network connection and try again
      </ErrorSubheading>
      <ErrorButton>Back to home page</ErrorButton>
    </ErrorWrapper>
  );
};
