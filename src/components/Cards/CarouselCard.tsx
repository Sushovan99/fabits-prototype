interface Props {
    title: string;
    subText: string;
    icon: JSX.Element;
}

const CarouselCard: React.FunctionComponent<Props> = ({
    icon,
    title,
    subText,
}) => {
    return (
        <div className="p-4 border border-primaryBg rounded-3xl flex flex-col gap-4 max-w-36">
            <span className="card-icon">{icon}</span>

            <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-xs text-primaryTextLight">{subText}</p>
            </div>
        </div>
    );
};

export default CarouselCard;
