import { Link } from "@tanstack/react-router";
import Logo from "@/assets/svgs/fabits_logo.svg";
import Menu from "@/assets/svgs/Menu";
import Notification from "@/assets/svgs/Notification";
import Account from "@/assets/svgs/Account";

const Header: React.FunctionComponent = () => {
    return (
        <header className="flex px-4 py-5 justify-between items-center border-b-2 rounded-sm sticky top-0 left-0">
            <div className="flex item-center gap-4">
                <button type="button">
                    <Menu />
                </button>
                <Link>
                    <img src={Logo} alt="fabits-logo" />
                </Link>
            </div>

            <div className="flex item-center gap-4">
                <button type="button">
                    <Notification />
                </button>
                <button type="button">
                    <Account />
                </button>
            </div>
        </header>
    );
};

export default Header;
