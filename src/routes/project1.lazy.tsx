import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";

export const Route = createLazyFileRoute("/project1")({
    component: Project1,
});

function Project1() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="bg-primaryBg h-screen p-12">
            <main
                className="bg-white mx-auto max-w-[420px] h-full rounded-sm relative flex flex-col"
                id="project1-body"
            >
                <Header />

                <div className="text-center h-full flex items-center justify-center">
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        Get started
                    </button>
                </div>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                />
            </main>
        </div>
    );
}
