import SearchIcon from "@/components/icons/SearchIcon";

const Home = () => {
    return (
        <>
            <form className="flex flex-wrap items-center gap-2 p-2 bg-blue-900 rounded-xl">
                <span className="min-w-[20px]">
                    <SearchIcon className="fill-sky-500" />
                </span>
                <input
                    type="text"
                    placeholder="Search GitHub username..."
                    className="flex-1 p-2 text-white bg-transparent rounded-lg h-14 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button className="px-4 py-4 font-bold text-white rounded-lg bg-sky-500">
                    Search
                </button>
            </form>
            <article>todo el chmullo de la pagina</article>
        </>
    );
};

export default Home;
