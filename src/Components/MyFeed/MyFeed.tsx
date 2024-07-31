import "./MyFeed.css"
import { useState } from "react";
import Post from "../Post/Post";
import CreatePost from "../CreatePost/CreatePost";

const MyFeed = () => {
  const [posts, setPosts] = useState<{ userProfilePicture: string; userName: string; timePosted: string; title: string; content: string; mediaUrl?: string }[]>([]);

  const handleCreatePost = (title: string, content: string, media: FileList | null) => {
    let mediaUrl;
    if (media && media[0]) {
      mediaUrl = URL.createObjectURL(media[0]);
    }
    const newPost = {
      userProfilePicture: '/path/to/profile-picture.jpg',
      userName: 'Current User',
      timePosted: new Date().toLocaleString(),
      title,
      content,
      mediaUrl
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="my-feeds">
         <CreatePost userProfilePicture="/path/to/profile-picture.jpg" onCreatePost={handleCreatePost} />
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            userProfilePicture={post.userProfilePicture}
            userName={post.userName}
            timePosted={post.timePosted}
            title={post.title}
            content={post.content}
            mediaUrl={post.mediaUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default MyFeed;
