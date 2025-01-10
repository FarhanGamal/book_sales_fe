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
import GenreCreate from "./pages/admin/genres/create.jsx"
import GenreEdit from "./pages/admin/genres/edit.jsx"
import AdminGenres from "./pages/admin/genres/index.jsx"
import AdminAuthors from "./pages/admin/authors/index.jsx"
import AuthorCreate from "./pages/admin/authors/create.jsx"
import AuthorEdit from "./pages/admin/authors/edit.jsx"
import AdminPayment_methods from "./pages/admin/payment_methods/index.jsx"
import Payment_methodCreate from "./pages/admin/payment_methods/create.jsx"
import Payment_methodEdit from "./pages/admin/payment_methods/edit.jsx"

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

              <Route path="genres">
                <Route index element={<AdminGenres />} />
                <Route path="create" element={<GenreCreate />} />
                <Route path="edit" element={<GenreEdit />} />
              </Route>

              <Route path="authors">
                <Route index element={<AdminAuthors />} />
                <Route path="create" element={<AuthorCreate />} />
                <Route path="edit" element={<AuthorEdit />} />
              </Route>

              <Route path="payment_methods">
                <Route index element={<AdminPayment_methods />} />
                <Route path="create" element={<Payment_methodCreate />} />
                <Route path="edit" element={<Payment_methodEdit />} />
              </Route>




            </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App