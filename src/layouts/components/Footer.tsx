const Footer = () => {
    return (
        <footer className="bg-slate-800 p-8 text-white text-center">
            <div className="flex justify-between mb-10">
                <h1 className="font-bold text-xl"><a href="/">TvShow</a></h1>

                {/* social media */}
                <ul className="flex items-center justify-center gap-5">
                    <li><a href="#">Intagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            <p className="">&copy; 2023 | TvShow. All right reserverd</p>
        </footer>
    )
}

export default Footer