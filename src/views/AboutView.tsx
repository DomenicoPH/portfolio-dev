import Image from "next/image"

export default function AboutView() {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-10 h-screen w-[70%] mx-auto">

      <div className="w-[500px]">
        <h1 className="montserrat text-8xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-fuchsia-500 py-2">
          Sobre mí...
        </h1>

        <p className="montserrat text-lg text-justify leading-loose">
          Desarrollador Full Stack enfocado en Frontend. Experiencia en el desarrollo de aplicaciones web con HTML, CSS, JavaScript, TypeScript, React y Next.js. Conocimientos en backend con Node.js, Express y bases de datos PostgreSQL.
        </p>
      </div>

      
      <div className="sm:w-[350px] sm:h-[350px] rounded-full p-5 bg-gradient-to-br from-sky-500 to-fuchsia-500">
        <div className="w-full h-full rounded-full aspect-square bg-white flex border-8 border-black justify-center items-center overflow-hidden shadow-black/50 shadow-lg">
          <Image
            className="object-cover scale-[1.9] ml-12 grayscale"
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
