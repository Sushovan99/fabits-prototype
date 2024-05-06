import NoteStack from "@/assets/svgs/NoteStack";

const Carousel: React.FunctionComponent = () => {
    return (
        <div className="bg-white lg:rounded-3xl border border-primaryBg shadow-lg shadow-gray-200">
            <div className="flex flex-col gap-2 items-start pt-8 pl-8 max-w-xs">
                <h1 className="heading-secondary">
                    What financial goal do you want to plan today?
                </h1>
                <p className="text-base text-primaryTextLight">
                    Select a goal to start planning
                </p>

                <span className="self-center">
                    <NoteStack />
                </span>
            </div>

            <div></div>
        </div>
    );
};

export default Carousel;
