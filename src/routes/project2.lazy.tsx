import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import SideNav from "@/components/Sidenav";
// import Collapse from "@/assets/svgs/Collapse";
import Carousel from "@/components/Carousel";
// import FilterGroup from "@/components/Filters";
import Project2Card from "@/components/Cards/Project2Card";
import ChevronLeft from "@/assets/svgs/ChevronNavigateLeft";
import Info from "@/assets/svgs/Info";
import "slick-carousel/slick/slick.css";
import FilterGroup from "@/components/Filters";

export const Route = createLazyFileRoute("/project2")({
    component: Project2,
});

function Project2() {
    return (
        <div className="bg-project2Bg min-h-screen w-full relative">
            <Header />

            <aside className="hidden lg:block">
                <SideNav />
            </aside>

            <div className="lg:ml-80">
                <div className="flex items-center gap-2 my-4 px-4 lg:hidden">
                    <button className="p-2 rounded-full border border-transparent hover:border-primaryBg active:border-primaryBg hover:bg-white/80 active:bg-white/80">
                        <ChevronLeft />
                    </button>

                    <h6 className="text-base font-semibold">Plan a Goal</h6>
                </div>

                <div className="lg:px-8 lg:pt-12 z-20 overflow-x-hidden">
                    <Carousel />
                </div>

                <main className="my-2 lg:my-6 lg:mx-8 bg-white lg:px-6 rounded-3xl lg:border lg:border-primaryBg">
                    <section className="flex flex-col md:flex-row md:items-center justify-between gap-3 flex-wrap bg-white py-6 px-4">
                        <h1 className="heading-secondary shrink-0">
                            Track current goals
                        </h1>

                        <FilterGroup />
                    </section>

                    <section className="flex justify-center py-3 bg-project2Bg md:hidden">
                        <div className="inline-flex gap-1 items-center w-fit">
                            <Info />
                            <span className="text-primaryTextLight text-sm">
                                Tap on a card to view more information
                            </span>
                        </div>
                    </section>

                    <section className="px-4 py-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 min-[1800px]:grid-cols-4 gap-6 bg-white">
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                        <Project2Card />
                    </section>
                </main>
            </div>
        </div>
    );
}
