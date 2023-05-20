import queryString from "query-string";
import { useLocation } from "react-router-dom";

const Details = () => {

    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);

    return (
        <div>Details: {q}</div>
    )
}

export default Details