import { createLazyFileRoute } from "@tanstack/react-router";
import SideNav from "@/components/Sidenav";
import Collapse from "@/assets/svgs/Collapse";
import Carousel from "@/components/Carousel";
import FilterGroup from "@/components/Filters";
import Project2Card from "@/components/Cards/Project2Card";

export const Route = createLazyFileRoute("/project2")({
    component: Project2,
});

function Project2() {
    return (
        <div className="bg-project2Bg min-h-screen w-full">
            <div className="hidden lg:block">
                <SideNav />
            </div>

            <main className="lg:ml-80 py-12 px-12 relative">
                <button className="hidden lg:block btn-round fixed top-28 left-[304px] z-50">
                    <Collapse />
                </button>

                <Carousel />

                <section className="mt-6 bg-white rounded-3xl p-8 border border-primaryBg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 flex-wrap">
                        <h1 className="heading-secondary shrink-0">
                            Track current goals
                        </h1>

                        <FilterGroup />
                    </div>

                    <hr className="my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                    </div>
                </section>
            </main>
        </div>
    );
}
