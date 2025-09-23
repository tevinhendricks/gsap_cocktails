import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { Cocktails } from './components/cocktails';
import { About } from './components/About';
import Art from './components/Art';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
    

    return (
       <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
       </main>
    )
}
