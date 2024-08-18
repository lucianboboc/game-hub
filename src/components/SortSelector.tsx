
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

const items = ['Relevance', 'Date Added', 'Name', 'Release Date', 'Popularity', 'Average Rating']

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                {items.map(test => (
                    <MenuItem
                        key={test}
                    >{test}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;