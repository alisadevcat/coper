import MainLayout from "@/Layouts/MainLayout";
import { Hero } from "../sections/home/Hero";
import { Cards } from "../sections/home/Cards-old";
import { AboutUs } from "../sections/home/AboutUs";
import { ToBorrowMoney } from "../sections/home/ToBorrowMoney";
import { ToLendMoney } from "../sections/home/ToLendMoney";
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
