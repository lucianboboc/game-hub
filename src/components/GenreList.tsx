
import useGenres from "../hooks/useGenres.ts";
import {HStack, List, ListItem, Image, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = () => {
    const { data: genres } = useGenres()

    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;