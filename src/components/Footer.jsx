// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container mx-auto pt-10 pb-20 font-sans bg-gray-900 text-gray-400">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-span-6 px-5 md:col-start-1 md:col-span-6 md:px-5 xl:col-span-4 xl:col-start-3 text-xs">
                        <div className="text-left">
                            <footer className="">
                                <div>© Rakib Sarowar</div>
                            </footer>
                        </div>
                    </div>
                    <div className="col-span-6 px-5 md:col-span-6 md:px-5 xl:col-span-4 text-xs">
                        <footer className="text-right">
                            <div>Built with React!.</div>
                        </footer>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;