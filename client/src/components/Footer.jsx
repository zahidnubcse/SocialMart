import React from 'react';
import { assets } from './../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
        <footer className="bg-black px-6 pt-10 md:px-16 lg:px-36 w-full text-gray-300">
            
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-700 pb-10">
                
                {/* LEFT SECTION */}
                <div className="md:max-w-sm">
                    <img
                        alt="logo"
                        className="h-11 cursor-pointer"
                        src={assets.logo}
                        onClick={()=>{navigate('/');scrollTo(0, 0)}}
                    />

                    <p className="mt-6 text-sm text-gray-400 leading-relaxed">
                       Socialmart is a dedicated platform created to make buying and selling social media accounts simple, safe, and transparent. Our marketplace connects real users and helps them trade accounts with confidence.
                    </p>

                    {/* App Store + Play Store */}
                    <div className="flex items-center gap-3 mt-6">
                        {/* Google Play */}
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                            alt="google play"
                            className="h-10 w-auto border border-white rounded transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
                        />

                        {/* App Store */}
                        <img
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                            alt="app store"
                            className="h-10 w-auto border border-white rounded transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
                        />
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex-1 flex flex-wrap md:flex-nowrap items-start md:justify-end gap-14 md:gap-40">
                    
                    {/* Company */}
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-indigo-600">Home</a></li>
                            <li><a href="#" className="hover:text-indigo-600">About us</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Contact us</a></li>
                              <li><a href="#" className="hover:text-indigo-600 transition">Careers<span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li>
                            <li><a href="#" className="hover:text-indigo-600">Privacy policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p className="hover:text-white cursor-pointer">+8801316-841267</p>
                            <p className="hover:text-white cursor-pointer">contact@socialmart.ac.bd</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER BOTTOM */}
            <p className="pt-5 text-center text-sm pb-6 text-gray-400">
                Copyright {new Date().getFullYear()} © 
                <a href="#" className="text-white hover:underline"> SocialMart</a>. 
                All Rights Reserved.
            </p>
        </footer>
        </>
    );
};

export default Footer;
