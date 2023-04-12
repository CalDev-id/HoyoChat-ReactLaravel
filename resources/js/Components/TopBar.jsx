const TopBar = () => {
    return (
        <>
            <section className="w-full fixed bg-white">
                <div className="container">
                    <div className="flex justify-between items-center py-3">
                        <h1 className="font-semibold text-2xl">HoyoChat</h1>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search creator inspiration and projects"
                            className="rounded-full py-3 px-5 sm:pl-10 md:pl-14 hidden sm:block w-3/6 text-sm border-none lg:block text-black bg-body"
                        />
                        <button
                            className="bg-primary text-white py-2 rounded-full px-7 font-semibold"
                            type="button"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </section>

            <style jsx="true">
                {`
                    #search {
                        background-image: url("/images/search.png");
                        background-repeat: no-repeat;
                        background-position: right center;
                        background-position: 3% 50%;
                    }
                    #search:active{ border: none; outline:none; }
                `}
            </style>
        </>
    );
};

export default TopBar;
