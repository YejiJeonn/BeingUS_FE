import React, { useState } from 'react';
import TemplateEditor from '../Pages/TemplateEditor'; // Adjust the path as necessary
import styles from '../../styles/Pages/template1.module.scss'; // Adjust the path as necessary

interface ImageSlotProps {
    id: string;
    label: string;
    imageUrl: string | null;
    onSave: (id: string, imageUrl: string) => void;
}

const ImageSlot: React.FC<ImageSlotProps> = ({ id, label, imageUrl, onSave }) => {
    const [tempImage, setTempImage] = useState<string | null>(imageUrl);
    const handleSavePic = () => {

    }

    return (
        <div className="flex flex-col items-center m-2">
            <label className="text-sm font-medium mb-1">{label}</label>
            <div className="w-40 h-40 border rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            </div>

            <TemplateEditor/>

            {/*이미지 저장 버튼*/}
            <button className={styles.btnSave} onClick={handleSavePic}>
                save
            </button>
        </div>
    );
};

const Template1: React.FC = () => {
    const [images, setImages] = useState<Record<string, string | null>>({
        mainPhoto: null,
        couplePhoto: null,
        familyPhoto: null
    });

    const handleImageSave = (id: string, dataUrl: string) => {
        setImages(prev => ({...prev, [id]: dataUrl}));
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow-xl">
            <h1 className="text-2xl font-bold text-center mb-4">💍 Wedding Invitation 💍</h1>
            <p className="text-center text-gray-600 mb-4">We are tying the knot! Please join us in celebrating our
                special day.</p>

            <div className="flex flex-col items-center">
                <ImageSlot id="mainPhoto" label="Main Photo" imageUrl={images.mainPhoto} onSave={handleImageSave} />
                    <ImageSlot id="couplePhoto" label="Couple Photo" imageUrl={images.couplePhoto} onSave={handleImageSave} />
                <ImageSlot id="familyPhoto" label="Family Photo" imageUrl={images.familyPhoto} onSave={handleImageSave} />
            </div>

            <div className="mt-6 text-center">
                <div className="text-lg font-semibold">📅 Wedding Date</div>
                <div className="text-gray-700">June 15, 2025</div>

                <div className="mt-4 text-lg font-semibold">📍 Location</div>
                <div className="text-gray-700">Seoul Wedding Hall, 3F Grand Ballroom</div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
                Thank you for being part of our journey.
            </div>
        </div>
    );
};

export default Template1;
