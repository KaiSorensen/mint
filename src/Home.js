import { useTheme } from 'next-themes';
import DragDropBox from "./DragDropBox";
import './styles/Home.css';
import './styles/Sides.css';
import Title from "./Title";
import AccountButton from "./AccountButton";
import { ThemeToggle } from "./ThemeToggle";
import { Popover } from "@nextui-org/react";


export default function Home () {

    const { theme } = useTheme();

    return (
        <div className="main">
            <div style={{backgroundColor: theme !== 'dark' ? '#297ae3' : '#1e1f22'}} className="topBar">
                <ThemeToggle/>
                <AccountButton/>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <div style={{backgroundColor: theme !== 'dark' ? '#4c96fa' : '#1e1f22'}} className="side" >  left </div>

                <div style={{backgroundColor: theme !== 'dark' ? '#6f9fff' : '#1e1f22'}} className="home" >

                    <Title />
                    <div style={{ color: theme === 'dark' ? 'white' : 'black' }}  className="new-model-title">
                        <h1>New Model</h1>
                    </div>

                    <DragDropBox className="drag-drop-box" />
                    <div style={{ color: theme === 'dark' ? 'white' : 'black' }} className="recent-models-title">
                        <h1>Recent Models</h1>
                   </div>
                    <div className="recent-model-row"> 

                    </div>

                </div>
                <div style={{backgroundColor: theme !== 'dark' ? '#4c96fa' : '#1e1f22'}} className="side">  right </div>
            </div>
        </div>
    );

}