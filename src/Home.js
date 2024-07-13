import DragDropBox from "./DragDropBox";
import './styles/Home.css';
import './styles/Sides.css';
import Title from "./Title";
import AccountButton from "./AccountButton";
import { ThemeToggle } from "./ThemeToggle";
import { Popover } from "@nextui-org/react";



export default function Home () {
    return (
        <div className="main">
            <div className="topBar">
                <AccountButton/>
                <ThemeToggle/>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
            
                <div className="side" >  left </div>

                <div className="home" >

                    <Title />
                    <div className="new-model-title">
                        <h1>New Model</h1>
                    </div>

                    <DragDropBox className="drag-drop-box" />
                    <div className="recent-models-title">
                        <h1>Recent Models</h1>
                   </div>
                    <div className="recent-model-row"> 

                    </div>

                </div>
                <div className="side">  right </div>
            </div>
        </div>
    );

}