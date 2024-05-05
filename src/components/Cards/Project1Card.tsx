interface Props {
    icon: JSX.Element;
    cardLabel: string;
    labelValue: string;
    fetchedVia: string;
    cardSecondaryLabel: string;
    cardSecondaryLabelValue: string;
}

const Project1Card: React.FunctionComponent<Props> = ({
    cardLabel,
    cardSecondaryLabel,
    cardSecondaryLabelValue,
    fetchedVia,
    icon,
    labelValue,
}) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sushovan-biswas-89019a217/"
            className="relative bg-white/90 rounded-xl p-4 shadow-xl shadow-black/10"
        >
            <div className="flex items-start gap-3 mb-3">
                <span className="bg-secondaryTextDark p-4 rounded-full">
                    {icon}
                </span>

                <div>
                    <h6 className="text-secondaryTextDark font-semibold text-lg">
                        {cardLabel}
                    </h6>
                    <p className="uppercase text-[#5E78AE]">{labelValue}</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex flex-col items-start">
                    <label className="text-[#5E78AE] text-sm font-medium">
                        {fetchedVia}
                    </label>
                    <span className="text-secondaryTextDark font-semibold">
                        NDSL
                    </span>
                </div>
                <div className="flex flex-col items-start">
                    <label className="text-[#5E78AE] font-medium text-sm">
                        {cardSecondaryLabel}
                    </label>
                    <span className="text-secondaryTextDark font-semibold">
                        {cardSecondaryLabelValue}
                    </span>
                </div>
            </div>
        </a>
    );
};

export default Project1Card;
