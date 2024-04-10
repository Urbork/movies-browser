import { getPopularPeople, getPopularPeopleApi } from "../../../api/fetchApi";

export const usePeopleTile = (setPeopleDetails) => {
  const fetchApiPeopleDetails = async (id) => {
    const peopleDetails = await getPopularPeople(id);
    setPeopleDetails(peopleDetails);
  }

  return {
    fetchApiPeopleDetails
  }
};