import Link from "next/link";
import { useTranslation } from 'react-i18next';
import '../../i18n';
import Image from 'next/image';

interface BuyModalProps {
  onClose: () => void;
}

const BuyModal: React.FC<BuyModalProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <main className='font-sans bg-pink text-white text-opacity-90 flex flex-col justify-center items-center p-4 w-full h-full fixed inset-0 z-50'>
      <div className="absolute top-4 right-4 flex items-center">
        <div className="relative group cursor-pointer" onClick={onClose}>
          <Image
            className="block"
            src="/icons/close-white.svg"
            width={40}
            height={40}
            alt="close"
          />
        </div>
      </div>
      <h1 className="text-4xl lg:text-6xl text-center w-4/5 mb-4 lg:mb-8">Buy now for Windows, Mac, or Linux</h1>
      <div className='flex flex-col mb-4 lg:mb-8 w-4/5 justify-between lg:flex-row items-center'>
        <a className='flex items-center justify-center w-full lg:w-[280px] h-[100px] lg:h-[160px] hover:border-green-light hover:text-green-light text-xl bg-white bg-opacity-20 border-2 border-white rounded-lg p-4 mx-2 my-2' href='https://store.steampowered.com/app/688060/Odd_Realm/' target='_blank' rel='noopener noreferrer'>
          <p className="text-2xl lg:text-4xl">Steam</p>
        </a>
        <a className='flex items-center justify-center w-full lg:w-[280px] h-[100px] lg:h-[160px] hover:border-green-light hover:text-green-light text-xl bg-white bg-opacity-20 border-2 border-white rounded-lg p-4 mx-2 my-2' href='https://www.gog.com/en/game/odd_realm' target='_blank' rel='noopener noreferrer'>
          <p className="text-2xl lg:text-4xl">Gog</p>
        </a>
        <a className='flex items-center justify-center w-full lg:w-[280px] h-[100px] lg:h-[160px] hover:border-green-light hover:text-green-light text-xl bg-white bg-opacity-20 border-2 border-white rounded-lg p-4 mx-2 my-2' href="https://unknownorigingames.itch.io/oddrealm" target='_blank' rel='noopener noreferrer'>
          <p className="text-2xl lg:text-4xl">itch.io</p>
        </a>
        <iframe width="100%" height={160} className='w-full lg:w-[510px] mx-2 my-1 cursor-pointer border-2 border-white rounded-lg hover:border-green-light' src="https://itch.io/embed/266192"></iframe>
      </div>
    </main>
  );
};

export default BuyModal;
