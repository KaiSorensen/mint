import './styles/TopBar.css';
import { useTheme } from 'next-themes';
import AccountButton from './AccountButton';
import ThemeToggle from './ThemeToggle';
import getTheme from './styles/GlobalThemes';

export default function TopBar() {
    const { theme } = useTheme();

    return (<div style={{backgroundColor: theme !== 'dark' ? getTheme().fill.light : getTheme().fill.dark}} className="topBar">
                <ThemeToggle/>
                <AccountButton/>
        </div>);
}