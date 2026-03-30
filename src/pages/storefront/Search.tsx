import { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <div className="container mx-auto px-4 py-8 min-h-[70vh]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">What are you looking for?</h1>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon className="h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <Input
            type="text"
            placeholder="Search phones, accessories, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-6 text-lg bg-[#121212] border-white/10 focus-visible:ring-primary rounded-2xl"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="mt-12">
          {query ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-muted-foreground"
            >
              <p>Searching for "{query}"...</p>
              <p className="text-sm mt-2">No results found. Try a different keyword.</p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Honor Magic 6 Pro', 'iPhone 15', 'Samsung S24 Ultra', 'AirPods Pro', 'Power Bank'].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      className="rounded-full bg-[#121212] border-white/10 hover:bg-white/5 hover:text-white"
                      onClick={() => setQuery(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
