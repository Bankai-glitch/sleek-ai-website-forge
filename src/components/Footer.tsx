
export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">AadishAIwebsites</h3>
            <p className="text-gray-400">Creating the future of web development with AI.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary">Templates</a></li>
              <li><a href="#" className="hover:text-primary">AI Generator</a></li>
              <li><a href="#" className="hover:text-primary">Custom Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">GitHub</a></li>
              <li><a href="#" className="hover:text-primary">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 AadishAIwebsites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
