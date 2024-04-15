import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMobileState,
  changeScreenWidth,
  selectCurrentPage,
  selectDisplay,
  selectFetchStatus,
  selectFirstPage,
  selectLastPage,
  selectMobile,
  selectScreenWidth
} from "./features/pageState/pageStateSlice";
import {
  selectGenres,
  selectMovieDetailsContent,
  selectMovieDetailsCredits,
  selectPopularMovies
} from "./features/movies/moviesSlice";
import { useTheme } from "styled-components";

export const useShowData = () => {
  const theme = useTheme();
  const display = useSelector(selectDisplay);
  const popularMovies = useSelector(selectPopularMovies);
  const movieDetailsContent = useSelector(selectMovieDetailsContent);
  const movieDetailsCredits = useSelector(selectMovieDetailsCredits);
  const genres = useSelector(selectGenres);
  const fetchStatus = useSelector(selectFetchStatus);
  const firstPage = useSelector(selectFirstPage);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectLastPage);
  const screenWidth = useSelector(selectScreenWidth);
  const mobile = useSelector(selectMobile);
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

  console.log("display: ", display);
  console.log("popularMovies: ", popularMovies);
  console.log("movieDetailsContent: ", movieDetailsContent);
  console.log("movieDetailsCredits: ", movieDetailsCredits);
  console.log("genres: ", genres);
  console.log("fetchStatus: ", fetchStatus);
  console.log(
    "firstPage: ",
    firstPage,
    "currentPage :",
    currentPage,
    "lastPage :",
    lastPage
  );
  console.log("screenWidth: ", screenWidth);
  console.log("mobile: ", mobile);
};