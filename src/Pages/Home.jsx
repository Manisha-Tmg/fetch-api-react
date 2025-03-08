import React, { useEffect, useState } from "react";
import "../Css/Home.css";
import { API } from "../env";
import toast from "react-hot-toast";

const Home = () => {
  const [data, setData] = useState([]);
  const [userr, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        console.log(response);
        setData(response.data.event);
        setUserData(response.data.user);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="div-main">
      <h1>Event</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Link</th>
            <th>From</th>
            <th>To</th>
            <th>Event Duration</th>
            <th>Is Unlimited</th>
            <th>Is Add Guest</th>
            <th>Description</th>
            <th>Information</th>
            <th>Guest</th>
            <th>Status</th>
            <th>Location Id</th>
            <th>User Id</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Deleted At</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((datas, index) => (
              <tr key={index}>
                <td>{datas.id || "N/A"}</td>
                <td>{datas.name || "N/A"}</td>
                <td>{datas.link || "N/A"}</td>
                <td>{datas.from || "N/A"}</td>
                <td>{datas.to || "N/A"}</td>
                <td>{datas.event_duration || "N/A"}</td>
                <td>{datas.isUnlimited || "N/A"}</td>
                <td>{datas.isAddGuest || "N/A"}</td>
                <td>{datas.description || "N/A"}</td>
                <td>{datas.information || "N/A"}</td>
                <td>{datas.guests || "N/A"}</td>
                <td>{datas.status || "N/A"}</td>
                <td>{datas.location_id || "N/A"}</td>
                <td>{datas.user_id || "N/A"}</td>
                <td>{datas.created_at || "N/A"}</td>
                <td>{datas.updated_at || "N/A"}</td>
                <td>{datas.deleted_at || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="17">No data</td>
            </tr>
          )}
        </tbody>
      </table>

      <h1>User</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
            <th>Profile</th>
            <th>Language</th>
            <th>Date Format</th>
            <th>Time Format</th>
            <th>Timezone</th>
            <th>Country</th>
            <th>Channel</th>
            <th>Email Verified At</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Deleted At</th>
          </tr>
        </thead>
        <tbody>
          {userr ? (
            <tr>
              <td>{userr.id || "N/A"}</td>
              <td>{userr.name || "N/A"}</td>
              <td>{userr.email || "N/A"}</td>
              <td>{userr.link || "N/A"}</td>
              <td>{userr.profile || "N/A"}</td>
              <td>{userr.language || "N/A"}</td>
              <td>{userr.date_format || "N/A"}</td>
              <td>{userr.time_format || "N/A"}</td>
              <td>{userr.time_zone || "N/A"}</td>
              <td>{userr.country || "N/A"}</td>
              <td>{userr.channel || "N/A"}</td>
              <td>{userr.email_verified_at || "N/A"}</td>
              <td>{userr.created_at || "N/A"}</td>
              <td>{userr.updated_at || "N/A"}</td>
              <td>{userr.deleted_at || "N/A"}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="15">No user data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
