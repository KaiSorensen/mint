import React, { useState, useEffect } from 'react';
import ModelCard from './ModelCard';

async function sortModelsByRecentAccess(modelsJSON) {
    const modelsData = await modelsJSON;
    modelsData.models.sort((a, b) => new Date(b.dateAccessed) - new Date(a.dateAccessed));
    return modelsData;
}

async function loadModelsData() {
    const response = await fetch('/fake_data/models.json');
    let data = await response.json();
    data = await sortModelsByRecentAccess(data);
    return data;
}

export default function RecentModels({ windowWidth }) {
    const [modelsData, setModelsData] = useState(null);

    useEffect(() => {
        loadModelsData().then(data => setModelsData(data));
    }, []);

    if (!modelsData) {
        return <div>Loading...</div>;
    }

    return (
        <div >
            <h2>Recent Models</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {modelsData.models.map((modelData, index) => (
                    <ModelCard key={index} boxShad='initial' modelData={modelData} />
                ))}
            </div>
        </div>
    );
}