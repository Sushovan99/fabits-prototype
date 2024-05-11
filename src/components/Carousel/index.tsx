import Slider from "react-slick";
import { Settings } from "react-slick";
import CarouselCard from "../Cards/CarouselCard";
import NoteStack from "@/assets/svgs/NoteStack";
import { carouselArray } from "@/assets/constants";

const Carousel: React.FunctionComponent = () => {
    const settings: Settings = {
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className="bg-white lg:rounded-3xl border border-primaryBg lg:shadow-lg lg:shadow-gray-200">
            <div className="flex flex-col gap-2 items-start py-6 px-4 lg:py-0 lg:px-0 lg:pt-8 lg:pl-8 max-w-xs">
                <h1 className="heading-secondary">
                    What financial goal do you want to plan today?
                </h1>
                <p className="text-sm lg:text-base text-primaryTextLight">
                    Select a goal to start planning
                </p>

                <span className="hidden lg:block self-center">
                    <NoteStack />
                </span>
            </div>

            <Slider {...settings} className="pl-4 pb-4">
                {carouselArray.map((item) => (
                    <CarouselCard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        subText={item.subText}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
