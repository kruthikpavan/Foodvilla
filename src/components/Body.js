import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

// What is state
// what is React Hooks? - functions,
// What is useState

function filterData(searchText, restaurants) {
   const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
   )

   return filterData
}

const Body = () => {
   const [restaurants, setRestaurants] = useState([])
   const [filteredRestaurants, setFilteredRestaurants] = useState([])
   const [searchText, setSearchText] = useState("")

   useEffect(() => {
      fetchApi()
   }, [])

   const fetchApi = async () => {
      const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      )
      const json = await data.json()
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
   }
   return restaurants.length == 0 ? (
      <Shimmer />
   ) : (
      <>
         <div className="search-container">
            <input
               type="text"
               className="search-input"
               placeholder="Search"
               value={searchText}
               onChange={(e) => {
                  setSearchText(e.target.value)
               }}
            />
            <button
               className="search-btn"
               onClick={() => {
                  //need to filter the data
                  const data = filterData(searchText, restaurants)
                  // update the state - restaurants
                  setFilteredRestaurants(data)
               }}
            >
               Search
            </button>
         </div>
         <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => {
               return (
                  <RestaurantCard
                     {...restaurant.data}
                     key={restaurant.data.id}
                  />
               )
            })}
         </div>
      </>
   )
}

export default Body
