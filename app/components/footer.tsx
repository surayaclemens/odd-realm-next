import Link from "next/link";
import { useTranslation } from 'react-i18next';
// import '../../i18n';
import Image from 'next/image';


// Footer.tsx
const Footer: React.FC = () => {
//   const { t } = useTranslation();

    return (
        <footer className='font-sans bg-purple text-white flex flex-col justify-between items-center p-4'>
            {/* word links */}
            <div className='flex w-2/3 justify-between my-2 md:justify-center'>
                <div className='flex flex-col lg:flex-row'>
                    <Link className='p-2' href='/press'>Press Kit</Link>
                    <Link className='p-2' href='/modding'>Modding Policy</Link>
                    <Link className='p-2' href='/play'>Stores</Link>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <Link className='p-2' href='/faq'>FAQs</Link>
                    <Link className='p-2' href='/contact'>Contact</Link>
                    <Link className='p-2' href='/site-terms'>Terms</Link>
                </div>
            </div>
            {/* social links */}
            <div className='flex w-2/3 justify-between md:justify-center items-baseline'>
                <a className="p-2" href='https://twitter.com/waylonsnedker' target='blank'>
                    <Image className="" src='/icons/twitter-white.svg'width={25} height={25}  alt='icon twitter'/>
                </a>
                <a className="p-2" href='https://discord.gg/6bw3k6w' target='blank'>
                    <Image className="" src='/icons/discord-white.svg' width={25} height={25} alt='icon discord'/>
                </a>
                <a className="p-2" href='https://www.reddit.com/r/oddrealm/' target='blank'>
                    <Image className="" src='/icons/reddit-white.svg' width={25} height={25} alt='icon reddit'/>
                </a>
                <a className="p-2" href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>
                    <Image className="" src='/icons/twitch-white.svg' width={25} height={25} alt='icon twitch'/>
                </a>
                <a className="p-2" href='https://store.steampowered.com/app/688060/Odd_Realm/' target='blank'>
                    <Image className="" src='/icons/steam-white.svg' width={25} height={25} alt='icon steam'/>
                </a>
            </div>
            {/* copyright */}
            <div className='flex flex-col justify-center items-center py-4'>
                <p className='text-sm text-center'>&copy; 2023 Unknown Origin Games. All Rights Reserved.</p>
                <a href='https://www.suraya.xyz' target='blank'>
                    <p className='text-xs'>Website by Soma Creative Studio</p>
                </a>
            </div>
            
        </footer>
    );
  };
  
  export default Footer;
  