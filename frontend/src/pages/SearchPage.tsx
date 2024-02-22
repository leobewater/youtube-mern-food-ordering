import { useSearchRestaurants } from "@/api/RestaurantApi";
import { SearchBar } from "@/components/SearchBar";
import { SearchResultInfo } from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    <span>Loading...</span>;
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">Insert cuisines here</div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          onSubmit={() => {}}
          placeHolder="Search by Cuisine or Restaurant Name"
        />
        <SearchResultInfo total={results.pagination.total} city={city} />
      </div>
    </div>
  );
}
