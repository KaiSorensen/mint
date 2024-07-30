import { useTheme } from 'next-themes';
import DragDropBox from "./DragDropBox";
import DataFormatting from './DataFormatting';
import './styles/Home.css';
// import './styles/Sides.css';
import Title from "./Title";
import RecentModels from './RecentModels';
import getTheme from './styles/GlobalThemes';
import { color } from 'framer-motion';

export default function Home () {

    const { theme } = useTheme();

    return (
        <div style={{
            backgroundColor: theme !== 'dark' ? getTheme().background.light : getTheme(color).background.dark,
            color: theme !== 'dark' ? getTheme().text.light : getTheme().text.dark
            }} className="main">
            {/* <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}> */}
                {/* <div style={{backgroundColor: theme !== 'dark' ? '#4c96fa' : '#1e1f22'}} className="side" >  left </div> */}

                <div 
                    className="home"  >

                    
                    <Title />
                    
                    <div>
                        <h1>New Model</h1>
                        <div >
                            <DragDropBox className="drag-drop-box" />
                            <DataFormatting />
                        </div>
                    </div>

                    <div >
                        <RecentModels />
                    </div>
                    
                    

                </div>
                {/* <div style={{backgroundColor: theme !== 'dark' ? '#4c96fa' : '#1e1f22'}} className="side">  right </div> */}
            {/* </div> */}
        </div>
    );

}