import React from 'react';
import ModelCard from './ModelCard'; // Assuming you have this component
import './styles/ModelScreen.css';  // Correct import statement
import getTheme from './styles/GlobalThemes';
import { useTheme } from 'next-themes';

const AllModels = ({ models }) => {
    const { theme } = useTheme();

  return (
    <div className="allModelsContainer"
        style={{
        backgroundColor: theme !== 'dark' ? getTheme().fill.light : getTheme().fill.dark,
        }}>
      <div className="brightBorder"></div>
      <div className="gridContainer">
        {models.map((model, index) => (
          <ModelCard key={index} style={{ boxShad: 'none' }} modelData={model} />
        ))}
      </div>
    </div>
  );
};

const ModelScreen = ({ modelsData }) => {
    const { theme } = useTheme();

  if (!modelsData || !modelsData.models) {
    return <div>Loading models data...</div>;
  }

  return (
    <div style={{
        backgroundColor: theme !== 'dark' ? getTheme().background.light : getTheme().background.dark,
        color: theme !== 'dark' ? getTheme().text.light : getTheme().text.dark
        }} className="modelScreenContainer">
      <AllModels models={modelsData.models} />
    </div>
  );
};

export default ModelScreen;