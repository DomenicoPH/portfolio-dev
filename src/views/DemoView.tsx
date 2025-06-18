export default function DemoView(){
    return(
        
        <div className="flex flex-col items-center min-h-screen pt-25">
          
            <h1 className="montserrat text-gray-500 text-lg">Font Demo <span className="italic">(Montserrat)</span></h1>
            <br />

            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-fuchsia-400">
                        <h2 className="montserrat text-start text-2xl">Montserrat</h2>
                        <p className="montserrat max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
                    </div>
                    <span className="w-100 h-4 bg-fuchsia-400 mb-4"></span>
                </div>
                <div>
                    <p className="montserrat text-[152px] pl-5 text-fuchsia-400">ABC</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-amber-400">
                        <h2 className="quicksand text-start text-2xl">Quicksand</h2>
                        <p className="quicksand max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
                    </div>
                    <span className="w-100 h-4 bg-amber-400 mb-4"></span>
                </div>
                <div>
                    <p className="quicksand text-[152px] pl-5 text-amber-400">ABC</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-sky-400">
                        <h2 className="zilla text-start text-2xl">Zilla Slab</h2>
                        <p className="zilla max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
                    </div>
                    <span className="w-100 h-4 bg-sky-400 mb-4"></span>
                </div>
                <div>
                    <p className="zilla text-[152px] pl-5 text-sky-400">ABC</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-green-400">
                        <h2 className="roboto text-start text-2xl">Roboto</h2>
                        <p className="roboto max-w-100 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id esse doloribus, minima itaque debitis non pariatur magni sed maiores earum nisi laborum inventore illum, provident eaque asperiores iste iure a?</p>
                    </div>
                    <span className="w-100 h-4 bg-green-400 mb-4"></span>
                </div>
                <div>
                    <p className="roboto text-[152px] pl-5 text-green-400">ABC</p>
                </div>
            </div>
            
        </div>
    )
}