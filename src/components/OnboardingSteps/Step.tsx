interface Props {
    currentStep: number;
    stepHeading: string;
    children: React.ReactNode;
}

const Step: React.FunctionComponent<Props> = ({
    stepHeading,
    currentStep,
    children,
}) => {
    return (
        <>
            <div className="flex items-baseline gap-4">
                <h1 className="heading-steps">{stepHeading}</h1>
                <span className="bg-primaryTextDark text-white text-sm font-medium py-[3px] px-2 rounded-full">
                    {currentStep}/2
                </span>
            </div>

            <div className="mt-6">{children}</div>
        </>
    );
};

export default Step;
