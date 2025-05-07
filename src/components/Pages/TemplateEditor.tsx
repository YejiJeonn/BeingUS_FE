import React, { useState, useRef, ChangeEvent } from 'react';
import { Rnd } from 'react-rnd';
import ReactCrop, { type Crop } from 'react-image-crop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-image-crop/dist/ReactCrop.css';
import styles from '../../styles/Pages/templateEditor.module.scss';

const TemplateEditor = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [dragable, setDragable] = useState(true);
    const [crop, setCrop] = useState<Crop>({ unit: '%', x: 25, y: 25, width: 30, height: 30 });
    const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [cropSize, setCropSize] = useState<{ width: number, height: number }>({ width: 200, height: 200 });
    const [cropPosition, setCropPosition] = useState<{ x: number, y: number }>({ x: 50, y: 50 });
    const [lockAspect, setLockAspect] = useState(true);

    // 사진, draggable 영역 강제 맞춤
    const [imageSize, setImageSize] = useState({ width: 200, height: 200 });

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                const dataUrl = reader.result as string;

                const img = new Image();
                img.src = reader.result;

                img.onload = () => {
                    const aspectRatio = img.width / img.height;
                    const maxwidth = 200; // 원하는 초기 너비
                    const calculateHeight = maxwidth / aspectRatio; // 비율에 맞춰 높이 계산

                    setImageSize({ width: maxwidth, height: calculateHeight });
                    setImageSrc(dataUrl);
                };
            }
        };
        reader.readAsDataURL(file);
    };

    const handleCropComplete = async () => {
        if (!imgRef.current || !completedCrop) return;

        const canvas = document.createElement('canvas');
        const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
        const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

        const width = completedCrop.width! * scaleX;
        const height = completedCrop.height! * scaleY;

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(
            imgRef.current,
            completedCrop.x! * scaleX,
            completedCrop.y! * scaleY,
            completedCrop.width! * scaleX,
            completedCrop.height! * scaleY,
            0,
            0,
            width,
            height
        );

        canvas.toBlob(blob => {
            if (blob) {
                const croppedUrl = URL.createObjectURL(blob);
                setCroppedImage(croppedUrl);
                setCropSize({ width: completedCrop.width!, height: completedCrop.height! });
                setCropPosition(prev => ({...prev}));
            }
        }, 'image/jpeg');
    };

    const dragStart = () => console.log("드래그 시작");
    const dragStop = (_e: any, d: any) => {
        console.log("드래그 종료", d.x, d.y);
        setCropPosition({ x: d.x, y: d.y });
    };

    const resizeStart = () => console.log("리사이징 시작");
    const resizeStop = (_e: any, _direction: any, ref: HTMLElement, _delta: any, _position: {x:number; y: number}) => {
        setCropSize({ width: ref.offsetWidth, height: ref.offsetHeight });

        setImageSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight
        });

        console.log("리사이징 종료", ref.offsetWidth, ref.offsetHeight);
    };

    const toggleDrag = () => {
        if (dragable) {
            setDragable(false);
        } else {
            handleCropComplete();
            setDragable(true);
        }
    } ;

    const closeEvent = () => {
        setImageSrc(null);
        setCroppedImage(null);
    };

    const fillToTemplate = () => {
        const wrapper = document.querySelector(`.${styles.templateImage}`) as HTMLElement;
        if (wrapper) {
            const { offsetWidth, offsetHeight } = wrapper;
            setImageSize({ width: offsetWidth, height: offsetHeight });
            setCropSize({ width: offsetWidth, height: offsetHeight });
            setCropPosition({ x: 0, y: 0 });
        }
    };


    return (
        <div className={styles.editorWrapper}>
            <div className={styles.toolbar}>
                <button className={styles.uploadBtn} onClick={() => fileInputRef.current?.click()}>사진 업로드</button>
                <button className={styles.modeBtn} onClick={toggleDrag}>
                    {dragable ? '자르기 모드' : '자르기 완료'}
                </button>

                {!dragable && (
                    <label>
                        <input
                            type="checkbox"
                            checked={lockAspect}
                            onChange={(e) => setLockAspect(e.target.checked)}
                        /> 비율 고정
                    </label>
                )}
            </div>

            <div className={styles.templateBox}>
                <div className={styles.templateImage}>
                    {!dragable && imageSrc && (
                        <div className={styles.cropWrapper}>
                            <ReactCrop
                                crop={crop}
                                onChange={(c) => setCrop(c)}
                                onComplete={(c) => setCompletedCrop(c)}
                                aspect={lockAspect? 1: undefined}
                            >
                                <img
                                    ref={imgRef}
                                    src={imageSrc!}
                                    alt="crop"
                                    style={{ width: cropSize.width, height: cropSize.height, objectFit: 'fill' }}
                                />
                            </ReactCrop>
                        </div>
                    )}

                    {dragable && (croppedImage || imageSrc) && (
                        <Rnd
                            lockAspectRatio={true} // true: 비율 고정 flase: 비율 자유
                            minWidth={100}
                            minHeight={100}
                            size={imageSize}
                            position={cropPosition}
                            // bounds="body"    // 리사이징 범위 body로 제한
                            disableDragging={!dragable}
                            onDragStart={dragStart}
                            onDragStop={dragStop}
                            onResize={resizeStart}
                            onResizeStop={resizeStop}
                            style={{ zIndex: 10 }}
                        >
                            <div className={styles.imgWrapper}>
                                <button onClick={fillToTemplate} className={styles.fillBtn}>
                                    <FontAwesomeIcon icon={faExpandArrowsAlt}/>
                                </button>
                                <button onClick={closeEvent} className={styles.closeBtn}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </button>
                                <button className={styles.moveBtn}>
                                    <FontAwesomeIcon icon={faExpandArrowsAlt}/>
                                </button>
                                <img
                                    src={croppedImage || imageSrc!}
                                    alt="Uploaded"
                                    className={styles.userPhoto}
                                />
                            </div>
                        </Rnd>
                    )}
                </div>
            </div>

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default TemplateEditor;