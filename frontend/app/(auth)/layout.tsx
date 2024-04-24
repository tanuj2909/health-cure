import { Logo } from "@/components/logo";

const AuthLayout = ({ children } : { children: React.ReactNode }) => {
    return <div className="flex flex-col justify-center items-center h-full bg-home">
        <Logo />
        {children}
    </div>;
}
 
export default AuthLayout;