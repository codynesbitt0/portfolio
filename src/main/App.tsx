import emailjs from '@emailjs/browser';
import 'react-vertical-timeline-component/style.min.css';
import Contact from './Contact';
import Experience from './Experience';
import Head from './Head';

//import { motion } from "framer-motion"

export default function App() {
    emailjs.init('1PYalEU23nxGeWHoH');
    return (
        <div className='bg-bgcolor flex min-h-screen flex-col gap-5'>
            <Head />
            <Experience />
            <Contact />
        </div>
    );
}
