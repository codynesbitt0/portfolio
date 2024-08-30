import { /*AiFillGithub,*/ AiFillLinkedin } from 'react-icons/ai';
import { HiDocumentDownload } from 'react-icons/hi';

import { description, name } from '../constants/constants';

export default function Head() {
    return (
        <div className='bg-lightcolor mx-5 mt-5 flex flex-col-reverse justify-center gap-3 rounded-xl p-6 md:flex-row xl:mx-44 xl:gap-20'>
            <div className=''>
                <h1 className='text-darkcolor mb-3 font-display text-6xl font-bold lg:text-7xl'>
                    {name}
                </h1>
                <p className='text-darkcolor max-w-3xl pt-1 text-sm lg:text-base'>
                    {description}
                </p>
                <div
                    id='links'
                    className='text-darkcolor flex gap-9 pl-1 pt-2 text-2xl lg:text-3xl'
                >
                    <a
                        href='https://www.linkedin.com/in/codynesbitt/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href='/src/assets/resume.pdf'
                        download
                    >
                        <HiDocumentDownload />
                    </a>
                </div>
            </div>
            <div className='h-52 w-52'>
                <img src='/src/assets/me.jpg' />
            </div>
        </div>
    );
}
