'use client';

import React, {FC} from "react";
import {usePeopleQuery} from "@/app/api-hooks/queries/use-people-query";
import Dropdown from "@/app/components/dropdown/dropdown";
import {Box, Heading, Highlight} from "@chakra-ui/react";
import {homeBoxContainerStyle} from "@/app/home/style";
import {DestructButton} from "@/app/components/destruct-button/destruct-button";

const HomePage: FC = () => {
    const {data, error} = usePeopleQuery();

    // here is the onchange event
    const handleChange = (value: string) => {
        console.log("Selected ID:", value);
    };

    if (error) return <div>Something went wrong</div>;

    return (
        <Box {...homeBoxContainerStyle}>
            <Heading size="xl" textAlign="center" mb={4}>
                <Highlight
                    query="Dropdown Edition 👻"
                    styles={{px: 1, bg: "orange.100", color: "orange.600"}}
                >
                    Who’s Living Dropdown Edition 👻
                </Highlight>
            </Heading>
            <Dropdown options={data || []} onChange={handleChange}/>
            <DestructButton />
        </Box>
    );
};

export default HomePage;
