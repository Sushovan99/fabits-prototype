import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/project2")({
    component: Project2,
});

function Project2() {
    return <div>Project 2</div>;
}
