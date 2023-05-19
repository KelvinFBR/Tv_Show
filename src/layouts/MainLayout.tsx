import { Footer, Header } from "./components"
import { LayoutProps } from "./models/types/layout.type"

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="bg-[#112b3c1c] footer-bottom">
                {children}
            </main >
            <Footer />
        </>
    )
}

export default MainLayout