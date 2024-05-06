import { createLazyFileRoute } from "@tanstack/react-router";
import SideNav from "@/components/Sidenav";
import Collapse from "@/assets/svgs/Collapse";
import Carousel from "@/components/Carousel";
import FilterGroup from "@/components/Filters";

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

                <Carousel />

                <section className="mt-6 bg-white rounded-3xl p-8 border border-primaryBg">
                    <div className="flex items-center justify-between">
                        <h1 className="heading-secondary shrink-0">
                            Track current goals
                        </h1>

                        <FilterGroup />
                    </div>

                    <hr className="my-6" />
                </section>
            </main>
        </div>
    );
}
