import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export default function Image({ src, alt, className, fallback, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const defaultFallback = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80';

  return (
    <div className={cn("relative overflow-hidden bg-muted/20", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-white/5">
          <Smartphone className="w-8 h-8 text-white/10" />
        </div>
      )}
      <img
        src={error ? (fallback || defaultFallback) : src}
        alt={alt}
        className={cn(
          "transition-all duration-500 block w-full h-full object-cover",
          isLoading ? "scale-110 blur-sm opacity-0" : "scale-100 blur-0 opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
}
