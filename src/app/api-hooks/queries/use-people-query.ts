import {useQuery} from "@tanstack/react-query";
import {PeopleDropdown} from "@/app/utils/types/People";
import {PeopleService} from "@/app/services/people-service";

export const usePeopleQuery = () => {
    const treeId = process.env.NEXT_PUBLIC_TREE_ID;
    return useQuery<PeopleDropdown[]>({
        queryKey: ['people', treeId],
        queryFn: PeopleService.fetchPeopleDropdown,
        enabled: !!treeId,
    })
}
