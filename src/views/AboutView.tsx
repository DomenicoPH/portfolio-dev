import Image from "next/image"

export default function AboutView() {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-10 h-screen w-[70%] mx-auto">

      <div className="w-[500px]">
        <h1 className="montserrat text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-fuchsia-500 py-2">
          Sobre mí...
        </h1>

        <p className="montserrat text-lg text-justify leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sint
          officia laudantium in incidunt animi exercitationem iure voluptates,
          repudiandae laborum quidem debitis, numquam illum consequuntur quasi
          minus omnis vero ea. Minima rerum error obcaecati. Voluptatum eaque
          accusantium hic adipisci recusandae, magnam architecto ipsum magni non
          excepturi molestiae enim quidem doloremque.
        </p>
      </div>

      
      <div className="sm:w-[350px] sm:h-[350px] rounded-full p-5 bg-gradient-to-br from-green-400 to-fuchsia-500">
        <div className="w-full h-full rounded-full aspect-square bg-white flex justify-center items-center overflow-hidden shadow-black/50 shadow-lg">
          <Image
            className="object-cover scale-[1.8] ml-12"
            src="/gnomonopic.jpg"
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      </div>

    </div>
  )
}
