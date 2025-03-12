export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <main className="px-5">{props.children}</main>
      </div>
    </div>
  );
};
