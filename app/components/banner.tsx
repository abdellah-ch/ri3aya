import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6";

const banner = () => {
    return (
        <>
            <div className="relative h-[250px] w-full  p-8 rounded-lg  md:hidden">
                <Image src="/images/banner.webp" alt="Caregivers and families" layout="fill" className="absolute inset-0 w-full h-full object-cover rounded-b-[20%]" />
                <div className="absolute left-8 bottom-8 z-10 text-left space-y-1">
                    <p className="px-4 py-1 rounded-xl w-fit text-xl font-bold text-white bg-[#213F5FE6]">Relier les familles</p>
                    <p className=" px-4 py-1 rounded-xl w-fit text-xl font-bold text-white bg-[#213F5FE6]">avec des soignants</p>
                    <p className=" px-4 py-1 rounded-xl w-fit text-xl font-bold text-white bg-[#213F5FE6]">locaux de qualité</p>
                </div>
            </div>
            <div className="md:hidden block p-6 bg-white rounded-lg shadow-md w-full mt-2">
                <div className="flex space-x-4">
                    <h2 className="text-lg cursor-pointer text-[#EF5844] font-semibold text-primary py-1 border-b-4 border-[#EF5844]">Trouver des soins</h2>
                    <h2 className="text-lg py-1 cursor-pointer">Trouver un emploi</h2>
                </div>

                <hr className="border-b border-muted my-2" />
                <div className=" mt-5 flex items-center border border-border rounded-lg p-2">
                    <span className="text-muted">
                        <FaLocationDot />
                    </span>
                    <input type="text" placeholder="ZIP code" className="flex-1 p-2 border-none outline-none text-muted-foreground" />
                </div>
                <button className="mt-5 w-full bg-[#EF5844] rounded-3xl text-accent-foreground hover:bg-accent/80 p-2 py-4 text-white">rechercher</button>
            </div>


            <div className="md:block relative h-[550px] w-full  p-8 rounded-lg  hidden">
                <Image src="/images/banner.webp" alt="Caregivers and families" layout="fill" className="absolute inset-0 w-full h-full object-cover rounded-b-[20%]" />
                <div className="absolute top-8 left-40 z-10 text-left space-y-8">
                    <div className="space-y-1">
                        <h1 className=" p-4 rounded-xl w-fit text-[40px] font-bold text-white bg-[#213F5FE6]">Relier les familles avec des</h1>
                        <h1 className="  p-4 rounded-xl w-fit text-[40px] font-bold text-white bg-[#213F5FE6]">  soignants locaux de qualité</h1>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md w-fit">
                        <div className="flex space-x-4">
                            <h2 className="text-lg cursor-pointer text-[#EF5844] font-semibold text-primary py-1 border-b-4 border-[#EF5844]">Trouver des soins</h2>
                            <h2 className="text-lg py-1 cursor-pointer">Trouver un emploi</h2>
                        </div>

                        <hr className="border-b border-muted my-2" />
                        <div className=" mt-5 flex items-center border border-border rounded-lg p-2">
                            <span className="text-muted">
                                <FaLocationDot />
                            </span>
                            <input type="text" placeholder="ZIP code" className="flex-1 p-2 border-none outline-none text-muted-foreground" />
                        </div>
                        <button className="mt-5 w-full bg-[#EF5844] rounded-3xl text-accent-foreground hover:bg-accent/80 p-2 py-4 text-white">rechercher</button>
                    </div>
                </div>

                {/* zip */}


                {/* zip */}
            </div>
        </>
    )
}

export default banner