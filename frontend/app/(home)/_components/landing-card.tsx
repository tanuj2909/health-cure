import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export const LandingCard = async () => {

    const user = await currentUser();

    return ( 
        <div className="w-[600px] ">
            <Card className="border-[#745d3e] border-[3px] bg-[#d6e6c5]">
                <CardHeader>
                    <CardTitle>
                        <Logo />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Welcome to HealthCure, your trusted partner in achieving a healthier lifestyle with AI-powered health advice. Our cutting-edge technology provides personalized recommendations based on your unique health profile. Get tailored tips on diet, fitness, mental well-being, and more all backed by expert insights.</p>
                </CardContent>
                <CardFooter className="flex justify-start gap-x-10">
                    {!user && (
                        <>
                            <SignInButton>
                                <Button variant={"green"}>
                                    Sign in
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button variant={"green"}>
                                    Register
                                </Button>
                            </SignUpButton>
                        </>
                    )}
                    {!!user && (
                        <Button
                            variant={"green"}
                            className="text-muted-foreground hover:text-primary"
                            asChild
                        >
                            <Link href={`/dashboard`}>
                                <span>
                                    Dashboard
                                </span>
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
     );
}
 