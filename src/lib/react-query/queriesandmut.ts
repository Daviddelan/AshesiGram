import{ 
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from '@tanstack/react-query'
import { createPost, createUserAccount } from '@/lib/appwrite/api'
import { login } from '@/lib/appwrite/api'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export type postDetails = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
}


// export const useCreatePost: any() => {
//     const queryClient = useQueryClient()

//     return useMutation({
//         mutationFn: (post:postDetails) => createPost(post),
//         onSuccess: () => {
//             queryClient.invalidateQueries({
//                 queryKey: [getRecentPosts]
//             })
//         }
//     })
// }
