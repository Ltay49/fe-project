import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "../../Instance";

export default function SortBy({ setArticles }) {
 
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSort, setIsSort] = useState(searchParams.get("sort_by") || ""); 
  const [isOrder, setIsOrder] = useState(searchParams.get("order_by") || "");

  const selectSortHandler = (e) => {
    e.preventDefault();
    setIsSort(e.target.value); 
  };

 
  const selectOrderHandler = (e) => {
    e.preventDefault();
    setIsOrder(e.target.value); 
  };


  useEffect(() => {
    if (isSort) {
      sortArticles(); 
    }
  }, [isSort, isOrder]); 

  const sortArticles = () => {
    axiosInstance
      .get(`/articles?sort_by=${isSort}&order_by=${isOrder}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  useEffect(() => {
    const params = {};
    if (isSort) params.sort_by = isSort;
    if (isOrder) params.order_by = isOrder;

    setSearchParams(params);
  }, [isSort, isOrder, setSearchParams]);

  return (
    <>
      <label>SORT BY:</label>
      <select className="selector" value={isSort} onChange={selectSortHandler}>
        <option value="" disabled>
          Select...
        </option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <label>ORDER BY:</label>
      <select className="selector" value={isOrder} onChange={selectOrderHandler}>
        <option value="" disabled>
          ASC/DESC
        </option>
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </select>
    </>
  );
}