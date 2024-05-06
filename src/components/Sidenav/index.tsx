import FabitsLogo from "@/assets/svgs/fabits_logo.svg";
import Notification from "@/assets/svgs/Notification";
import More from "@/assets/svgs/More";
import HomeIcon from "@/assets/svgs/HomeIcon";
import PlanGoal from "@/assets/svgs/PlanGoal";
import Bubble from "@/assets/svgs/Bubble";
import Insurance from "@/assets/svgs/Insurance";
import Insurance2 from "@/assets/svgs/Insurance2";
import BankIPO from "@/assets/svgs/BankIPO";
import AdminPanel from "@/assets/svgs/AdminPanel";
import AvatarImg from "@/assets/images/avatar.png";

const SideNav: React.FunctionComponent = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo-section mb-12">
                <span>
                    <img src={FabitsLogo} alt="Fabits-logo" className="h-8" />
                </span>

                <button className="btn-round">
                    <Notification />
                </button>
            </div>

            <div className="relative">
                <div className="px-6">
                    <div className="nav-avatar-section mb-6">
                        <div className="flex items-start gap-4">
                            <a href="#">
                                <img
                                    src={AvatarImg}
                                    alt="avatar"
                                    className="h-14"
                                />
                            </a>

                            <div className="flex flex-col">
                                <span className="text-primaryTextDark font-semibold">
                                    Dhruv S.
                                </span>
                                <span className="text-[#5D5D5D] text-sm">
                                    dhruv@fabits.com
                                </span>
                            </div>
                        </div>

                        <button className="w-3 h-fit flex items-center justify-center">
                            <More />
                        </button>
                    </div>
                </div>
            </div>

            <div className="nav-menu-container">
                <div className="px-6">
                    <a href="#" className="nav-link">
                        <HomeIcon />
                        <span>Home</span>
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="uppercase text-[#6E6E6E] text-base tracking-wide px-6">
                        Finance
                    </h6>

                    <div className="px-6 flex flex-col gap-2">
                        <a href="#" className="nav-link active">
                            <PlanGoal />
                            <span>Plan a Goal</span>
                        </a>

                        <a href="#" className="nav-link">
                            <Bubble />
                            <span>Discover Top Funds</span>
                        </a>

                        <a href="#" className="nav-link">
                            <Insurance />
                            <span>My Investments</span>
                        </a>

                        <a href="#" className="nav-link">
                            <BankIPO />
                            <span>IPO</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h6 className="uppercase text-[#6E6E6E] text-base tracking-wide px-6">
                        Insurance
                    </h6>

                    <div className="px-6 flex flex-col gap-2">
                        <a href="#" className="nav-link">
                            <AdminPanel />
                            <span>Insurance</span>
                        </a>

                        <a href="#" className="nav-link">
                            <Insurance2 />
                            <span>Insurance</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideNav;
