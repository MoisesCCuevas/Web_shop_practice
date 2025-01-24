const Layout = (props: any) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center my-16">
      {children}
    </div>
  );
};

export default Layout;
