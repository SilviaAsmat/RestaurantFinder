import { useState } from "react";
import InputTextBox from "../components/InputTextBox";
import RestaurantsList from "./RestaurantsList";
import usePlaces from "../hooks/usePlaces";

function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, loading, error } = usePlaces({
    query: searchQuery,
    radius: 1000,
    type: "restaurant",
  });

  return (
    <div className="RestaurantsPage">
      <InputTextBox onTextFieldUpdated={setSearchQuery} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      <RestaurantsList data={data.results} />
    </div>
  );
}

export default RestaurantsPage;
