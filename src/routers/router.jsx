import Layouts from '../layouts/Layouts'
import AboutPage from '../pages/AboutPage/AboutPage'
import CompaniesPage from '../pages/CompaniesPage/CompaniesPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import MainPage from '../pages/MainPage/MainPage'
import ReadMore from '../pages/MainPage/ReadMore'

const router = [
    {
        element: <Layouts />,
        path: '/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <AboutPage />,
                path: '/about'
            },
            {
                element: <CompaniesPage />,
                path: '/companies'
            },
            {
                element: <ContactPage />,
                path: '/contact'
            },
            {
                element: <ReadMore />,
                path: '/article/:ArtcId'
            }
        ]
    }
]

export default router