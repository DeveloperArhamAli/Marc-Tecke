import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import About from './pages/AboutUsPage.tsx'
import Services from './pages/ServicesPage.tsx'
import Portfolio from './pages/PortfolioPage.tsx'
import Pricing from './pages/PricingPage.tsx'
import LogoDesignPage from './pages/services/LogoDesignPage.tsx'
import WebsitesPage from './pages/services/WebsitesPage.tsx'
import BrandIdentityPage from './pages/services/BrandIdentityPage.tsx'
import BusinessCardDesignPage from './pages/services/BusinessCardDesignPage.tsx'
import ProductPackagingDesignPage from './pages/services/ProductPackagingDesignPage.tsx'
import CoverBannerFlyerDesignPage from './pages/services/CoverBannerFlyerDesignPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/logo-design",
        element: <LogoDesignPage />
      },
      {
        path: "/websites",
        element: <WebsitesPage />
      },
      {
        path: "/brand-identity",
        element: <BrandIdentityPage />
      },
      {
        path: "/business-card-design",
        element: <BusinessCardDesignPage />
      },
      {
        path: "/product-packaging-design",
        element: <ProductPackagingDesignPage />
      },
      {
        path: "/cover-banner-flyer-design",
        element: <CoverBannerFlyerDesignPage />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
