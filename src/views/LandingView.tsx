import Image from "next/image"

export default function LandingView(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <Image
                className='bg-fuchsia-500 rounded-full p-2'
                src='/gnomono.svg' alt="logo" width={500} height={500}
            ></Image>
            <h1 className="montserrat text-fuchsia-500 py-5">Welcome. This is Landing View</h1>
        </div>
    )
}