import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import Step from "@/components/OnboardingSteps/Step";
import ButtonGroup from "@/components/ButtonGroup";
import ArrowRight from "@/assets/svgs/ArrowRight";
import ArrowLeft from "@/assets/svgs/ArrowLeft";

export const Route = createLazyFileRoute("/project1")({
    component: Project1,
});

const experienceArray = [
    {
        id: "None",
        expRange: "<1Y",
    },
    {
        id: "Beginner",
        expRange: "1Y-3Y",
    },
    {
        id: "Mid",
        expRange: "3Y-5Y",
    },
    {
        id: "Pro",
        expRange: ">5Y",
    },
];

const verficationArray = [
    {
        id: "Manual",
    },
    {
        id: "Automatic",
    },
];

function Project1() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [tradingExp, setTradingExp] = useState("Beginner");
    const [verificationMethod, setVerificationMethod] = useState("Manual");
    const [currentStep, setCurrentStep] = useState(1);

    const getDrawerHeadingAndSubHeading = (currentStep: number) => {
        if (currentStep === 1 || currentStep === 2) {
            return {
                headingText: "Get started with Fabits",
                subText: "Answer a few questions to begin onboarding",
            };
        } else if (currentStep === 3) {
            return {
                headingText: "Fetching your PAN Details",
                subText: "Getting your PAN details by your chosen method",
            };
        } else {
            return {
                headingText: "Verify your details",
                subText: "Aadhaar link found",
            };
        }
    };

    useEffect(() => {
        setIsDrawerOpen(true);
    }, []);

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
                    isLoading={currentStep === 3}
                    headingText={
                        getDrawerHeadingAndSubHeading(currentStep).headingText
                    }
                    subText={getDrawerHeadingAndSubHeading(currentStep).subText}
                    onClose={() => {
                        setIsDrawerOpen(false);
                        setCurrentStep(1);
                    }}
                >
                    {currentStep === 1 ? (
                        <Step
                            currentStep={currentStep}
                            stepHeading="How much trading experience do you have ?"
                        >
                            <div className="flex items-center justify-between mb-8">
                                {experienceArray.map((item) => (
                                    <ButtonGroup
                                        key={item.id}
                                        id={item.id}
                                        expRange={item.expRange}
                                        currentSelection={tradingExp}
                                        setCurrentSelection={setTradingExp}
                                    />
                                ))}
                            </div>

                            <div className="w-full">
                                <button
                                    className="btn-next"
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                >
                                    <span>Next</span>

                                    <span>
                                        <ArrowRight />
                                    </span>
                                </button>
                            </div>
                        </Step>
                    ) : null}

                    {currentStep === 2 ? (
                        <Step
                            currentStep={currentStep}
                            stepHeading="Please enter your PAN details to complete verification"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-primaryTextLight">
                                    Verification method
                                </span>

                                <div className="flex items-center mb-6">
                                    {verficationArray.map((item) => (
                                        <ButtonGroup
                                            key={item.id}
                                            id={item.id}
                                            currentSelection={
                                                verificationMethod
                                            }
                                            setCurrentSelection={
                                                setVerificationMethod
                                            }
                                        />
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <label
                                        htmlFor="PAN"
                                        className="text-primaryTextLight"
                                    >
                                        PAN Card Number
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue={"DKWPAXXXXM"}
                                        id="PAN"
                                        className="pan-input"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        className="btn-back"
                                        type="button"
                                        onClick={() => setCurrentStep(1)}
                                    >
                                        <ArrowLeft />
                                    </button>

                                    <button
                                        className="btn-next"
                                        type="button"
                                        onClick={() => setCurrentStep(3)}
                                    >
                                        <span>Complete</span>
                                        <span>
                                            <ArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Step>
                    ) : null}
                </Drawer>
            </main>
        </div>
    );
}
