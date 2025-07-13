import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6 px-4 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          {/* Useful Links */}
          <div className="md:col-span-1">
            <h3 className="uppercase font-bold mb-4 tracking-widest text-sm">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/works" className="hover:underline">Projects</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            </ul>
          </div>
          {/* Call Us */}
          <div className="md:col-span-1">
            <h3 className="uppercase font-bold mb-4 tracking-widest text-sm">Call Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+919899943137" className="hover:underline">+91 8090730442</a></li>
              <li><a href="tel:+918851361171" className="hover:underline">+91 8565909785</a></li>
            </ul>
          </div>
          {/* Write */}
          <div className="md:col-span-1">
            <h3 className="uppercase font-bold mb-4 tracking-widest text-sm">Write</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:#" className="hover:underline">#</a></li>
            </ul>
          </div>
          {/* Visit */}
          <div className="md:col-span-1">
            <h3 className="uppercase font-bold mb-4 tracking-widest text-sm">Visit</h3>
            <ul className="space-y-2 text-sm">
              <li>#</li>
              <li>#</li>
            </ul>
          </div>
          {/* Logo & Description */}
          <div className="md:col-span-1 flex flex-col items-start md:items-end justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                {/* Logo as text placeholder */}
                <span className="font-bold text-lg tracking-widest">ARCH</span>
                <span className="ml-2 text-xs tracking-widest">INTERIO STUDIO</span>
              </div>
              <p className="text-xs max-w-xs text-gray-300">
                At <span className="font-bold">Arch Interio Studio</span>, we consistently challenge conventional design norms to bring a fresh, innovative perspective to interior spaces. As leading interior designers in Gurgaon, we specialize in crafting bespoke interiors for both residential and commercial projects. Our work is defined by a harmonious blend of comfort, functionality, and sophisticated style—transforming everyday spaces into inspiring environments.
              </p>
            </div>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-8 gap-4">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/iamraghurajpratap/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gray-400"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
          <div className="text-xs text-gray-400 mt-4 md:mt-0 text-center w-full md:w-auto">
            © 2024 Arch Interio Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
