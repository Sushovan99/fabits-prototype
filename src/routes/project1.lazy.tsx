import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/project1")({
    component: Project1,
});

function Project1() {
    return <div>Project 1</div>;
}
