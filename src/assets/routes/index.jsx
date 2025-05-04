import App from '../../App';
import Home from '../pages/Home'
import Intro from '../pages/Intro/Intro';
import ChurchHistory from '../pages/Intro/ChurchHistory';
import ChurchMark from '../pages/Intro/ChurchMark';
import News from '../pages/activities/News';
import Articles from '../pages/activities/Articles';
import ActivityDetail from '../pages/activities/ActivityDetail';
import ChurchOrganize from '../pages/Intro/ChurchOrganize';
import ChurchSect from '../pages/Intro/ChurchSect';
import HappyCamp from '../pages/activities/HappyCamp';
import Notfound from '../pages/NotFound';
import AdminLogin from '../admin/AdminLogin';
import AdminLayout from '../admin/AdminLayout';

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
                path: '認識我們',
                element: <ChurchSect />,
            },
            {
                path: '教會歷史',
                element: <ChurchHistory />,
            },
            {
                path: '教會標誌',
                element: <ChurchMark />,
            },
            {
                path: '教會組織',
                element: <ChurchOrganize />,
            },
            {
                path: '活動',
                element: <News />,
            },
            {
                path: '近期消息',
                element: <News />,
            },
            {
                path: '活動/:id',
                element: <ActivityDetail />,
            },
            {
                path: '最新文章',
                element: <Articles />,
            },
            {
                path: '歡樂周末營',
                element: <HappyCamp />,
            },
        ],

    },
    {
        path: '*',
        element: <Notfound />,
    },
    {
        path: 'adminLogin',
        element: <AdminLogin />,
    },
    {
        path: 'admin',
        element: <AdminLayout />,
    },
]

export default routes;