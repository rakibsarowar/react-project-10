// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-slate-100'>
            <div className="container mx-auto px-5 pt-0 mb-10 md:pt-0 md:mb-24">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-8 lg:px-0 xl:col-span-6 xl:col-start-3 2xl:col-span-6 2xl:col-start-3">
                        <div className="col-start-1 col-span-12 pt-32 md:pt-44 pb-10 px-0 md:col-start-3 md:col-span-7 md:px-0">
                            <h1 className="text-5xl md:text-7xl font-custom font-extrabold text-gray-700 mb-2 pb-4" data-sal="slide-down" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Journal</h1>
                            <p className="text-light text-gray-600 font-light text-2xl lg:text-3xl font-custom tracking-wide leading-relaxed lg:leading-relaxed" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">I write about what I've been working on, problems I've solved, and things I'm still trying to figure out.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-0 pb-8 pt-0 md:pb-44 md:pt-0 font-custom">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-8 lg:px-0 xl:col-span-7 xl:col-start-3 2xl:col-span-5 2xl:col-start-3">
                            <ol>
                                {/* Article 1 */}
                                <li>
                                    <a direction="up" duration="0.7" bg="white" href="/journal/designing-for-influence-engaging-stakeholders/">
                                        <article className="post-list-item" itemscope="" itemtype="http://schema.org/Article">
                                            <div className="bg-white mb-10 rounded-xl shadow-md overflow-hidden md:hover:shadow-lg md:hover:-translate-y-3 ease-in delay-75 duration-100" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">
                                                <div className="md:flex">
                                                    <div className="w-full md:w-full p-4 md:p-7 ">
                                                        <span hex="#009688" duration="1" to="/journalDesigning for influence: Lessons learned from my failures in engaging stakeholders" itemprop="url" className="hover:text-cyan-700 text-2xl font-extrabold text-gray-700 mb-2 block">Designing for influence: Lessons learned from my failures in engaging stakeholders</span>
                                                        <div className="tracking-wide text-sm text-gray-400 font-normal mb-4">June 06, 2023 - 5 min read</div>
                                                        <div className="text-gray-500 text-lg font-normal mb-10">Designers often encounter difficulties when it comes to influencing stakeholders, whether they are clients, executives, or decision-makers within organizations.</div>
                                                        <span to="/journal/designing-for-influence-engaging-stakeholders/" className="text-gray-500 hover:text-cyan-700 font-custom font-medium">Read more → </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                                {/* Article 2 */}
                                <li>
                                    <a direction="up" duration="0.7" bg="white" href="/journal/the-joy-of-physical-buttons/">
                                        <article className="post-list-item" itemscope="" itemtype="http://schema.org/Article">
                                            <div className="bg-white mb-10 rounded-xl shadow-md overflow-hidden md:hover:shadow-lg md:hover:-translate-y-3 ease-in delay-75 duration-100" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">
                                                <div className="md:flex">
                                                    <div className="w-full md:w-full p-4 md:p-7 ">
                                                        <span hex="#009688" duration="1" to="/journalThe joy of physical buttons" itemprop="url" className="hover:text-cyan-700 text-2xl font-extrabold text-gray-700 mb-2 block">The joy of physical buttons</span>
                                                        <div className="tracking-wide text-sm text-gray-400 font-normal mb-4">May 22, 2023 - 2 min read</div>
                                                        <div className="text-gray-500 text-lg font-normal mb-10">The preference for physical buttons in certain products stems from the unique benefits they offer in terms of comfort, security, and user satisfaction.</div>
                                                        <span to="/journal/the-joy-of-physical-buttons/" className="text-gray-500 hover:text-cyan-700 font-custom font-medium">Read more → </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;