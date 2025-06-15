import Image from "next/image"

export default function AboutView(){
    return(
        <div className="flex justify-center items-center gap-2 h-screen w-[70%] mx-auto">
            <div className="w-[200px] h-[200px] flex justify-center items-center overflow-hidden rounded-full border-4 border-fuchsia-500 p-2">
                <Image
                    className='object-cover scale-220 ml-6'
                    src='/me.jpg' alt="logo" width={1000} height={1000}
                ></Image>
            </div>
            <Image
                    className='object-cover scale-220 ml-6'
                    src='/me.jpg' alt="logo" width={1000} height={1000}
                ></Image>
            <div className="w-1/2">
                <h1 className="montserrat text-fuchsia-500 py-5">Welcome. This is Landing View</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sint officia laudantium in incidunt animi exercitationem iure voluptates, repudiandae laborum quidem debitis, numquam illum consequuntur quasi minus omnis vero ea. Minima rerum error obcaecati. Voluptatum eaque accusantium hic adipisci recusandae, magnam architecto ipsum magni non excepturi molestiae enim quidem doloremque.</p>
            </div>
        </div>
    )
}