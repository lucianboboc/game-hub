
import useGenres, {Genre} from "../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Spinner, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface GenreListProps {
    selectedGenre: Genre | null
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({selectedGenre, onSelectGenre}: GenreListProps) => {
    const { data: genres, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            onClick={() => onSelectGenre(genre)}
                            fontSize='lg'
                            variant='link'
                        >{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;