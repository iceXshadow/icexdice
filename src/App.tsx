import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Navbar from "./components/Navbar"
import Roll from "./components/Roll"

const App: React.FC = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col gap-36">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-12">
        <Heading />
        <Roll />
      </div>
      <Footer />
    </main>
  )
}

export default App