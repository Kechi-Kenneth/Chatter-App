import React, { useState } from 'react';
import './Post.css';

interface Comment {
  username: string;
  text: string;
}

interface PostProps {
  userProfilePicture: string;
  userName: string;
  timePosted: string;
  title: string;
  content: string;
  mediaUrl?: string;
}

const Post: React.FC<PostProps> = ({ userProfilePicture, userName, timePosted, title, content, mediaUrl }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { username: 'Current User', text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={userProfilePicture} alt="User Profile" className="profile-picture" />
        <div>
          <span className="user-name">{userName}</span>
          <span className="time-posted">{timePosted}</span>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
      {mediaUrl && (
        mediaUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? 
          <img src={mediaUrl} alt="Post Media" /> : 
          <video controls>
            <source src={mediaUrl} />
          </video>
      )}
      <div className="post-actions">
        <button>Like</button>
        <button>Share</button>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="comment-username">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
          </div>
        ))}
        <div className="add-comment">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleAddComment}>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;

