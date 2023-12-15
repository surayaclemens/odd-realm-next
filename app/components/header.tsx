// Header.tsx
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {


    return (
        <>
            {/* MOBILE */}
            <header className="font-sans flex justify-between items-center px-6 py-2 md:justify-evenly lg:hidden text-black">
                <div className="flex flex-col justify-between">
                    <Link className="w-20 rounded-md border-1 border-black bg-white bg-opacity-20 text-xs flex justify-center p-1 my-1" href="/about">About</Link>
                    <Link className="w-20 rounded-md border-1 border-black bg-white bg-opacity-20 text-xs flex justify-center p-1 my-1" href="/community">Community</Link>
                </div>
                <Link className="flex flex-col w-28" href="/">
                    <Image src="/images/logo.svg" alt="logo" width={200} height={150}/>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link className="w-20 rounded-md border-1 border-black bg-white bg-opacity-20 text-xs flex justify-center p-1 my-1" href="/contact">Contact</Link>
                    <Link className="w-20 rounded-md border-1 border-black bg-white bg-opacity-20 text-xs flex justify-center p-1 my-1" href="/play">Play!</Link>
                </div>
            </header>

            {/* DESKTOP */}
            <header className="hidden lg:flex justify-evenly items-center p-8 font-sans">
                <Link className="bg-white bg-opacity-20 hover:border-white hover:text-white text-xl w-36 flex justify-center rounded-md px-4 py-2 border-2 border-black" href="/about">About</Link>
                <Link className="bg-white bg-opacity-20 hover:border-white hover:text-white text-xl w-36 flex justify-center rounded-md px-4 py-2 border-2 border-black" href="/community">Community</Link>
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={200} height={150}/>
                </Link>
                <Link className="bg-white bg-opacity-20 hover:border-white hover:text-white text-xl w-36 flex justify-center rounded-md px-4 py-2 border-2 border-black" href="/contact">Contact</Link>
                <Link className="bg-white bg-opacity-20 hover:border-white hover:text-white text-xl w-36 flex justify-center rounded-md px-4 py-2 border-2 border-black" href="/play">Play!</Link>
            </header>
        </>
    );
  };
  
  export default Header;
  