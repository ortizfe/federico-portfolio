const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 z-[-10] flex w-full flex-col items-center justify-center pt-20">
      <div>
        <div>
          <p>{new Date().getFullYear()} Federico Ortiz Portfolio WebApp</p>
        </div>
        <div>
          <p className="text-gray-400">Terms of Service</p>
          <p className="text-gray-400">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
