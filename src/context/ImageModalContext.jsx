import React, { createContext, useState, useContext, useEffect } from 'react';

const ImageModalContext = createContext();

export function ImageModalProvider({ children }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const showImage = (src) => {
        setSelectedImage(src);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    return (
        <ImageModalContext.Provider value={{ selectedImage, showImage, closeImage }}>
            {children}
        </ImageModalContext.Provider>
    );
}

export function useImageModal() {
    const context = useContext(ImageModalContext);
    if (!context) {
        throw new Error('useImageModal must be used within an ImageModalProvider');
    }
    return context;
}
