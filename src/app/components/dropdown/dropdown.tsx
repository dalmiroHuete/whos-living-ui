'use client';

import {
    Box,
    Input,
    List,
    ListItem,
    Text,

} from '@chakra-ui/react';
import {useState} from 'react';
import {
    dropdownListBoxStyle,
    dropdownListItemStyle,
    mainDropdownBoxStyle,
    mainDropdownStyle
} from "@/app/components/dropdown/style";
import {DROPDOWN_DEFAULT_LABEL} from "@/app/utils/constants/constants";

export interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownSelectProps {
    options: DropdownOption[];
    onChange: (value: string) => void;
}

const Dropdown = ({options, onChange}: DropdownSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<DropdownOption | null>(null);

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (option: DropdownOption) => {
        setSelected(option);
        onChange(option.value);
        setIsOpen(false);
        setSearch('');
    };

    return (

            <Box {...mainDropdownStyle}>
                <Box
                    {...mainDropdownBoxStyle}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Text>{selected ? selected.label : DROPDOWN_DEFAULT_LABEL}</Text>
                </Box>

                {isOpen && (
                    <Box
                        {...dropdownListBoxStyle}
                    >
                        <List spacing={0}>
                            <ListItem px={3} py={2}>
                                <Input
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </ListItem>

                            {filteredOptions.map((option) => (
                                <ListItem
                                    key={option.value}
                                    {...dropdownListItemStyle}
                                    backgroundColor={
                                        selected?.value === option.value ? '#0d6efd' : 'transparent'
                                    }
                                    color={
                                        selected?.value === option.value ? 'white' : 'inherit'
                                    }
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </ListItem>
                            ))}

                            {filteredOptions.length === 0 && (
                                <ListItem px={3} py={2} color="gray.500">
                                    No results found
                                </ListItem>
                            )}
                        </List>
                    </Box>
                )}
            </Box>

    );
};

export default Dropdown;
