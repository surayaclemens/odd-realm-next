import Link from "next/link";
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Image from 'next/image';


const BuyModal: React.FC = () => {
  const { t } = useTranslation();

    return (
        <main className='absolute font-sans bg-pink text-black flex flex-col justify-center items-center p-4 lg:p-8 w-full lg:fixed lg:bottom-0'>
            <div className="hidden lg:flex w-full justify-end">
                <Image className="" src={"/icons/close-black.svg"} width={40} height={40} alt="close"/>
            </div>
            <h1 className="text-7xl text-start w-4/5 mb-8">Buy now for Windows, Mac, or Linux</h1>
            {/* links */}
            <div className='flex flex-col mb-8 w-4/5 justify-between lg:flex-row items-center'>
                    <a className='flex items-center justify-center w-[280px] h-[160px] hover:border-white hover:text-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://store.steampowered.com/app/688060/Odd_Realm/' target='blank'>
                        <p className="text-4xl uppercase">Steam</p>
                    </a>
                    <a className='flex items-center justify-center w-[280px] h-[160px] hover:border-white hover:text-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://www.gog.com/en/game/odd_realm' target='blank'>
                        <p className="text-4xl uppercase">Gog</p>
                    </a>
                    <a className='flex items-center justify-center w-[280px] h-[160px] hover:border-white hover:text-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href="https://unknownorigingames.itch.io/oddrealm" target='blank'>
                        <p className="text-4xl uppercase">itch.io</p>
                    </a>
                    <iframe width={510} height={160} className='w-[280px] lg:w-[510px] my-1 cursor-pointer border-2 border-black rounded-sm hover:border-white' src="https://itch.io/embed/266192"></iframe>
            </div>
           
            
        </main>
    );
  };
  
  export default BuyModal;
  