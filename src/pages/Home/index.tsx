import Title from "./components/Title"
import Card from "../../components/Card"
import useShowApi from "../../hooks/useShowApi"
import ButtonPagination from "./components/ButtonPagination"
import Loading from "../../components/Loading"

const Home = () => {
    const { isLoading, page, totalPages, mostPopularShows, setShowPage } = useShowApi()

    // Todo: hacer componente para loading
    return isLoading
        ? (<Loading />)
        : (
            <>
                {/* slider */}
                <section className="p-4" id="mostpopular">
                    <Title title="Most Popular Show" />
                    <div className=" flex flex-wrap justify-center gap-8 p-10">
                        {mostPopularShows.map((data) => (
                            <Card key={data.id} data={data} />
                        ))}
                    </div>
                    <ButtonPagination setShowPage={setShowPage} page={page} totalPages={totalPages} />
                </section>
            </>
        )

}

export default Home