import { SignUp } from "@clerk/nextjs";


export default function Page() {
    return (
        <>  
            <div className="fixed h-screen w-screen top-0 left-0 bottom-0 right-0 bg-black z-0 opacity-50"/>
            <div className="flex h-screen items-center justify-center animate-onLoadZoom">
                <SignUp/>
            </div>
        </>
    )
}