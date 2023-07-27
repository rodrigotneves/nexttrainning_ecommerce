import { UserButton } from "@clerk/nextjs";

import { MainNav } from "@/components/ui/navbar/main-nav";
import StoreSwitcher from "@/components/ui/navbar/store-switch";

const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                
                <StoreSwitcher />
                
                <MainNav className="mx-6"/>
                
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSwitchSessionUrl="/" />
                </div>
                
            </div>
        </div>        
    );
}

export default Navbar;