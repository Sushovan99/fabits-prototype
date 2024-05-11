const Project2Card: React.FunctionComponent = () => {
    return (
        <a
            href="https://www.linkedin.com/in/sushovan-biswas-89019a217/"
            target="_blank"
            rel="noreferrer"
            className="p-6 border border-primaryBg rounded-3xl"
        >
            <div className="flex items-start gap-4 flex-nowrap">
                <div className="h-16 w-16 xl:w-20 xl:h-20 rounded-2xl bg-[#D9D9D9] shrink-0"></div>
                <h2 className="text-primaryTextDark font-semibold text-base xl:text-lg">
                    Dhairyadev & Sayali's Vacation Plan 1
                </h2>
            </div>

            <hr className="my-6" />

            <div className="flex justify-between flex-wrap mb-3">
                <div className="flex flex-col">
                    <label className="text-textLabel text-sm">
                        Goal Progress
                    </label>
                    <span className="text-primaryTextDark font-semibold">
                        ₹ 11,24,00,000
                    </span>
                </div>

                <div className="flex flex-col">
                    <label className="text-textLabel text-sm">
                        Goal Amount
                    </label>
                    <span className="text-primaryTextDark font-semibold">
                        ₹ 15,00,00,000
                    </span>
                </div>
            </div>

            <div className="flex justify-between flex-wrap">
                <div className="flex flex-col">
                    <label className="text-textLabel text-sm">
                        Goal Progress
                    </label>
                    <span className="text-primaryTextDark font-semibold">
                        ₹ 11,24,00,000
                    </span>
                </div>

                <div className="flex flex-col">
                    <label className="text-textLabel text-sm">
                        Goal Amount
                    </label>
                    <span className="text-primaryTextDark font-semibold">
                        ₹ 15,00,00,000
                    </span>
                </div>
            </div>
        </a>
    );
};

export default Project2Card;
