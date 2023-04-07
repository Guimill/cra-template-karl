import Banner from "../components/Banner"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { Oultet } from "react-router-dom"

export default function Index() {

    return (
        <>
        <Banner />
        <Navbar />
        <main>
            <Oultet />
        </main>
        <Footer />
        </>
    )

}