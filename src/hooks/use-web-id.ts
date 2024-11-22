import { useParams } from "next/navigation";

import { Id } from "../../convex/_generated/dataModel";

export const useWebId = () => {
    const params = useParams()
    return params.webId = params.webId as Id<'courses'>
}