import { Hero } from "./Main/Hero";
import "../../css/main.css";
import { SimpleLayout } from "@/Layouts/simple";
// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <SimpleLayout header={{ sx: { backgroundColor: "#191e24" } }}>
                <Hero />
            </SimpleLayout>
        </>
    );
}
