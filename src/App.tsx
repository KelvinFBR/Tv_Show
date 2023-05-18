import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes"
import { MainLayout } from "./layouts"

function App() {

    return (
        <BrowserRouter>
            <MainLayout>
                <AppRouter />
            </MainLayout>
        </BrowserRouter>
    )
}

export default App
