import { useState, useMemo } from 'react';
import CategoryItem from '../components/ui/CategoryItem';
import ExperienceCard from '../components/ui/ExperienceCard';
import { CATEGORIES, EXPERIENCES_BY_CITY } from '../constants/experiences';

interface DashboardProps {
  selectedCity: 'dubai' | 'bali';
  onCityChange: (city: 'dubai' | 'bali') => void;
  onLogout: () => void;
}

export default function Dashboard({ selectedCity, onCityChange, onLogout }: DashboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch experiences matching the active city and search/category filters
  const filteredExperiences = useMemo(() => {
    const cityExperiences = EXPERIENCES_BY_CITY[selectedCity] || [];
    return cityExperiences.filter((exp) => {
      const matchesCategory = selectedCategory ? exp.category === selectedCategory : true;
      const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            exp.provider.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCity, selectedCategory, searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const selectCity = (city: 'dubai' | 'bali') => {
    onCityChange(city);
    setSelectedCategory(null); // Clear category filter when switching cities
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-black text-slate-100 p-6 md:p-12 relative overflow-hidden select-none flex flex-col items-center">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.03),transparent_85%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="w-full max-w-5xl relative z-10 flex flex-col gap-10 flex-grow">
        
        {/* 1. Header Row */}
        <header className="flex items-center justify-between py-2 border-b border-white/5">
          {/* Logo (Interactive reset to login) */}
          <span 
            onClick={onLogout}
            className="font-serif text-2xl tracking-[0.25em] text-[#C5A880] font-medium cursor-pointer hover:opacity-80 transition-opacity"
          >
            ORA
          </span>

          {/* Right Side: City Dropdown & Profile */}
          <div className="flex items-center gap-4 relative">
            
            {/* Custom Premium Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E0E0E] border border-white/10 hover:border-white/20 text-xs font-semibold tracking-wider text-white transition-all duration-300 outline-none"
              >
                <span>{selectedCity === 'dubai' ? '🇦🇪 Dubai' : '🇮🇩 Bali'}</span>
                <svg 
                  className={`w-3 h-3 text-[#C5A880] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Options */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#090909] border border-white/10 shadow-2xl overflow-hidden z-30 py-1.5 animate-fadeIn">
                  <button
                    onClick={() => selectCity('dubai')}
                    className={`w-full text-left px-4 py-2.5 text-xs tracking-wider transition-colors duration-200 ${
                      selectedCity === 'dubai' ? 'text-[#C5A880] bg-white/5 font-semibold' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    🇦🇪 Dubai
                  </button>
                  <button
                    onClick={() => selectCity('bali')}
                    className={`w-full text-left px-4 py-2.5 text-xs tracking-wider transition-colors duration-200 ${
                      selectedCity === 'bali' ? 'text-[#C5A880] bg-white/5 font-semibold' : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    🇮🇩 Bali
                  </button>
                </div>
              )}
            </div>

            {/* Profile Outline Button */}
            <button 
              onClick={onLogout}
              className="w-9 h-9 rounded-full bg-[#0E0E0E] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#C5A880] hover:border-[#C5A880] transition-all duration-300 outline-none"
              aria-label="User Profile"
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

          </div>
        </header>

        {/* 2. Hero Section */}
        <section className="text-left flex flex-col gap-1.5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-wide">
            {selectedCity === 'dubai' ? "Dubai's" : "Bali's"} finest experiences,
          </h1>
          <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#C5A880]">
            at your fingertips.
          </span>
        </section>

        {/* 3. Search Bar Section */}
        <section className="w-full max-w-xl text-left">
          <div className="w-full bg-[#0E0E0E] border border-white/5 rounded-2xl px-5 py-4 flex items-center justify-between hover:border-white/10 transition-all duration-300 focus-within:border-[#C5A880]/30 shadow-xl">
            <input
              type="text"
              placeholder="Search for experiences"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-neutral-500 w-full outline-none pr-4 tracking-wide"
            />
            <svg className="w-5 h-5 text-neutral-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </section>

        {/* 4. Categories Horizontal List */}
        <section className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <CategoryItem
              key={cat.id}
              name={cat.name}
              iconName={cat.iconName}
              isActive={selectedCategory === cat.id}
              onClick={() => handleCategoryClick(cat.id)}
            />
          ))}
        </section>

        {/* 5. Popular Experiences Section */}
        <section className="flex flex-col gap-6 text-left">
          
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl text-white font-normal tracking-wide">
              Popular Experiences
            </h2>
            <button 
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className="text-[#C5A880] text-[11px] font-bold tracking-[0.15em] uppercase hover:text-white transition-colors duration-300 outline-none"
            >
              View all
            </button>
          </div>

          {/* Experience Grid */}
          {filteredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  provider={exp.provider}
                  title={exp.title}
                  location={exp.location}
                  price={exp.price}
                  originalPrice={exp.originalPrice}
                  currency={exp.currency}
                  image={exp.image}
                />
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="w-full py-16 bg-[#0E0E0E] rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 px-6">
              <svg className="w-10 h-10 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-base font-semibold text-white">No Experiences Found</h3>
              <p className="text-xs text-neutral-500 max-w-xs">
                No items match your active filters. Try searching for a different keyword or resetting filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="mt-2 text-xs font-bold text-[#C5A880] hover:text-white uppercase tracking-wider transition-colors duration-200 outline-none"
              >
                Clear Filters
              </button>
            </div>
          )}

        </section>

      </div>

    </div>
  );
}
