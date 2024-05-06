import Filter from "@/assets/svgs/Filter";
import ArrowDropdown from "@/assets/svgs/ArrowDropdown";

const FilterGroup: React.FunctionComponent = () => {
    return (
        <div className="flex items-center gap-6">
            <button className="text-linkText font-medium flex items-center gap-2">
                <span>Filters</span>
                <Filter />
            </button>

            <div className="flex items-center gap-2">
                <label className="text-[#727272]">Sort by:</label>
                <button className="text-linkText font-medium flex items-center gap-1">
                    <span>Progress (High to low)</span>
                    <ArrowDropdown />
                </button>
            </div>

            <input className="search" type="search" placeholder="Search" />
        </div>
    );
};

export default FilterGroup;
