import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";

interface GameGridProps {
    gameQuery: GameQuery
}

const GameGrid = ({gameQuery}: GameGridProps) => {
    const {data: games, error, isLoading} = useGames(gameQuery)
    const skeletons = [1,2,3,4,5,6]

    if (error) return <Text>{error}</Text>
    return (
        <SimpleGrid
            columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
            }}
            padding='10px'
            spacing={6}
        >
            {isLoading && skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContainer>
            ))}
            {games.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;