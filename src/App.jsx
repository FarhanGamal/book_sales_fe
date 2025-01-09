import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Dashboard from "./pages/admin"
import AdminLayout from "./layouts/admin"
import AdminBooks from "./pages/admin/books"
import BookCreate from "./pages/admin/books/create.jsx"
import BookEdit from "./pages/admin/books/edit.jsx"
import PublicBooks from "./pages/public/books"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Team from "./components/shared/Team/index.jsx"
import Contact from "./components/shared/Contact/index.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<PublicBooks />} />
              <Route path="teams" element={<Team />} />
              <Route path="contacts" element={<Contact />} />
            </Route>

            {/* Auth Routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Admin Routes */}    
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              
              
              <Route path="books">
                <Route index element={<AdminBooks />} />
                <Route path="create" element={<BookCreate />} />
                <Route path="edit" element={<BookEdit />} />
              </Route>



            </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App