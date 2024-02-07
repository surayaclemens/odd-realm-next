import Link from "next/link";
import { useTranslation } from 'react-i18next';
// import '../../i18n';
import Image from 'next/image';


const BuyModal: React.FC = () => {
  const { t } = useTranslation();

    return (
        <main className='font-sans bg-magenta text-black flex flex-col justify-center items-center p-4 w-full h-4/5 lg:h-1/3'>
            {/* links */}
            <div className='flex flex-col my-4 w-full justify-between lg:flex-row items-center'>
                    <a className='flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://discord.gg/6bw3k6w' target='blank'>
                        <div className='flex justify-end w-full'>
                            <Image src='/icons/link-external.svg' alt='external link icon' width={20} height={20}/>
                        </div>
                        <div className='flex flex-col items-center justify-evenly h-full'>
                            <p className='text-xl lg:text-3xl text-center'>{t('discord details')}</p>
                            <Image src='/icons/discord-dark.svg' alt='discord icon' width={150} height={150} />
                        </div>
                    </a>
                    <a className='flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>
                        <div className='flex justify-end w-full'>
                            <Image src='/icons/link-external.svg' alt='external link icon' width={20} height={20}/>
                        </div>
                        <div className='flex flex-col items-center justify-evenly h-full'>
                            <p className='text-xl lg:text-3xl text-center'>{t('twitch details')}</p>
                            <Image src='/icons/twitch-dark.svg' alt='twitch icon' width={140} height={140} />
                        </div>
                    </a>
                    <a className='flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://www.reddit.com/r/oddrealm/' target='blank'>
                        <div className='flex justify-end w-full'>
                            <Image src='/icons/link-external.svg' alt='external link icon' width={20} height={20}/>
                        </div>
                        <div className='flex flex-col items-center justify-evenly h-full'>
                            <p className='text-xl lg:text-3xl text-center'>{t('reddit details')}</p>
                            <Image src='/icons/reddit-dark.svg' alt='reddit icon' width={140} height={140} />
                        </div>
                    </a>
                </div>
           
            
        </main>
    );
  };
  
  export default BuyModal;
  