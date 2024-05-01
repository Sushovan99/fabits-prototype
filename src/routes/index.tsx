import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <div>
            <Link to="/project1">Project 1</Link>
            <Link to="/project2">Project 2</Link>
        </div>
    );
}
