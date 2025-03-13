
import React, { useState, useRef } from 'react';
import { Upload, X, Check, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  onChange: (file: File | null) => void;
}

const ImageUpload = ({ onChange }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
      setIsUploaded(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {
    setPreview(null);
    setIsUploaded(false);
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept="image/*"
        className="hidden"
      />
      
      {!preview ? (
        <div
          onClick={openFileDialog}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all
            ${isDragging 
              ? 'border-ngo-blue bg-ngo-blue/5' 
              : 'border-gray-300 hover:border-ngo-blue hover:bg-ngo-blue/5'
            }`}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-ngo-blue/10 flex items-center justify-center text-ngo-blue">
              <Upload size={24} />
            </div>
            <div>
              <p className="font-medium text-gray-700">Drag & drop your image here</p>
              <p className="text-sm text-gray-500 mt-1">or click to browse files</p>
              <p className="text-xs text-gray-400 mt-3">JPG, PNG or GIF, up to 10MB</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 group">
          <img 
            src={preview} 
            alt="Uploaded preview" 
            className="w-full h-48 object-cover"
          />
          
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              onClick={removeImage}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <X size={20} />
            </button>
            <button
              onClick={openFileDialog}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <ImageIcon size={20} />
            </button>
          </div>
          
          <div className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs flex items-center gap-1 text-green-600">
            <Check size={14} />
            <span>Uploaded</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
