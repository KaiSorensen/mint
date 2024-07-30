import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/DragDropBox.css';
import getTheme from './styles/GlobalThemes';
import { useTheme } from 'next-themes';
import UploadIcon from './UploadIcon';

const uploadFiles = async (files) => {
    const formData = new FormData();
    files.forEach(file => {
        formData.append('file', file);
    });
    try {
        const response = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error uploading files:', error);
        throw error;
    }
};

export default function DragDropBox() {
    const [files, setFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState({});
    const { theme } = useTheme();

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8000/events');

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setUploadedFiles(prevFiles => ({...prevFiles, ...data}));
        };

        eventSource.onerror = (error) => {
            console.error('EventSource failed:', error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);

    const addFile = (newFile) => {
        setFiles(prevFiles => {
            const fileExists = prevFiles.some(file => file.name === newFile.name);
            if (fileExists) {
                return prevFiles.map(file => 
                    file.name === newFile.name ? { ...file, state: 'uploading' } : file
                );
            }
            return [...prevFiles, { ...newFile, state: 'uploading' }];
        });
    };

    async function removeFile(fileName) {
        const file = files.find(file => file.name === fileName);
        if (!file) throw new Error('File not found');

        console.log(file);
        const fileIndex = files.findIndex(file => file.name === fileName);
        setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
        console.log(files)



        try {
            const response = await fetch('http://localhost:8000/remove', {
                method: 'POST',
                body: JSON.stringify(file)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error removing files:', error);
            throw error;
        }
    }

    const updateFileState = (fileName, newState) => {
        setFiles(prevFiles => prevFiles.map(file => 
            file.name === fileName ? { ...file, state: newState } : file
        ));
    };

    const onDrop = useCallback(async (acceptedFiles) => {
        acceptedFiles.forEach(file => addFile({ name: file.name, type: 'file' }));
        setUploadStatus('Uploading...');

        try {
            await uploadFiles(acceptedFiles);
            setUploadStatus('Files uploaded successfully!');
            acceptedFiles.forEach(file => updateFileState(file.name, 'complete'));
        } catch (error) {
            setUploadStatus('Error uploading files. Please try again.');
            acceptedFiles.forEach(file => updateFileState(file.name, 'error'));
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div
            {...getRootProps()}
            style={{backgroundColor: theme !== 'dark' ? getTheme().fill.light : getTheme().fill.dark}}
            className={`drag-drop-box ${isDragActive ? 'active' : ''}`}
        >
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
            {files.length > 0 && (
                <div>
                    <h4>Uploaded Files:</h4>
                    <ul>
                        {files.map(file => (
                            <li key={file.name}>
                                <UploadIcon 
                                    name={file.name} 
                                    type={file.type} 
                                    state={file.state} 
                                    onCancel={() => removeFile(file.name)}
                                    onRetry={() => addFile(file)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}