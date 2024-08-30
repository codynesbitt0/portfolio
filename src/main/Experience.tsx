import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { experiences } from '../constants/constants';

export default function Experience() {
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-lightcolor mb-2 px-3 font-display text-2xl font-bold'>
                My Experience
            </h2>
            <VerticalTimeline
                lineColor='var(--theme-color-lightcolor)'
                className=''
                animate={false}
            >
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                        contentStyle={{
                            background: 'var(--theme-color-lightcolor)',
                            boxShadow: '0px 0px',
                        }}
                        contentArrowStyle={{
                            borderRight:
                                '7px solid var(--theme-color-lightcolor)',
                        }}
                        date={experience.date}
                        dateClassName='text-lightcolor text-xs lg:text-sm'
                        iconStyle={{
                            background: 'var(--theme-color-lightcolor)',
                        }}
                        icon={
                            <div className='flex h-full w-full items-center justify-center rounded-full shadow-[0px_0px_0px_4px] shadow-[var(--theme-color-lightcolor)]'>
                                <img
                                    src={experience.icon}
                                    alt={experience.company_name}
                                    className='h-[60%] w-[60%] object-contain'
                                />
                            </div>
                        }
                        key={index}
                        textClassName='bg-darkcolor'
                    >
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-darkcolor text-lg font-bold lg:text-xl'>
                                {experience.title}
                            </h4>
                            <h5 className='text-darkcolor text-sm font-semibold lg:text-base'>
                                {experience.company_name}
                            </h5>
                            <ul className='ml-5 list-disc space-y-2'>
                                {experience.points.map((point, index) => (
                                    <li
                                        key={`experience-point-${index}`}
                                        className='text-darkcolor pl-1 text-xs tracking-wider lg:text-sm'
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}
