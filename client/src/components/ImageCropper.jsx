import React, { useState, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = ({ onCropComplete, aspectRatio = 9 / 7 }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState();
    const [completedCrop, setCompletedCrop] = useState();
    const imgRef = useRef(null);

    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined); // Reset crop
            const reader = new FileReader();
            reader.addEventListener('load', () => setImgSrc(reader.result.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget;
        // Center crop by default
        const crop = centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 90,
                },
                aspectRatio,
                width,
                height,
            ),
            width,
            height,
        );
        setCrop(crop);
    };

    const getCroppedImg = async () => {
        const image = imgRef.current;
        const crop = completedCrop;
        if (!image || !crop) return;

        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        ctx.imageSmoothingQuality = 'high';

        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;

        const centerX = image.naturalWidth / 2;
        const centerY = image.naturalHeight / 2;

        ctx.save();
        // ctx.translate(-cropX, -cropY);
        // ctx.translate(centerX, centerY);
        // ctx.translate(-centerX, -centerY); // Standard simple crop logic below is usually safer

        // Better simple cropping:
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        ctx.restore();

        return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }
                blob.name = 'cropped.jpg';
                resolve(blob);
            }, 'image/jpeg');
        });
    };

    const verifyAndUpload = async () => {
        if (completedCrop) {
            try {
                const blob = await getCroppedImg();
                onCropComplete(blob);
            } catch (e) {
                console.error(e);
            }
        }
    }

    return (
        <div className="mb-4">
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-1">Upload Image (Will be cropped to 9:7)</label>
                <input type="file" accept="image/*" onChange={onSelectFile} className="mb-2" />
            </div>

            {imgSrc && (
                <div className="border border-gray-300 p-2 inline-block">
                    <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={aspectRatio}
                    >
                        <img
                            ref={imgRef}
                            alt="Crop me"
                            src={imgSrc}
                            onLoad={onImageLoad}
                            style={{ maxHeight: '400px' }}
                        />
                    </ReactCrop>
                    <div className="mt-2">
                        <button
                            type="button"
                            onClick={verifyAndUpload}
                            className="bg-brand-blue text-white px-4 py-2 rounded text-sm hover:bg-blue-800"
                        >
                            Confirm Crop & Use
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCropper;
