import styled from '@emotion/styled';

const VisualComponent = ({ title = 'Component', children }) => {
  return (
    <div
      key={Math.random()}
      className="component bg-gray-900 rounded text-white p-4 border-2 border-gray-400 relative mt-4"
    >
      <span className="rerender absolute left-3 top-2 text-xs uppercase font-bold text-red-500">
        Render
      </span>
      <h2 className="mt-2 font-bold text-lg mb-4">{title}</h2>
      {children}
    </div>
  );
};

export { VisualComponent };
