const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">WhatNxt</h3>
            <p className="text-sm">
              Empowering CMU Africa students with guidance from those who've walked the path before.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/transition-guide" className="hover:text-white transition">Transition Guide</a></li>
              <li><a href="/degree-planner" className="hover:text-white transition">Degree Planner</a></li>
              <li><a href="/alumni" className="hover:text-white transition">Alumni Connect</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Contact</h3>
            <p className="text-sm">
              Built with ❤️ by CMU Africa students<br />
              Kigali, Rwanda
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 WhatNxt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
