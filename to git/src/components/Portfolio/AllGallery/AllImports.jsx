import AllGallery from './AllGallery';
import Banners from './Banners';
import InstagramStories from './InstagramStories';
import YouTubeDesign from './YouTubeDesign';
import YouTubeThumbnails from './YouTubeThumbnails';
import { useState } from 'react';

export default function AllImports() {
    const [SelectedCategory, setSelectedCategory] = useState('All');
    const renderComponents = () => {
        switch (SelectedCategory) {
            case 'All':
                return <AllGallery />;
            case 'Banners':
                return <Banners />;
            case 'InstagramStories':
                return <InstagramStories />;
            case 'YouTubeDesign':
                return <YouTubeDesign />;
            case 'YouTubeThumbnails':
                return <YouTubeThumbnails />;
            default:
                <AllGallery />;
        }
    };
    return <div style={{ display: 'flex' }}>Где я </div>;
}
