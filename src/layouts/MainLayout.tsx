import { Footer, Header } from "./components"
import { LayoutProps } from "./models/types/layout.type"

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="bg-gradient footer-bottom">
                {children}
            </main >
            <Footer />
        </>
    )
}

export default MainLayout