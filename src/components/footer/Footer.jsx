const Footer = () => {
  return (
    <div className="fixed bottom-0 p-3 align-center w-screen">
      <div>
        <p>{new Date().getFullYear()} Federico Ortiz Portfolio WebApp</p>
      </div>
      <div>
        <p className="text-gray-400">Terms of Service</p>
        <p className="text-gray-400">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
