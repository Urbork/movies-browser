import { Wrapper, Header } from "./styled";
import PeopleTile from "../PeopleTile";

const People = ({ poster, name, character }) => (
    <>
        <Header>Popular people</Header>
        <Wrapper>
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
            <PeopleTile
                poster={poster}
                name={name}
                character={character}
            />
        </Wrapper>
    </>
);

export default People;