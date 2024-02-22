import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <div>
      User search for {city}{" "}
      <span>
        {results?.data.map((restaurant) => (
          <div>
            found - {restaurant.restaurantName}, {restaurant.city}
          </div>
        ))}
      </span>
    </div>
  );
}
