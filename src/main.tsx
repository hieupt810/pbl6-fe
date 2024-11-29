import { createRoot } from 'react-dom/client';

import './index.css';
import AppRouter from './routes';

createRoot(document.getElementById('root')!).render(<AppRouter />);
