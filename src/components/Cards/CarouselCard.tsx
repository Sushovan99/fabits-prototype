interface Props {
    lastChild: boolean;
    title: string;
    subText: string;
    icon: JSX.Element;
}

const CarouselCard: React.FunctionComponent<Props> = ({
    icon,
    title,
    subText,
    lastChild,
}) => {
    return (
        <div
            className={`card-carousel p-4 ${!lastChild ? "mr-4" : ""} border border-primaryBg lg:border-0 rounded-3xl flex flex-col gap-4 max-w-36`}
        >
            <span className="card-icon">{icon}</span>

            <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold lg:text-lg">{title}</h3>
                <p className="text-xs text-primaryTextLight lg:text-sm">
                    {subText}
                </p>
            </div>
        </div>
    );
};

export default CarouselCard;
