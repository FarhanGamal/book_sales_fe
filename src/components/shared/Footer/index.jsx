export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">Copyright &copy; farhan - {currentYear}</p>
    </footer>
  );
}