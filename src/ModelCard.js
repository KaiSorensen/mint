import React from "react";
import { Tooltip, Card, Divider } from "@nextui-org/react";
import GradientSquare from "./GradientSquare";
import "./styles/ModelCard.css";

export default function Model({ modelData, boxShad='initial' }) {
    const { name, modelType, accuracy, dataSet, dataType, dateCreated } = modelData;
    const cardLength = 150;



/** box shadows are broken, right it doesn't matter what value I pass to boxShad, it doesn't affect it.
 * 
 * Though if I pass the value 'none' into the style prop of the Card component, it will remove the box shadow.
 */




    return (
        <div className="model-container">
            <Tooltip
                delay={200} 
                closeDelay={100}
                content={
                    <div className="tooltip-content">
                        <TooltipRow label="Model Type" value={modelType} />
                        <TooltipRow label="Accuracy" value={accuracy} />
                        <TooltipRow label="Dataset" value={dataSet} />
                        <TooltipRow label="Data Type" value={dataType} />
                        <TooltipRow label="Date Created" value={dateCreated} isLast={true} />
                    </div>
                }
            >
                <Card style={{ boxShadow: {boxShad} }} isPressable={true} className="model-card">
                    <div className="gradient-square-container">
                        <GradientSquare width={cardLength} height={cardLength} />
                        <div className="accuracy-overlay">{accuracy}</div>
                    </div>
                </Card>
            </Tooltip>
            <div className="model-name">{name}</div>
        </div>
    );
}

function TooltipRow({ label, value, isLast = false }) {
    return (
        <>
            <div className="tooltip-row">
                <span>{label}:</span><span>{value}</span>
            </div>
            {!isLast && <Divider className="tooltip-divider" />}
        </>
    );
}