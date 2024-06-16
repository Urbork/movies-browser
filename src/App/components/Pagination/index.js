import { useSelector } from "react-redux";
import {
  Button,
  // , StyledNavLink
} from "./styled";
// import {
//   useHistory,
//   useLocation,
//   useParams,
// } from "react-router-dom/cjs/react-router-dom.min";
import {
  // searchInputParamName,
  searchPageParamName,
} from "../../utils/searchParamNames";
import {
  ButtonContainer,
  Wrapper,
  Number,
  PageNumberInfo,
  BackwardArrow,
  ForwardArrow,
  Content,
  AdditionalBackwardArrow,
  AdditionalForwardArrow,
} from "./styled";
import {
  selectCurrentMoviePage,
  // selectCurrentMoviePage,
  selectCurrentPage,
  selectCurrentPeoplePage,
  selectLastMoviePage,
  // selectFirstMoviePage,
  // selectFirstPeoplePage,
  // selectFirstSearchPage,
  // selectLastMoviePage,
  selectLastPage,
  selectLastPeoplePage,
  // selectLastPeoplePage,
  // selectLastSearchPage,
  // selectMoviePages,
  // selectMoviesQuery,
  // selectMoviesQueryToDisplay,
  // selectPeopleQuery,
  // selectPeopleQueryToDisplay,
  // setCurrentMoviePage,
} from "../../pageStateSlice";
// import { selectMoviesTotalPages } from "../../features/movies/moviesSlice";
// import { selectPeopleTotalPages } from "../../features/people/peopleSlice";
import {
  // useQueryParameter,
  useReplaceQueryParameter,
} from "../../utils/useQueryParameters";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useEffect } from "react";

export const Pagination = ({ noDisplay }) => {
  // const { page } = useParams();
  // const firstMoviePage = useSelector(selectFirstMoviePage);
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const lastMoviePage = useSelector(selectLastMoviePage);
  // const firstPeoplePage = useSelector(selectFirstPeoplePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const lastPeoplePage = useSelector(selectLastPeoplePage);
  // const firstSearchPage = useSelector(selectFirstSearchPage);
  // const lastSearchPage = useSelector(selectLastSearchPage);
  // const location = useLocation();
  // const pathName = location.pathname.split("/")[1];
  // let firstPage;
  // let lastPage;
  // let pageNumber = +page;
  // const moviesTotalPages = useSelector(selectMoviesTotalPages);
  // const peopleTotalPages = useSelector(selectPeopleTotalPages);
  // const moviesQueryToDisplay = useSelector(selectMoviesQueryToDisplay);
  // const PeopleQueryToDisplay = useSelector(selectPeopleQueryToDisplay);
  const replaceQueryParameter = useReplaceQueryParameter();
  // const history = useHistory();
  // const searchParams = new URLSearchParams(location.search);
  // const currentPage = useSelector(selectCurrentPage);
  // const lastPage = useSelector(selectLastPage);

  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  let currentPage;
  let lastPage;

  switch (pathName) {
    case "movies":
      currentPage = currentMoviePage;
      lastPage = lastMoviePage;

      break;
    case "people":
      currentPage = currentPeoplePage;
      lastPage = lastPeoplePage;
      break;
  }

  const onClickHandler = (page) => {
    replaceQueryParameter({
      key: searchPageParamName,
      value: page,
    });
  };

  // if (moviesQueryToDisplay || PeopleQueryToDisplay) {
  //   firstPage = firstSearchPage;
  //   if (pathName === "movies") {
  //     lastPage = moviesTotalPages ? moviesTotalPages : lastSearchPage;
  //   } else if (pathName === "people") {
  //     lastPage = peopleTotalPages ? peopleTotalPages : lastSearchPage;
  //   }
  // } else {
  //   if (pathName === "movies") {
  //     firstPage = firstMoviePage;
  //     lastPage = lastMoviePage;
  //   }
  //   if (pathName === "people") {
  //     firstPage = firstPeoplePage;
  //     lastPage = lastPeoplePage;
  //   }
  // }

  // const previousPage = pageNumber <= firstPage ? pageNumber : pageNumber - 1;
  // const nextPage = pageNumber >= lastPage ? pageNumber : pageNumber + 1;
  // const nextPage = +1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;
  // const moviesQuery = useSelector(selectMoviesQuery);
  // const peopleQuery = useSelector(selectPeopleQuery);

  // let queryPath;
  // if (moviesQuery && !peopleQuery) {
  //   queryPath = `?${searchInputParamName}=${moviesQuery}`;
  // } else if (!moviesQuery && peopleQuery) {
  //   queryPath = `?${searchInputParamName}=${peopleQuery}`;
  // } else {
  //   queryPath = "";
  // }

  return (
    <Wrapper $noDisplay={noDisplay}>
      <ButtonContainer>
        <Button onClick={() => onClickHandler(1)} disabled={isFirstPage}>
          <BackwardArrow disabled={isFirstPage} />
          <AdditionalBackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>First</Content>
        </Button>
        <Button
          onClick={() => onClickHandler(currentPage - 1)}
          disabled={isFirstPage}
        >
          <BackwardArrow disabled={isFirstPage} />
          <Content disabled={isFirstPage}>Previous</Content>
        </Button>
      </ButtonContainer>
      <PageNumberInfo>
        Page <Number>{currentPage}</Number> of <Number>{lastPage}</Number>
      </PageNumberInfo>
      <ButtonContainer>
        <Button
          onClick={() => onClickHandler(currentPage + 1)}
          disabled={isLastPage}
        >
          <Content disabled={isLastPage}>Next</Content>
          <ForwardArrow disabled={isLastPage} />
        </Button>
        <Button onClick={() => onClickHandler(lastPage)} disabled={isLastPage}>
          <Content disabled={isLastPage}>Last</Content>
          <AdditionalForwardArrow disabled={isLastPage} />
          <ForwardArrow disabled={isLastPage} />
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};
