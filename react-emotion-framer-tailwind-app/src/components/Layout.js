const Layout = ({ children }) => {
  return (
    <div className="p-6 bg-gray-800 min-h-screen text-white">
      <div className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="text-center font-bold text-2xl mb-4 md:text-4xl md:mt-6">
            React Rendering Sandbox
          </h1>
          <p className="mb-8 leading-tight">
            Interactive add-on to a series of articles
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 block text-yellow-300 font-bold underline"
              href="https://alexsidorenko.com/blog/react-render-always-rerenders/"
            >
              A Visual Guide to React Rendering
            </a>
          </p>
        </header>
        {children}
      </div>
    </div>
  );
};

export { Layout };
