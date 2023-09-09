const Nav = () => {
    return (
        <div>
            <div className="mt-0 pb-5 pt-5 sm:pb-5 sm:pt-5 fixed z-50 left-0 top-0 w-full bg-gray-900 border-gray-800 border-b">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
                            <nav className="items-center justify-between lg:justify-start" aria-label="Global">
                                <div className="md:block md:ml-0 md:pr-4 md:space-x-8">
                                    <a aria-current="page" direction="up" className="font-bold text-gray-300 hover:text-white mr-10 md:mr-0" href="/">Start</a><a direction="up" className="font-medium text-gray-300 hover:text-white mr-10 md:mr-0" href="/portfolio/">Projects</a>
                                    <a direction="up" className="font-medium text-gray-300 hover:text-white mr-10 md:mr-0" href="/journal/">Journal</a>
                                    <a direction="up" className="font-medium text-gray-300 hover:text-white mr-10 md:mr-0" href="/about/">About</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;     