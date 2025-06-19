import Image from "next/image"
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiExpress, SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function AboutView() {
  return (
    <div className="flex flex-col justify-center gap-10 h-screen mx-auto bg-gradient-to-t from-fuchsia-500 to-black">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10">

        <div className="w-[500px]">
          <h1 className="roboto font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-fuchsia-500 py-2">
            Sobre mí...
          </h1>

          <p className="quicksand text-xl text-justify leading-loose text-fuchsia-500">
            Desarrollador Full Stack enfocado en Frontend. Experiencia en el desarrollo de aplicaciones web con HTML, CSS, JavaScript, TypeScript, React y Next.js. Conocimientos en backend con Node.js, Express y bases de datos PostgreSQL.
          </p>

        </div>


        <div className="sm:w-[500px] aspect-square rounded-full p-5 bg-gradient-to-br from-sky-500 to-fuchsia-500">
          <div className="w-full h-full rounded-full aspect-square bg-white flex border-16 border-black justify-center items-center overflow-hidden shadow-black/50 shadow-lg">
            <Image
              className="object-cover scale-[1.8] ml-15"
              src="/gnomonopic.jpg"
              alt="logo"
              width={1000}
              height={1000}
            />
          </div>
        </div>

      </div>

      <div className="flex justify-center text-7xl text-white">
        <div className="p-4 rounded-2xl"><FaHtml5 /></div>
        <div className="p-4 rounded-2xl"><FaCss3 /></div>
        <div className="p-4 rounded-2xl"><FaSass /></div>
        <div className="p-4 rounded-2xl"><SiJavascript /></div>
        <div className="p-4 rounded-2xl"><SiTypescript /></div>
        <div className="p-4 rounded-2xl"><FaReact /></div>
        <div className="p-4 rounded-2xl"><RiNextjsFill /></div>
        <div className="p-4 rounded-2xl"><FaNodeJs /></div>
        <div className="p-4 rounded-2xl"><SiExpress /></div>
        <div className="p-4 rounded-2xl"><SiPostgresql /></div>
      </div>

    </div>
  )
}
