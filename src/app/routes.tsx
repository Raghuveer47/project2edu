import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { TrainingPage } from './pages/TrainingPage';
import { TrainingGalleryPage } from './pages/TrainingGalleryPage';
import { ContactPage } from './pages/ContactPage';
import { ExploreCoursesPage } from './pages/ExploreCoursesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'products', Component: ProductsPage },
      { path: 'explore-courses', Component: ExploreCoursesPage },
      { path: 'training', Component: TrainingPage },
      { path: 'training-gallery', Component: TrainingGalleryPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
