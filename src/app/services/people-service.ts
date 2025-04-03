import {PeopleDropdown} from "@/app/utils/types/People";

export const PeopleService = {
    fetchPeopleDropdown : async (): Promise<PeopleDropdown[]> => {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
        const treeId = process.env.NEXT_PUBLIC_TREE_ID;

        const response = await fetch(`${baseUrl}/people/${treeId}`, {
            headers: {
                'x-client-id': clientId!,
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching people dropdown')
        }

       return response.json();
    }
}


