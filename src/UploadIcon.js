import fileHeart from './icons/file-heart-svgrepo-com.png';
import folderHeart from './icons/folder-heart-svgrepo-com.png';
import cancelIcon from './icons/cancel-svgrepo-com.png';
import { Spinner, Button } from '@nextui-org/react';

export default function UploadIcon({ name, type, state, onCancel }) {
    function getIconOpacity() {
        return state === 'uploading' ? 0.5 : 1;
    }

    function getIcon() {
        const iconSrc = type === 'file' ? fileHeart : folderHeart;
        return (
            <div style={{ position: 'relative' }}>
                <img src={iconSrc} alt={`${type} icon`} style={{ opacity: getIconOpacity(), width: '24px', height: '24px' }} />
                {state === 'uploading' && (
                    <Spinner
                        size="sm"
                        color="primary"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                )}
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                {getIcon()}
                <span style={{ marginLeft: '5px' }}>{name}</span>
            </div>
            <Button onClick={onCancel}>
                <img src={cancelIcon} alt="cancel icon" style={{ width: '24px', height: '24px' }} />
            </Button>
        </div>
    );
}
