import Image from "next/image"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const nav = () => {
    return (
        <>
            <nav className="flex items-center justify-between p-4 bg-background md:hidden">
                <div className="flex items-center space-x-2">
                    {/* Menu */}
                    <button>
                        <CiMenuBurger className="text-2xl" />
                    </button>
                    {/* logo Image  */}
                    <button className="text-primary">
                        <Image width={100} height={60} alt="menu-icon" src="/images/logo.jpg" />
                    </button>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-muted">
                        Postuler
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-muted">
                        Se connecter
                    </a>
                </div>
            </nav>

            <nav className="hidden md:flex items-center justify-between p-4 bg-white dark:bg-zinc-800">
                <button className="text-primary">
                    <Image width={150} height={70} alt="menu-icon" src="/images/logo.jpg" />
                </button>
                <div className="flex space-x-6 items-center">
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                        List your business
                    </a>
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                        Postuler
                    </a>
                    <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                        Se Connecter
                    </a>
                    <button className="bg-[#EF5844] text-white px-8 py-2 rounded-full hover:bg-[#EF5844]/80">Rejoignez maintenant</button>
                    <button className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                        <IoMdMore className="text-2xl" />
                    </button>
                </div>
            </nav>




        </>
    )
}

export default nav