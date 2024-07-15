import './styles/Title.css';
import { useTheme } from 'next-themes';

export default function Title() {
    const { theme } = useTheme();

    return (
      <div style={{ color: theme === 'dark' ? 'white' : 'black' }} className="title">
        <h1>MINT</h1>
        </div>
    );
}