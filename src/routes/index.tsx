
import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Landing = lazy(() => import("@/pages/main/Landing"))
const Login = lazy(() => import("@/pages/auth/Login"))
const Home = lazy(() => import("@/pages/main/Home"))
const Products = lazy(() => import("@/pages/main/Products"))
const Locations = lazy(() => import("@/pages/main/Locations"))
const Contacts = lazy(() => import("@/pages/main/Contacts"))
const Branch = lazy(() => import("@/pages/main/Branch"))
const About = lazy(() => import("@/pages/main/About"))
const ProductDetails = lazy(() => import("@/pages/main/ProductDetails"))
const Privacy = lazy(() => import("@/pages/main/Privacy"))
const Policy = lazy(() => import('@/pages/main/Policy'))
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'))
const HomeDash = lazy(() => import('@/pages/admin/HomeDash'))
const CategoriesDash = lazy(() => import('@/pages/admin/Categories'))
const UsersDash = lazy(() => import('@/pages/admin/Users'))
const RolesDash = lazy(() => import('@/pages/admin/Roles'))
const TagsDash = lazy(() => import('@/pages/admin/Tags'))
const LocationDash = lazy(() => import('@/pages/admin/Locations'))
const ProductsDash = lazy(() => import('@/pages/admin/Products'))
const SchedulesDash = lazy(() => import('@/pages/admin/Schedules'))
const LocationDetails = lazy(() => import('@/pages/admin/LocationDetails'))
const Banner = lazy(() => import('@/pages/admin/Banner'))
export default function index() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element: <Landing />,
      children: [
        {
          path:'',
          element: <Home />,
          index: true,
        },
        {
          path:'products',
          element: <Products />,
        },
        {
          path:'locations',
          element: <Locations />,
        },
        {
          path:'contacts',
          element: <Contacts />,
        },
        {
          path:'branches',
          element: <Branch />,
        },
        {
          path:'about',
          element: <About />,
        },
        {
          path:':product',
          element: <ProductDetails />,
        },
        {
          path:'privacy',
          element: <Privacy />,
        },
        {
          path:'policy',
          element: <Policy />,
        }
  
      ]
    },
    {
      path:'auth',
      element: <Login />,
    },
    {
      path:'admin',
      element: <Dashboard />,
      children: [
        {
          element: <HomeDash />,
          index: true,
        },
        {
          element: <CategoriesDash />,
          path:'categories',
        },
        {
          element: <UsersDash />,
          path:'users',
        },
        {
          element: <RolesDash />,
          path:'roles',
        },
        {
          element: <TagsDash />,
          path:'tags',
        },
        {
          element: <LocationDash />,
          path:'locations',
        },
        {
          element: <ProductsDash />,
          path:'products',
        },
        {
          path:'schedules',
          element: <SchedulesDash />,
        },
        {
          path:'locations/:id',
          element: <LocationDetails />,
        },
        {
          path:'banner',
          element: <Banner />,
        }
        
      ]
    }
    
  ])

  return (
    <RouterProvider router={routes} />
  )
}
