
import React, { useState } from 'react';
import { MapPin, Locate } from 'lucide-react';
import { toast } from 'sonner';

interface LocationInputProps {
  onChange: (location: string) => void;
  value: string;
}

const LocationInput = ({ onChange, value }: LocationInputProps) => {
  const [isDetecting, setIsDetecting] = useState(false);

  const detectLocation = () => {
    setIsDetecting(true);
    
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      setIsDetecting(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // In a real app, you would do reverse geocoding to get the human-readable address
        // For demo purposes, we'll just use the coordinates
        const locationString = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
        onChange(locationString);
        toast.success("Location detected successfully");
        setIsDetecting(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        toast.error("Could not detect your location. Please enter it manually.");
        setIsDetecting(false);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        <MapPin size={20} />
      </div>
      
      <input
        type="text"
        placeholder="Enter your location"
        className="input-primary pl-10 pr-12"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      
      <button
        type="button"
        onClick={detectLocation}
        disabled={isDetecting}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-ngo-blue hover:text-ngo-blue/70 transition-colors"
      >
        <Locate size={20} className={isDetecting ? 'animate-spin' : ''} />
      </button>
    </div>
  );
};

export default LocationInput;
