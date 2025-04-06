import React, { useState, useRef, ChangeEvent } from 'react';
import { Rnd } from 'react-rnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faThumbtack, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Pages/templateEditor.module.scss';

const TemplateEditor = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [dragable, setDragable] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
    const [position, setPosition] = useState({ x: 50, y: 50 });

    // 이미지 업로드
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                setImageSrc(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    // 이미지 삭제
    const closeEvent = () => {
        setImageSrc(null);
    };

    // 드래그 기능
    const dragStart = () => console.log("드래그 시작");
    const dragStop = (_e: any, d: any) => {
        console.log("드래그 종료", d.x, d.y);
    };

    // 리사이징 기능
    const resizeStart = () => console.log("리사이징 시작");
    const resizeStop = (_e: any, _direction: any, ref: HTMLElement, _delta: any, _position: { x: number, y: number }) => {
        setImageSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        console.log("리사이징 종료", ref.offsetWidth, ref.offsetHeight);
    };

    // 드래그 잠금 토글
    const toggleDrag = () => {
        setDragable(prev => !prev);
    };

    return (
        <div className={styles.editorWrapper}>
            <h2>템플릿 편집기</h2>

            <div className={styles.toolbar}>
                <button onClick={() => fileInputRef.current?.click()}>사진 업로드</button>
                <button onClick={() => setDragable(prev => !prev)}>
                    {dragable ? '드래그 잠금 해제' : '드래그 잠금'}
                </button>
            </div>

            <div className={styles.templateBox}>
                <div className={styles.templateImage}>
                    {imageSrc && (
                        <Rnd
                            lockAspectRatio={true}
                            minWidth={100}
                            minHeight={100}
                            default={{
                                x: 50,
                                y: 50,
                                width: 200,
                                height: 200,
                            }}
                            bounds="body"
                            disableDragging={dragable}
                            onDragStart={dragStart}
                            onDragStop={dragStop}
                            onResize={resizeStart}
                            onResizeStop={resizeStop}
                            style={{zIndex: 10}}
                        >
                            <div className={styles.imgWrapper}>
                                <button onClick={closeEvent} className={styles.closeBtn}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </button>
                                <button className={styles.moveBtn}>
                                        <FontAwesomeIcon icon={faExpandArrowsAlt}/>
                                </button>
                                <img
                                    src={imageSrc}
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
                style={{display: 'none'}}
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default TemplateEditor;
