import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-[#112B3C] p-8 text-white text-center" id='contact'>
            <div className="flex gap-x-16 gap-10 flex-wrap justify-center md:justify-between mb-10">
                <h1 className="font-bold text-xl text-[#F66B0E]"><a href="/">TvShow</a></h1>

                {/* social media */}
                <ul className="flex items-center justify-center gap-5">
                    <li>
                        <a href="#" className='text-xl'>
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='text-xl'>
                            <AiFillFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="#" className='text-xl'>
                            <AiFillTwitterCircle />
                        </a>
                    </li>
                </ul>
            </div>
            <p className="">&copy; 2023 <span className='text-[#F66B0E]'>|</span> TvShow. All right reserverd</p>
        </footer>
    )
}

export default Footer