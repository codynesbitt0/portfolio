import { /*AiFillGithub,*/ AiFillLinkedin } from 'react-icons/ai';
import { HiDocumentDownload } from 'react-icons/hi';

import { description, name } from '../constants/constants';

export default function Head() {
    return (
        <div className='mx-5 mt-5 flex flex-col-reverse justify-center gap-3 rounded-xl bg-lightcolor p-6 md:flex-row xl:mx-44 xl:gap-20'>
            <div className=''>
                <h1 className='mb-3 font-display text-6xl font-bold text-darkcolor lg:text-7xl'>
                    {name}
                </h1>
                <p className='max-w-3xl pt-1 text-sm text-darkcolor lg:text-base'>
                    {description}
                </p>
                <div
                    id='links'
                    className='flex gap-9 pl-1 pt-2 text-2xl text-darkcolor lg:text-3xl'
                >
                    <a
                        href='https://www.linkedin.com/in/codynesbitt/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href='/assets/Cody_Nesbitt_Resume.pdf'
                        download
                    >
                        <HiDocumentDownload />
                    </a>
                </div>
            </div>
            <div className='h-52 w-52'>
                <img src='/assets/me.jpg' />
            </div>
        </div>
    );
}
