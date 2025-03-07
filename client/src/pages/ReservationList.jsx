import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setReservationList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

const ReservationList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const reservationList = useSelector((state) => state.user.reservationList) || [];

  const dispatch = useDispatch();

  const getReservationList = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/users/${userId}/reservations`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(setReservationList(data));
      } else {
        console.error("Failed to fetch reservation list");
      }
    } catch (err) {
      console.log("Fetch Reservation List failed!", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getReservationList();
    }
  }, [userId]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Reservation List</h1>
      <div className="list">
        {Array.isArray(reservationList) && reservationList.length > 0 ? (
          reservationList.map(({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => (
            <ListingCard
              key={listingId._id}
              listingId={listingId._id}
              creator={hostId._id}
              listingPhotoPaths={listingId.listingPhotoPaths}
              city={listingId.city}
              province={listingId.province}
              country={listingId.country}
              category={listingId.category}
              startDate={startDate}
              endDate={endDate}
              totalPrice={totalPrice}
              booking={booking}
            />
          ))
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReservationList;
