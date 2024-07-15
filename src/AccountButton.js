import './styles/AccountButton.css';
import AccountMenu from './AccountMenu';
import { PopoverTrigger, Popover } from '@nextui-org/react';

export default function AccountButton() {
    return (
        <Popover placement='bottom-end'>
            <PopoverTrigger>
                <div className="circular-button">
                    <p>Account</p>
                </div>
            </PopoverTrigger>
            <AccountMenu />
        </Popover>
    );
}