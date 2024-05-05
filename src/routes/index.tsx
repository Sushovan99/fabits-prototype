import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Logo from "@/assets/svgs/fabits_logo.svg";

function Index() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-primaryBg">
            <div className="min-w-[50%] min-h-[45%] border border-gray-300 rounded-xl p-8 bg-white shadow-sm relative flex items-center justify-center">
                <span className="absolute top-8 left-8 bg-white">
                    <img src={Logo} />
                </span>

                <div className="flex item-center gap-6">
                    <Link to="/project1" className="external_link">
                        Project 1 <FaExternalLinkAlt />
                    </Link>
                    <Link to="/project2" className="external_link">
                        Project 2 <FaExternalLinkAlt />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Index;
