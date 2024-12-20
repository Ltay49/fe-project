import { useState } from "react";
import axiosInstance from "../../Instance";

export default function DeleteBtn({ commentId, setComments, setDeleteSuccess }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteError, setIsDeleteError] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    setDeleteSuccess(false); 
    setIsDeleteError(false);

    axiosInstance
      .delete(`/comments/${commentId}`)
      .then(() => {
        setDeleteSuccess(true);
        setComments(prevComments => prevComments.filter(comment => comment.comment_id !== commentId));
      })
      .catch((err) => {
        console.error("Error deleting comment:", err);
        setIsDeleteError(true);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  };

  return (
    <div>
      {isLoading ? (
        <p>Deleting...</p>
      ) : (
        <button onClick={handleDelete}>Delete</button>
      )}

      {isDeleteError && !isLoading && (
        <p className="error-message">Failed to delete the comment. Please try again later.</p>
      )}
    </div>
  );
}