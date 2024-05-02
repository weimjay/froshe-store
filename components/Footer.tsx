const Footer = () => {
    return (
        <div className="bg-[#232323]">
            <div className="mx-8 lg:mx-16 mt-8 pt-2 text-gray-400">
                <div className="md:grid md:grid-cols-2">
                    <div className="flex gap-8 md:gap-12 lg:gap-28 mb-6 md:mb-0 lg:mb-0 text-[14px]">
                        <div className="flex flex-col gap-1">
                            <p className="text-base-bold text-gray-200 mb-4">Categories</p>
                            <a className="hover:text-white" href="#">Women</a>
                            <a className="hover:text-white" href="">Men</a>
                            <a className="hover:text-white" href="">Shoes</a>
                            <a className="hover:text-white" href="">Accessories</a>
                            <a className="hover:text-white" href="">New Arrivals</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-base-bold text-gray-200 mb-4">Support</p>
                            <a className="hover:text-white" href="">FAQ</a>
                            <a className="hover:text-white" href="">Stores</a>
                            <a className="hover:text-white" href="">Delivery</a>
                            <a className="hover:text-white" href="">Click & Collect</a>
                            <a className="hover:text-white" href="">Returns & Refunds</a>
                            <a className="hover:text-white" href="">Gift Cards</a>
                            <a className="hover:text-white" href="">Product Ideas</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-base-bold text-gray-200 mb-4">Links</p>
                            <a className="hover:text-white" href="">Company</a>
                            <a className="hover:text-white" href="">Careers</a>
                            <a className="hover:text-white" href="">Customer Notices</a>
                            <a className="hover:text-white" href="">Partnerships</a>
                            <a className="hover:text-white" href="">Terms & Conditions</a>
                            <a className="hover:text-white" href="">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-base-bold text-gray-200 mb-6">STAY CONNECTED</p>
                        <ul className="flex gap-3">
                            <li className="facebook">
                                <a href="https://www.facebook.com" className="external">
                                    <img className="footer-icon" src="/facebook.svg"
                                         width="40px" height="40px" alt="icon facebook"/>
                                    <span className="hidden">Facebook</span>
                                </a>
                            </li>

                            <li className="youtube">
                                <a href="http://www.youtube.com" className="external">
                                    <img className="footer-icon" src="/youtube.svg"
                                         width="40px" height="40px" alt="icon youtube"/>
                                    <span className="hidden">Youtube</span>
                                </a>
                            </li>

                            <li className="instagram">
                                <a href="https://instagram.com" className="external">
                                    <img className="footer-icon" src="/instagram.svg"
                                         width="40px" height="40px" alt="icon instagram"/>
                                    <span className="hidden">Instagram</span>
                                </a>
                            </li>

                            <li className="pinterest">
                                <a href="https://www.pinterest.com.au" className="external">
                                    <img className="footer-icon" src="/pinterest.svg"
                                         width="40px" height="40px" alt="icon pinterest"/>
                                    <span className="hidden">Pinterest</span>
                                </a>
                            </li>

                            <li className="tiktok">
                                <a href="https://www.tiktok.com" className="external">
                                    <img className="footer-icon" src="/tiktok.svg"
                                         width="40px" height="40px" alt="icon tiktok"/>
                                    <span className="hidden">Tiktok</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 mt-10 pb-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <span className="text-body-bold text-gray-200">Froshé Store</span>
                            <span className="ml-10 text-[14px]">
                            © Copyright 2023. All Rights Reserved
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full md:w-4/5">
                            <img src="/payment.png" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;