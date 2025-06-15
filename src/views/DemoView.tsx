export default function DemoView(){
    return(
        
        <div className="flex flex-col justify-center items-center h-screen">
          
            <h1 className="montserrat text-gray-500">Font Demo <span className="italic">(Montserrat)</span></h1>
            <br />

            <div className="text-fuchsia-400">
                <h2 className="montserrat text-start text-2xl">Montserrat</h2>
                <p className="montserrat max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
            </div>
            <span className="w-100 h-4 bg-fuchsia-400 mb-4"></span>

            <div className="text-amber-400">
                <h2 className="quicksand text-start text-2xl">Quicksand</h2>
                <p className="quicksand max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
            </div>
            <span className="w-100 h-4 bg-amber-400 mb-4"></span>

            <div className="text-sky-400">
                <h2 className="zilla text-start text-2xl">Zilla Slab</h2>
                <p className="zilla max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
            </div>
            <span className="w-100 h-4 bg-sky-400 mb-4"></span>
            
        </div>
    )
}