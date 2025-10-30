import { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";

const ReadPosts = (props) => {
  const [posts, setPosts] = useState(props.data || []);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("Posts")
        .select()
        .order("created_at", { ascending: true });

      if (data && data.length > 0) {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            description={post.description}
            betCount={post.betCount}
          />
        ))
      ) : (
        <h2>No Challenges Yet 😞</h2>
      )}
    </div>
  );
};

export default ReadPosts;