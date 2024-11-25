'use client';

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();

    // Check if the URL contains '/vertical'
    const isVertical = pathname.includes('/vertical');
    const router = useRouter();
    return (
        <>
            {/* Mobile Navigation */}
            <nav className="flex items-center justify-between p-4 bg-background md:hidden">
                <div className="flex items-center space-x-2">
                    {isVertical ? (
                        <Image width={100} height={60} alt="logo" src="/images/logo.jpg" />
                    ) : (
                        <>
                            {/* Menu */}
                            <button>
                                <CiMenuBurger className="text-2xl" />
                            </button>
                            {/* Logo */}
                            <button className="text-primary" onClick={() => router.push('/')}>
                                <Image width={100} height={60} alt="logo" src="/images/logo.jpg" />
                            </button>
                        </>
                    )}
                </div>
                {!isVertical && (
                    <div className="flex space-x-4">
                        <a href="#" className="text-muted-foreground hover:text-muted">
                            Postuler
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-muted">
                            Se connecter
                        </a>
                    </div>
                )}
            </nav>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-between p-4 bg-white dark:bg-zinc-800">
                <button className="text-primary" onClick={() => router.push('/')}>
                    <Image width={150} height={70} alt="logo" src="/images/logo.jpg" />
                </button>
                {!isVertical && (
                    <div className="flex space-x-6 items-center">

                        <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                            Postuler
                        </a>
                        <a href="#" className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                            Se connecter
                        </a>
                        <button className="bg-[#EF5844] text-white px-8 py-2 rounded-full hover:bg-[#EF5844]/80">
                            Rejoignez maintenant
                        </button>
                        <button className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-600">
                            <IoMdMore className="text-2xl" />
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Nav;
