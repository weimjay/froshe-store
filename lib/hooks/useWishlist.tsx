import {auth} from "@clerk/nextjs";
import {getUser} from "@/lib/actions/actions";

const useWishlist = async () => {
    const { userId } = auth();

    if (userId) {
        const data =  await getUser(userId);
        return data?.wishlist;
    }
    return [];
}

export default useWishlist;