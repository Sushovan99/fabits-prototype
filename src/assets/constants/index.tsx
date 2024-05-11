import Retirement from "../svgs/Retirement";
import Emergency from "../svgs/Emergency";
import Wedding from "../svgs/Wedding";
import Vacation from "../svgs/Vacation";

interface ICarousel {
    id: number;
    icon: JSX.Element;
    title: string;
    subText: string;
}

export const carouselArray: ICarousel[] = [
    {
        id: 1,
        icon: <Retirement />,
        title: "Retirement",
        subText: "Your old age, taken care of",
    },
    {
        id: 2,
        icon: <Emergency />,
        title: "Emergency",
        subText: "Be prepared at all times",
    },
    {
        id: 3,
        icon: <Wedding />,
        title: "Wedding",
        subText: "Plan your dream wedding today",
    },
    {
        id: 4,
        icon: <Vacation />,
        title: "Vacation",
        subText: "Never too late for the Bahamas!",
    },
    {
        id: 5,
        icon: <Retirement />,
        title: "Education",
        subText: "Build your career, tension-free",
    },
    {
        id: 6,
        icon: <Retirement />,
        title: "Retirement",
        subText: "Your old age, taken care of",
    },
    {
        id: 7,
        icon: <Emergency />,
        title: "Emergency",
        subText: "Be prepared at all times",
    },
    {
        id: 8,
        icon: <Wedding />,
        title: "Wedding",
        subText: "Plan your dream wedding today",
    },
    {
        id: 9,
        icon: <Vacation />,
        title: "Vacation",
        subText: "Never too late for the Bahamas!",
    },
    {
        id: 10,
        icon: <Retirement />,
        title: "Education",
        subText: "Build your career, tension-free",
    },
    {
        id: 11,
        icon: <Retirement />,
        title: "Retirement",
        subText: "Your old age, taken care of",
    },
    {
        id: 12,
        icon: <Emergency />,
        title: "Emergency",
        subText: "Be prepared at all times",
    },
    {
        id: 13,
        icon: <Wedding />,
        title: "Wedding",
        subText: "Plan your dream wedding today",
    },
    {
        id: 14,
        icon: <Vacation />,
        title: "Vacation",
        subText: "Never too late for the Bahamas!",
    },
];
