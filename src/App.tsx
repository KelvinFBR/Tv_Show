import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

function App() {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<p>Home</p>} />
                    <Route path="/details" element={<p>Details</p>} />
                    <Route path="/search" element={<p>Search</p>} />
                    <Route path="/search" element={<p>Home</p>} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default App
