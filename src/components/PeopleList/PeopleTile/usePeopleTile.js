import { getPopularPeopleApi } from "../../../api/fetchApi";

export const usePeopleTile = (setPeopleDetails) => {
  const fetchApiPeopleDetails = async (id) => {
    const peopleDetails = await getPopularPeopleApi(id);
    setPeopleDetails(peopleDetails);
  }

  return {
    fetchApiPeopleDetails
  }
};