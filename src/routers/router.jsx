import Layouts from '../layouts/Layouts'
import AboutPage from '../pages/AboutPage/AboutPage'
import CompaniesPage from '../pages/CompaniesPage/CompaniesPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import MainPage from '../pages/MainPage/MainPage'
import ReadMore from '../pages/MainPage/ReadMore'

const router = [
    {
        element: <Layouts />,
        path: '/developer-project/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <AboutPage />,
                path: '/developer-project/about'
            },
            {
                element: <CompaniesPage />,
                path: '/developer-project/companies'
            },
            {
                element: <ContactPage />,
                path: '/developer-project/contact'
            },
            {
                element: <ReadMore />,
                path: '/developer-project/article/:ArtcId'
            }
        ]
    }
]

export default router