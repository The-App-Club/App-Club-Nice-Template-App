const Button = (props) => {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
      {...props}
    />
  );
};

export { Button };
