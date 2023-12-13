// Header.tsx
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {


    return (
        <>
            {/* MOBILE */}
            <header className="font-sans flex justify-between items-center px-6 md:justify-evenly lg:hidden text-black">
                <div className="flex flex-col justify-between">
                    <Link className="w-24 rounded-md border-1 border-black bg-white bg-opacity-20 text-sm flex justify-center p-2 my-1" href="/about">About</Link>
                    <Link className="w-24 rounded-md border-1 border-black bg-white bg-opacity-20 text-sm flex justify-center p-2 my-1" href="/community">Community</Link>
                </div>
                <Link className="flex flex-col w-40" href="/">
                    <Image src="/images/logo.svg" alt="logo" width={200} height={150}/>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link className="w-24 rounded-md border-1 border-black bg-white bg-opacity-20 text-sm flex justify-center p-2 my-1" href="/contact">Contact</Link>
                    <Link className="w-24 rounded-md border-1 border-black bg-white bg-opacity-20 text-sm flex justify-center p-2 my-1" href="/play">Play!</Link>
                </div>
            </header>

            {/* DESKTOP */}
            <header className="hidden lg:flex justify-evenly items-center p-8 font-sans">
                <Link className="bg-white bg-opacity-20 hover:border-pink hover:text-pink text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black" href="/about">About</Link>
                <Link className="bg-white bg-opacity-20 hover:border-blue hover:text-blue text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black" href="/community">Community</Link>
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={200} height={150}/>
                </Link>
                <Link className="bg-white bg-opacity-20 hover:border-purple hover:text-purple text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black" href="/contact">Contact</Link>
                <Link className="bg-white bg-opacity-20 hover:border-green hover:text-green text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black" href="/play">Play!</Link>
            </header>
        </>
    );
  };
  
  export default Header;
  