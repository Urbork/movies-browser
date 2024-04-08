import { getCredits } from "../../../api/fetchApi";

export const usePeopleTile = (setPeopleDetails) => {
  const fetchApiPeopleDetails = async (id) => {
    const peopleDetails = await getCredits(id);
    setPeopleDetails(peopleDetails);
  }

  return {
    fetchApiPeopleDetails
  }
};