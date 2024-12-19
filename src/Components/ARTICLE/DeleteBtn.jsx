import { useState } from "react";
import axiosInstance from "../../Instance";
import { useParams } from "react-router-dom";

export default function DeleteBtn({ commentId, setComments, comments }) {
  const { articleid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  const handleDelete = () => {
    axiosInstance
      .delete(`/comments/${commentId}`)
      .then((res) => {
        axiosInstance
          .get(`/articles/${articleid}/comments`)
          .then((response) => {
            setComments(response.data);
            setIsLoading(false); 
          })
          .catch((err) => {
            console.error("Error fetching updated comments:", err);
            setIsError(true);
          });
      })
      .catch((err) => {
        console.error("Error deleting comment:", err);
        setIsError(true);
      });
  };

  return (
    <div>
      {!isLoading ? (
        <p>Deleting...</p>
      ) : (
        <button onClick={handleDelete}>Delete</button>
      )}

      {isError && isLoading && (
        <p className="error-message">Failed to delete the comment. Please try again later.</p>
      )}
    </div>
  );
}