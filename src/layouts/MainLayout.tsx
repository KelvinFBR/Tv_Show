import { LayoutProps } from "../types/layout.type"

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <>
            <header>Header</header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </>
    )
}

export default MainLayout