
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Instance";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
   axiosInstance
      .get("/topics")
      .then((response) => {
        setTopics(response.data.topics);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  return (
    <div className="topics-box">
        <ul>
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            topics.map((topic) => (
              <li className="topic" key={topic.slug}>
                <Link
                  id="topic"
                  to={`/TopicsPage/${topic.slug}`}
                  className="dropdown-link"
                >
                  {topic.slug}
                </Link>
              </li>
            ))
          )}
        </ul>
    </div>
  );
}