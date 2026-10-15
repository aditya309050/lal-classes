import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Camera, 
  ZoomIn, 
  Download, 
  Calendar, 
  Filter 
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../../data/mockData';

interface GallerySectionProps {
  isHome?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ isHome: propIsHome }) => {
  const { activeView, openLightbox } = useApp();
  const isHome = propIsHome !== undefined ? propIsHome : activeView === 'home';
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Cultural' | 'Celebration' | 'Campus' | 'Leadership'>('ALL');

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => {
    if (selectedCategory === 'ALL') return true;
    return photo.category === selectedCategory;
  });

  return (
    <div className="bg-slate-50 py-10 lg:py-14">
      <div className="w-[94%] lg:w-[85%] mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Header matching Gallery.aspx */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider">
            Campus Archives & Moments
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-['Outfit']">
            Our <span className="text-[#990000]">Gallery</span>
          </h1>
          <p className="text-sm text-slate-600">
            Moments of academic celebration, Cultural Programmes, Saraswati Puja, and campus events at Lal Classes Concept School.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(['ALL', 'Cultural', 'Celebration', 'Campus', 'Leadership'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'ALL' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid matching table layout of Gallery.aspx with modern cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.imageUrl, photo.title, photo.caption)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col"
            >
              <div className="relative h-60 bg-slate-900 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="px-3.5 py-2 bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow">
                    <ZoomIn className="w-4 h-4" /> View Fullscreen
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-xs">
                    {photo.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 font-['Outfit'] group-hover:text-red-700 transition">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>

                {photo.date && (
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-red-600" />
                      <span>{photo.date}</span>
                    </span>
                    <span className="text-red-700 font-semibold group-hover:underline">Inspect →</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
