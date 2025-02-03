import MainLayout from "@/Layouts/MainLayout";
import { Hero } from "./Main/Hero";
import { Cards } from "./Main/Cards";
import { AboutUs } from "./Main/AboutUs";
import { ToBorrowMoney } from "./Main/ToBorrowMoney";
import { ToLendMoney } from "./Main/ToLendMoney";
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
