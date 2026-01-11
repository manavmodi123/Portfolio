const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container-custom">
        <div className="flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
