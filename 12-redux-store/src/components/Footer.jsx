const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Brand & Description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">ABC FOOD</h2>
          <p className="text-gray-400 max-w-sm">
            Delicious meals delivered to your doorstep. Fresh, tasty, and made with love.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:text-amber-400 cursor-pointer">Home</li>
            <li className="hover:text-amber-400 cursor-pointer">Menu</li>
            <li className="hover:text-amber-400 cursor-pointer">About Us</li>
            <li className="hover:text-amber-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">Email: support@abcfood.com</p>
          <p className="text-gray-300">Phone: +91 98765 43210</p>
          <div className="flex mt-3 gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 font-bold cursor-pointer hover:bg-amber-500">
              F
            </span>
            <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 font-bold cursor-pointer hover:bg-amber-500">
              T
            </span>
            <span className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 font-bold cursor-pointer hover:bg-amber-500">
              I
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-gray-500 py-4 mt-6">
        Made with 💗 by <strong>Raviraj</strong>
      </div>
    </footer>
  );
};

export default Footer;