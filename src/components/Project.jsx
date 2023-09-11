const Project = () => {
    return (
        <div>
            <div className="container mx-auto pt-0 mb-16 md:pt-16 px-5 md:mb-20 sm font-sans relative">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-8 lg:px-0 xl:col-span-6 xl:col-start-3 2xl:col-span-6 2xl:col-start-3">
                        <div>
                            <h1 className="text-4xl md:text-4xl font-custom font-extrabold text-transparent bg-gradient-to-l from-teal-100 via-violet-500 to-teal-600 bg-clip-text mb-2 pb-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Projects</h1>
                            <p className="text-light text-gray-400 font-light text-lg lg:text-2xl font-sans tracking-wide leading-relaxed lg:leading-relaxed" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">Here are some of the projects I've worked on in the past — some still actively maintained, and others retired or on pause.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-0 pb-8 pt-0 md:pb-44 md:pt-0 font-custom">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
                            <div className="bg-gray-800 mb-10 rounded-xl md:rounded-3xl shadow-md  md:mb-20 overflow-hidden">

                                <div className="md:flex">
                                    <div className="basis-1/2 order-first md:order-last overflow-hidden bg-emerald-600">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-80 w-full md:object-full md:h-full md:w-full">
                                            <div style={{ maxWidth: '1022px', display: 'block' }}>
                                                <img
                                                    className="w-full h-full object-cover"
                                                    src="/src/assets/thumbnail-address-small.webp"
                                                    alt="Frictionless Shipping Address"
                                                    decoding="async"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="basis-1/2 p-4 md:p-10">
                                        <div className="tracking-wide text-sm text-teal-500 font-semibold mb-2 md:mb-4">
                                            Tokopedia
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-6 block">Frictionless Shipping Address
                                        </h2>
                                        <p className="text-gray-400 text-base md:text-lg font-normal mb-10 md:mb-20">Speed up filling address by maximizing automation on each label in order to increase success rate during checkout process.
                                        </p>
                                        <p className="text-gray-400 font-custom font-semibold mb-0">
                                            <span role="img" aria-label="link"> 🔐</span> Ask me to unlock</p>
                                    </div>
                                </div>
                                {/* ---------------------------------------------- */}
                                {/* <div className="md:flex">
                                    <div className="basis-1/2 order-first md:order-last overflow-hidden bg-emerald-600">
                                        <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-80 w-full object-cover md:object-full md:h-full md:w-full">
                                            <div style={{ maxWidth: '1022px', display: 'block' }}>
                                                <img
                                                    alt="Frictionless Shipping Address"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='621'%20width='1022'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E"
                                                    style={{ maxWidth: '100%', display: 'block', position: 'static' }}
                                                />
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                data-placeholder-image=""
                                                style={{
                                                    opacity: 0,
                                                    transition: 'opacity 500ms linear 0s',
                                                    backgroundColor: 'rgb(248, 248, 248)',
                                                    position: 'absolute',
                                                    inset: '0px',
                                                }}
                                            ></div>
                                            <picture>
                                                <source
                                                    type="image/webp"
                                                    sizes="(min-width: 1022px) 1022px, 100vw"
                                                    srcSet="/src/assets/thumbnail-address-small.webp 1022w"
                                                />
                                                <img
                                                    data-main-image=""
                                                    style={{ opacity: 1 }}
                                                    sizes="(min-width: 1022px) 1022px, 100vw"
                                                    decoding="async"
                                                    loading="lazy"
                                                    src="/static/8aab473561c1689eea93e1f50415ae4d/a2699/thumbnail-address-small.png"
                                                    srcSet="/static/8aab473561c1689eea93e1f50415ae4d/b0d24/thumbnail-address-small.png 256w,/static/8aab473561c1689eea93e1f50415ae4d/e136e/thumbnail-address-small.png 511w,/static/8aab473561c1689eea93e1f50415ae4d/a2699/thumbnail-address-small.png 1022w"
                                                    alt="Frictionless Shipping Address"
                                                />
                                            </picture>

                                        </div>
                                    </div>
                                    <div className="basis-1/2 p-4 md:p-10">
                                        <div className="tracking-wide text-sm text-teal-500 font-semibold mb-2 md:mb-4">Tokopedia</div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-6 block">Frictionless Shipping Address</h2>
                                        <p className="text-gray-400 text-base md:text-lg font-normal mb-10 md:mb-20">
                                            Speed up filling address by maximizing automation on each label in order to increase success rate during the checkout process.
                                        </p>
                                        <p className="text-gray-400 font-custom font-semibold mb-0">
                                            <span role="img" aria-label="link">🔐</span> Ask me to unlock
                                        </p>
                                    </div>
                                </div> */}
                                {/* -------------------------------------------- */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;