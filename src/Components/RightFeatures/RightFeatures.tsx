import SuggestPages from "./SuggestPages/SuggestedPages";
import './RightFeatures.css'

interface Suggestion {
  id: number;
  name: string;
  job: string;
  profileImage: string;
}

const suggestionsData: Suggestion[] = [
  { id: 1, name: 'Tech News', job: 'Technology', profileImage: 'path_to_image1' },
  { id: 2, name: 'Design Inspirations', job: 'Design', profileImage: 'path_to_image2' },
  { id: 3, name: 'Productivity Hacks', job: 'Productivity', profileImage: 'path_to_image3' },
  { id: 4, name: 'Developer Hub', job: 'Development', profileImage: 'path_to_image4' },
  { id: 5, name: 'Marketing Gurus', job: 'Marketing', profileImage: 'path_to_image5' },
  { id: 6, name: 'Sales Strategies', job: 'Sales', profileImage: 'path_to_image6' }
];

const RightFeatures = () => {
  return (
    <div className="right-features">
    <SuggestPages suggestions={suggestionsData} />
    <SuggestPages suggestions={suggestionsData} />
    <SuggestPages suggestions={suggestionsData} />
    </div>
  )
}

export default RightFeatures
