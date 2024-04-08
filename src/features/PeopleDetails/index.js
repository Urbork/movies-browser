import { Details } from "../../components/Details";

export const PeopleDetails = ({ credits, id }) => {
    console.log(credits);

    return (
        <Details
            imageURL="http://image.tmdb.org/t/p/h632"
            poster={credits?.profile_path}
            /* title={movieDetails?.title}
            subtitle={movieDetails?.release_date?.split("-")[0]}
            detailsExtraInfoTitle="Production:"
            detailsExtraInfo={movieDetails?.production_countries.map((country, index) => (
                <span key={index}>{country.name}</span>
            ))}
            detailsDateInfoTitle="Release date: "
            detailsDateInfo={movieDetails?.release_date}
            tags={movieDetails?.genres}
            rating={movieDetails?.vote_average}
            votes={movieDetails?.vote_count}
            description={movieDetails?.overview} */
            castHeading="Cast"
            castContent="Movie cast here"
            crewHeading="Crew"
            crewContent="Movie crew here"
        />
    )
};
