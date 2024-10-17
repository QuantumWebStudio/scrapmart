import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold mb-4">About Scrap Mart</h3>
            <p className="max-w-xs text-green-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sit
              molestiae ad repellendus accusamus mollitia ratione sed esse
              beatae quam, veniam aspernatur temporibus? Veritatis beatae quas
              ut nobis ipsa necessitatibus!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-2 sm:px-4 py-2 text-gray-700 bg-white border-t border-b border-l border-green-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="bg-green-600 text-white font-bold py-2 px-1 sm:px-4 rounded-r-md hover:bg-green-700 transition duration-300 flex items-center">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-green-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-green-300 mb-4 md:mb-0">
            © 2024 Scrap Mart. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-green-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-green-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
