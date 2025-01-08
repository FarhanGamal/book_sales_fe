import Hero from "../../../components/shared/Hero/Hero";
import ProductList from "../../../components/shared/ProductList";
import PublicLayout from "../../../layouts/public";


export default function Home() {
  return (
    <>
      <PublicLayout >
        <Hero />
        <ProductList />
      </PublicLayout>
    </>
  )
}