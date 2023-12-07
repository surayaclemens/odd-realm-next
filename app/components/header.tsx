// Header.tsx
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {


    return (
        <>
            <header className="flex justify-evenly items-center px-16 py-4 font-sans">
                <Link className="bg-white text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black shadow-md" href="/about">About</Link>
                <Link className="bg-white text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black shadow-md" href="/community">Community</Link>
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={200} height={150}/>
                </Link>
                <Link className="bg-white text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black shadow-md" href="/contact">Contact</Link>
                <Link className="bg-white text-xl w-36 flex justify-center rounded-lg px-4 py-2 border-2 border-black shadow-md" href="/play">Play!</Link>
            </header>
        </>
    );
  };
  
  export default Header;
  