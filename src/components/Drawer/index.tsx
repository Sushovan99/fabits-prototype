import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Close from "@/assets/svgs/Close";
import AnimationBg from "@/assets/images/animation_bg.png";
import Car from "@/assets/images/car.png";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
    return createPortal(
        isOpen ? (
            <motion.div
                className="drawer"
                initial={{
                    opacity: 0.5,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    type: "keyframes",
                }}
            >
                <button
                    className="btn-drawer-close z-50"
                    type="button"
                    onClick={onClose}
                >
                    <Close />
                </button>

                <motion.div
                    className="rounded-3xl w-full h-auto z-50"
                    initial={{
                        y: "200%",
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                    }}
                >
                    <div className="w-full relative">
                        <img
                            src={AnimationBg}
                            alt="animation-bg"
                            className="w-full"
                        />

                        <div className="absolute top-6 left-4">
                            <h1 className="heading">Get started with Fabits</h1>
                            <p className="text-secondaryTextLight font-normal">
                                Answer a few questions to begin onboarding
                            </p>
                        </div>

                        <motion.div
                            className="absolute"
                            initial={{
                                left: "-100%",
                                bottom: "24px",
                                width: "112px",
                            }}
                            animate={{
                                left: "100%",
                            }}
                            transition={{
                                type: "tween",
                                repeatType: "loop",
                                ease: "easeOut",
                                duration: 2,
                                repeatDelay: 8,
                                repeat: Infinity,
                                delay: 0.5,
                            }}
                        >
                            <img className="w-28" src={Car} alt="car" />
                        </motion.div>
                    </div>
                    <div className="bg-btnPrimary">
                        <div>
                            <h1>How much trading experience do you have?</h1>
                        </div>
                    </div>
                </motion.div>

                <div className="drawer-overlay"></div>
            </motion.div>
        ) : null,
        document.getElementById("project1-body") || document.body
    );
};

export default Drawer;
