import { useEffect, useState } from "react";
import { Container, Wrapper, Header } from "./styled";
import PeopleTile from "./PeopleTile";
import { getCredits } from "../../api/fetchApi";
import { profileSmallSizeUrl } from "../../api/api";

const PeopleList = () => {
    const [credits, setCredits] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const credits = await getCredits();
            setCredits(credits);
        };

        fetchApi();
    }, []);

    return (
        <Container>
            <Header>Popular people</Header>
            <Wrapper>
                {
                    credits?.cast.map((actor) => (
                        <PeopleTile
                            poster={profileSmallSizeUrl + actor.profile_path}
                            name={actor.name}
                        />
                    ))
                }
            </Wrapper>
        </Container>
    )
};

export default PeopleList;