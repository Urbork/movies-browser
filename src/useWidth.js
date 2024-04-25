import { useDispatch, useSelector } from "react-redux";
import { changeMobileState, changeScreenWidth, selectMobile } from "./features/pageState/pageStateSlice";
import { useEffect } from "react";
import { useTheme } from "styled-components";

export const useWidth = () => {
  const theme = useTheme();

  // const display = useSelector(selectDisplay);
  // const fetchStatus = useSelector(selectFetchStatus);
  // const firstPage = useSelector(selectFirstPage);
  // const currentPage = useSelector(selectCurrentPage);
  // const lastPage = useSelector(selectLastPage);
  // const screenWidth = useSelector(selectScreenWidth);
  const mobile = useSelector(selectMobile);
  // const imagesToLoad = useSelector(selectImagesToLoad);

  // const popularMovies = useSelector(selectPopularMovies);
  // const genres = useSelector(selectGenres);
  // const movieDetails = useSelector(selectMovieDetails);
  // const movieDetailsId = useSelector(selectMovieDetailsId);
  // const movieDetailsContent = useSelector(selectMovieDetailsContent);
  // const movieDetailsCredits = useSelector(selectMovieDetailsCredits);

  // const popularPeople = useSelector(selectPopularPeople);
  // const person = useSelector(selectPerson);
  // const personId = useSelector(selectPersonId);
  // const personContent = useSelector(selectPersonContent);
  // const personMovieCredits = useSelector(selectPersonMovieCredits);

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

  console.log("mobile: ", mobile);
};