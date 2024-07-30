import './styles/AccountButton.css';
import { PopoverContent } from '@nextui-org/react';

export default function AccountButton() {
    return (
        <PopoverContent>
            <div className="accoutn-menu">
                Account Menu! 
                    <br></br>
                Your Data
                    <br></br>
                Your Models
            </div>
        </PopoverContent>
    );
}