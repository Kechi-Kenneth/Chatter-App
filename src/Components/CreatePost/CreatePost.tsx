import React, { useState } from 'react';
import './CreatePost.css';

interface CreatePostProps {
  userProfilePicture: string;
  onCreatePost: (title: string, content: string, media: FileList | null) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ userProfilePicture, onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreatePost(title, content, media);
    setTitle('');
    setContent('');
    setMedia(null);
  };

  return (
    
    <div className="create-post">
      <div className='post-something-paragraph'> <p>Post Something</p></div>
      <div className='post-box'>

      <div className="profile-picture">
        <img src={userProfilePicture} alt="icon" />
      </div>
      <div>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setMedia(e.target.files)}
        />
        <button type="submit">Publish</button>
      </form>
      </div>
      </div>

    </div>
  );
};

export default CreatePost;

