import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
const DashboardPage = async () => {

    const user = await currentUser()
    return ( 
        <div>
            {JSON.stringify(user)}
            <UserButton/>
        </div>
     );
}
 
export default DashboardPage;