import React from 'react';
import { FaBeer, FaFacebook, FaSkype, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="text-white bg-gradient-to-r from-blue-900 via-gray-900 to-stone-900">
            <div className=" grid sm:grid-cols-1 lg:grid-cols-5 gap-4 py-10 pb-10 ">
                <div className="">
                    <h1 className="text-2xl">
                        Horse Power
                    </h1>
                    <div className="pt-5">
                        <p>
                            34000+ Other user, playing, rank.
                        </p>
                        <p>
                            gaming platform.
                        </p>
                        <div className="flex w-full my-3 justify-center">
                            <FaFacebook className="mx-2" />
                            <FaWhatsapp className="mx-2" />
                            <FaTwitter className="mx-2" />
                            <FaYoutube className="mx-2" />
                            <FaSkype className="mx-2" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl">
                        About
                    </h3>
                    <div className="pt-5">
                        <p>
                            Participents
                        </p>
                        <p>
                            Horses
                        </p>
                        <p>
                            Jockey
                        </p>
                        <p>
                            Rank
                        </p>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl">
                        Team
                    </h3>
                    <div className="pt-5">
                        <p>
                            Horses
                        </p>
                        <p>
                            Jockey
                        </p>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl">
                        Blog
                    </h3>
                    <div className="pt-5">
                        <p>
                            New Event
                        </p>
                        <p>
                            Rules and Regulations
                        </p>
                        <p>
                            Award
                        </p>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl">
                        Contact
                    </h3>
                    <div className="pt-5">
                        <p>
                            +8801304979278
                        </p>
                        <p>
                            smzubayer9004@email.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-10">
                <hr className="h-px my-6 bg-gray-200 border-none" />
                <p>
                    © Horse Power 20223- All rights reserved
                </p>
            </div>
        </div>

    );
};

export default Footer;