import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
// import SideNav from "@/components/Sidenav";
// import Collapse from "@/assets/svgs/Collapse";
import Carousel from "@/components/Carousel";
// import FilterGroup from "@/components/Filters";
// import Project2Card from "@/components/Cards/Project2Card";
import ChevronLeft from "@/assets/svgs/ChevronLeft";
import "slick-carousel/slick/slick.css";
import FilterGroup from "@/components/Filters";

export const Route = createLazyFileRoute("/project2")({
    component: Project2,
});

function Project2() {
    return (
        <div className="bg-project2Bg min-h-screen w-full relative">
            <Header />

            <div className="flex items-center gap-2 my-4 px-4">
                <button className="p-2">
                    <ChevronLeft />
                </button>

                <h6 className="text-base font-semibold">Plan a Goal</h6>
            </div>

            <Carousel />

            <section className="mt-2 lg:mt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 flex-wrap bg-white lg:bg-transparent">
                    <h1 className="heading-secondary shrink-0">
                        Track current goals
                    </h1>

                    <FilterGroup />
                </div>
            </section>
        </div>
    );
}

/*
<div className="bg-project2Bg min-h-screen w-full">
            <div className="hidden lg:block">
                <SideNav />
            </div>

            <main className="lg:ml-80 py-12 lg:px-12 relative">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-min">
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                    </div>
                </section>
            </main>
        </div>
*/
