import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMobileState,
  changeScreenWidth,
  selectCurrentPage,
  selectDisplay,
  selectFetchStatus,
  selectFirstPage,
  selectImagesToLoad,
  selectLastPage,
  selectMobile,
  selectScreenWidth
} from "./features/pageState/pageStateSlice";
import {
  selectGenres,
  selectMovieDetails,
  selectMovieDetailsContent,
  selectMovieDetailsCredits,
  selectMovieDetailsId,
  selectPopularMovies
} from "./features/movies/moviesSlice";
import { useTheme } from "styled-components";
import { selectPerson, selectPersonContent, selectPersonId, selectPersonMovieCredits, selectPopularPeople } from "./features/people/peopleSlice";

export const useShowData = () => {
  const theme = useTheme();

  const display = useSelector(selectDisplay);
  const fetchStatus = useSelector(selectFetchStatus);
  // const firstPage = useSelector(selectFirstPage);
  // const currentPage = useSelector(selectCurrentPage);
  // const lastPage = useSelector(selectLastPage);
  const screenWidth = useSelector(selectScreenWidth);
  const mobile = useSelector(selectMobile);
  const imagesToLoad = useSelector(selectImagesToLoad);

  const popularMovies = useSelector(selectPopularMovies);
  const genres = useSelector(selectGenres);
  const movieDetails = useSelector(selectMovieDetails);
  const movieDetailsId = useSelector(selectMovieDetailsId);
  const movieDetailsContent = useSelector(selectMovieDetailsContent);
  const movieDetailsCredits = useSelector(selectMovieDetailsCredits);

  const popularPeople = useSelector(selectPopularPeople);
  const person = useSelector(selectPerson);
  const personId = useSelector(selectPersonId);
  const personContent = useSelector(selectPersonContent);
  const personMovieCredits = useSelector(selectPersonMovieCredits);

  const dispatch = useDispatch();

  useEffect(() => {
    const mobileBreakpointNumber = parseInt(theme.breakpoint.small);
    const setMobileState = () => changeMobileState(mobileBreakpointNumber)
    const changeWidth = () => changeScreenWidth(window.innerWidth);
    const resize = window.addEventListener('resize', () => dispatch(changeWidth()));
    dispatch(setMobileState());

    return () => resize;

    // eslint-disable-next-line
  }, [window.innerWidth]);
  console.log("PAGE STATE  -----> ");
  console.log("display: ", display);
  console.log("fetchStatus: ", fetchStatus);
  // console.log(
  //   "firstPage: ",
  //   firstPage,
  //   "currentPage :",
  //   currentPage,
  //   "lastPage :",
  //   lastPage
  // );
  console.log("screenWidth: ", screenWidth);
  console.log("mobile: ", mobile);
  console.log("imagesToLoad: ", imagesToLoad);
  console.log("MOVIES  -----> ");
  console.log("popularMovies: ", popularMovies);
  console.log("genres: ", genres);
  console.log("movieDetails: ", movieDetails);
  console.log("movieDetailsId: ", movieDetailsId);
  console.log("movieDetailsContent: ", movieDetailsContent);
  console.log("movieDetailsCredits: ", movieDetailsCredits);
  console.log("PEOPLE  -----> ");
  console.log("popularPeople: ", popularPeople);
  console.log("person: ", person);
  console.log("personId: ", personId);
  console.log("personContent: ", personContent);
  console.log("personMovieCredits: ", personMovieCredits);
};