import Filter from "@/assets/svgs/Filter";
import ArrowDropdown from "@/assets/svgs/ArrowDropdown";
import Sort from "@/assets/svgs/Sort";

const FilterGroup: React.FunctionComponent = () => {
    return (
        <div className="flex items-center gap-6">
            <button className="hidden md:flex text-linkText font-medium items-center gap-2">
                <span>Filters</span>
                <Filter />
            </button>

            <div className="hidden md:flex items-center gap-2">
                <label className="text-[#727272]">Sort by:</label>
                <button className="text-linkText font-medium flex items-center gap-1">
                    <span>Progress (High to low)</span>
                    <ArrowDropdown />
                </button>
            </div>

            <input
                className="search flex-1"
                type="search"
                placeholder="Search"
            />

            <button className="btn-round p-3 md:hidden">
                <Sort />
            </button>
        </div>
    );
};

export default FilterGroup;
