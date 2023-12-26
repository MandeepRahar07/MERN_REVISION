import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../Components/Filter";
import { fetchWatches } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";

const Watches = () => {
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.AppReducer.watches);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    dispatch(fetchWatches(category));
  }, [dispatch, category]);

  const handleFilterChange = (selectedCategories) => {
    setCategory(selectedCategories);
  };

  return (
    <div>
      <Filter onChange={handleFilterChange} />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        {watches.map((watch) => (
          <WatchCard key={watch.id} {...watch} />
        ))}
      </div>
    </div>
  );
};

export default Watches;