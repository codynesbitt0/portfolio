import emailjs from '@emailjs/browser';
import { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { target } = e;

        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        'Thank you for your message! I will get back to you as soon as possible.'
                    );

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert('Something went wrong! Please try again.');
                }
            );
    };
    return (
        <div className='bg-lightcolor mx-5 mb-5 flex grow justify-center gap-4 rounded-xl p-6 lg:gap-6 xl:mx-44'>
            <div className='text-darkcolor hidden text-4xl lg:block lg:text-7xl'>
                <MdOutlineEmail />
            </div>
            <div className='flex w-full flex-col'>
                <h2 className='text-darkcolor mb-2 w-fit font-display text-3xl font-bold'>
                    Contact Me
                </h2>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='text-darkcolor flex flex-col gap-3'
                >
                    <label className='flex flex-col gap-1'>
                        <span>Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className='bg-bgcolor border-darkcolor text-lightcolor rounded border-2'
                            required
                        ></input>
                    </label>
                    <label className='flex flex-col gap-1'>
                        <span>Email Address</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className='bg-bgcolor border-darkcolor text-lightcolor rounded border-2'
                            required
                        ></input>
                    </label>
                    <label className='flex flex-col gap-1'>
                        <span>Message</span>
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            className='bg-bgcolor border-darkcolor text-lightcolor rounded border-2'
                            required
                            rows={7}
                        ></textarea>
                    </label>
                    <button
                        type='submit'
                        className='bg-bgcolor border-darkcolor text-lightcolor w-fit rounded border-2 p-2 font-bold'
                    >
                        {loading ? 'SENDING...' : 'SEND'}
                    </button>
                </form>
            </div>
        </div>
    );
}
