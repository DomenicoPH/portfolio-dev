import Link from "next/link"


export default function Header(){
    return(
        <div className="flex justify-between px-20 py-4 bg-gray-800/25 montserrat">
            <Link className="hover:text-fuchsia-500" href="/"><h2>GnomonoDEV</h2></Link>
            <nav>
                <ul className="flex gap-2">
                    <Link className="hover:text-fuchsia-500" href="/proyectos"><li>Proyectos</li></Link>
                    <Link className="hover:text-fuchsia-500" href="/about"><li>Sobre mi</li></Link>
                    <Link className="hover:text-fuchsia-500" href="/fontdemo"><li>Font Demo</li></Link>
                </ul>
            </nav>
        </div>
    )
}