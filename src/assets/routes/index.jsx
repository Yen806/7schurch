import App from '../../App';
import Home from '../pages/Home'
import Intro from '../pages/Intro/Intro';
import ChurchHistory from '../pages/Intro/ChurchHistory';
import ChurchMark from '../pages/Intro/ChurchMark';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '簡介',
                element: <Intro />,
            },
            {
                path: '教會歷史',
                element: <ChurchHistory />,
            },
            {
                path: '教會標誌',
                element: <ChurchMark />,
            },
        ]
    }
]

export default routes;