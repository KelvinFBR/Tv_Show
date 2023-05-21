import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import queryString from "query-string";
import Card from "../../components/Card";
import TitleSection from "./components/TitleSection";
import useShowSearchApi from "../../hooks/useShowSearchApi";
import Loading from "../../components/Loading";


const Search = () => {
    const location = useLocation();
    const { isLoading, showsResultSearch, setQuerySearchShow } = useShowSearchApi();
    const { q = "" } = queryString.parse(location.search);

    useEffect(() => {
        setQuerySearchShow(q as string)
    }, [q, setQuerySearchShow])


    // Todo: hacer componente para loading
    return isLoading
        ? (<Loading />)
        : (
            <>
                <section className="p-10">
                    <TitleSection showsResultSearch={showsResultSearch} query={q as string} />
                    <div className=" flex flex-wrap justify-center gap-8 p-10">
                        {showsResultSearch.map((data) => (
                            <Card key={data.id} data={data} />
                        ))}
                    </div>
                </section>
            </>
        )
}

export default Search