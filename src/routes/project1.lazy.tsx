import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "@/components/header";

export const Route = createLazyFileRoute("/project1")({
    component: Project1,
});

function Project1() {
    return (
        <div className="bg-primaryBg h-screen p-12 shadow-lg shadow-gray-500">
            <main className="bg-white mx-auto max-w-[384px] h-full rounded-sm relative">
                <Header />
            </main>
        </div>
    );
}
