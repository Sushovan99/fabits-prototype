import { createLazyFileRoute } from "@tanstack/react-router";
import SideNav from "@/components/Sidenav";
import Collapse from "@/assets/svgs/Collapse";

export const Route = createLazyFileRoute("/project2")({
    component: Project2,
});

function Project2() {
    return (
        <div className="bg-project2Bg min-h-screen">
            <SideNav />

            <main className="lg:ml-80 py-12 px-12 relative">
                <button className="hidden lg:block btn-round absolute top-28 -left-4 z-50">
                    <Collapse />
                </button>
            </main>
        </div>
    );
}
