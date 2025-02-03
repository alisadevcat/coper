import MainLayout from "@/Layouts/MainLayout";
import { Hero } from "../Pages/Main/Hero";
import { Cards } from "../Pages/Main/Cards";
import { AboutUs } from "../Pages/Main/AboutUs";
import { ToBorrowMoney } from "../Pages/Main/ToBorrowMoney";
import { ToLendMoney } from "../Pages/Main/ToLendMoney";
import '../../css/main.css';

export default function Home() {
    return (
        <>
            <MainLayout>
                <Hero />
            </MainLayout>
        </>
    );
}
