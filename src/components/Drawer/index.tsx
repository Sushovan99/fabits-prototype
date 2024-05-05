import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Close from "@/assets/svgs/Close";
import AnimationBg from "@/assets/images/animation_bg.png";
import Car from "@/assets/images/car.png";

interface Props {
    isOpen: boolean;
    headingText: string;
    subText: string;
    currentStep: number;
    children: React.ReactNode;
    onClose: () => void;
}

const Drawer: React.FunctionComponent<Props> = ({
    isOpen,
    currentStep,
    headingText,
    subText,
    children,
    onClose,
}) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="drawer">
                    <motion.button
                        initial={{
                            y: "60%",
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            type: "just",
                            // delay: 0.3,
                        }}
                        exit={{
                            opacity: 0,
                            y: "60%",
                        }}
                        className="btn-drawer-close z-50"
                        type="button"
                        onClick={onClose}
                    >
                        <Close />
                    </motion.button>

                    <motion.div
                        className="relative rounded-tr-3xl rounded-tl-3xl w-full h-auto z-50 max-h-[80%] overflow-y-scroll overflow-x-hidden hide-scroll"
                        initial={{
                            y: "150%",
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
                        exit={{
                            y: "150%",
                            opacity: 0,
                        }}
                    >
                        <div className="w-full relative">
                            <img
                                src={AnimationBg}
                                loading="eager"
                                alt="animation-bg"
                                className={`w-full ${currentStep === 4 ? "blur-sm" : ""} transition-all`}
                            />

                            <div className="absolute top-6 left-4">
                                <h1 className="heading mb-1">{headingText}</h1>
                                <p className="text-secondaryTextLight font-normal">
                                    {subText}
                                </p>
                            </div>

                            {currentStep === 3 && (
                                <div className="car-animation">
                                    <img className="w-28" src={Car} alt="car" />
                                </div>
                            )}

                            {(currentStep === 1 || currentStep === 2) && (
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
                                    }}
                                >
                                    <img className="w-28" src={Car} alt="car" />
                                </motion.div>
                            )}
                        </div>
                        <div className="gradient min-h-36 px-4 pb-4">
                            {children}
                        </div>
                    </motion.div>

                    <div className="drawer-overlay"></div>
                </div>
            )}
        </AnimatePresence>,
        document.getElementById("project1-body") || document.body
    );
};

export default Drawer;
