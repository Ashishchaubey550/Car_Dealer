import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import video from '../images/video.mp4';

function ContactUsSecond() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.1;
        }
    }, []);

    const mutehandle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <div className='w-full h-[80vh] relative'>
                <video ref={videoRef} className='w-full h-full object-cover' autoPlay loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Mute/Unmute Button */}
                <button
                    onClick={mutehandle}
                    className="absolute top-4 right-4 text-indigo-300 p-2 rounded-full"
                >
                    {isMuted ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />}
                </button>
            </div>

            <div className=' bg-black text-white h-full mt-0 justify-center flex text-5xl font-extrabold'>
                Contact Us
            </div>
            <div className='mt-0 border-gray-700 border-4 w-full h-[70vh]'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8210312445053!2d78.42615947599128!3d17.468278000468107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917445711053%3A0x88def353aa1d9ee9!2sThe%20Value%20Drive!5e0!3m2!1sen!2sin!4v1736163461865!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className=''>
                Hello Boys
            </div>
        </>
    );
}

export default ContactUsSecond;
