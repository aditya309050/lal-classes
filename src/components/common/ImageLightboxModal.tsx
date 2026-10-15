import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Download, ZoomIn, ExternalLink } from 'lucide-react';

export const ImageLightboxModal: React.FC = () => {
  const { lightbox, closeLightbox } = useApp();

  if (!lightbox) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
      onClick={closeLightbox}
    >
      {/* Top Bar */}
      <div 
        className="w-full flex items-center justify-between text-white pb-3 border-b border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="p-2 rounded-lg bg-red-600/30 text-red-400 border border-red-500/30">
            <ZoomIn className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-white font-['Outfit']">
              {lightbox.title}
            </h3>
            {lightbox.caption && (
              <p className="text-xs text-slate-400 line-clamp-1">{lightbox.caption}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={lightbox.url}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
            title="Download Image"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Download</span>
          </a>

          <a
            href={lightbox.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
            title="Open Original File"
          >
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">Full View</span>
          </a>

          <button
            onClick={closeLightbox}
            className="p-2 rounded-lg bg-white/10 hover:bg-red-600/80 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div 
        className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto max-h-[82vh]"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={lightbox.url}
          alt={lightbox.title}
          className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />
      </div>

      {/* Bottom bar */}
      <div 
        className="text-center text-xs text-slate-400 pt-2 border-t border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <p>Lal Classes Concept School (Bihar Sharif) Official Document Archive • Click anywhere outside to close</p>
      </div>
    </div>
  );
};
