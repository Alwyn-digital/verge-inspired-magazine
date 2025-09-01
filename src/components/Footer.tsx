export const Footer = () => {
  const footerLinks = {
    "Company": ["About", "Contact", "Careers", "Ethics Statement"],
    "Community": ["Community Guidelines", "How We Rate and Review Products"],
    "Legal": ["Terms of Use", "Privacy Notice", "Cookie Policy", "Licensing FAQ"]
  };

  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo and Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4">
              The<span className="text-verge-cyan">Verge</span>
            </h3>
            <p className="text-muted-foreground max-w-md">
              A technology and science publication that examines how technology will change life in the future.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {["Facebook", "Twitter", "Instagram", "YouTube", "RSS"].map((social) => (
              <button
                key={social}
                className="w-10 h-10 rounded-full border border-verge-cyan text-verge-cyan hover:bg-verge-cyan hover:text-background transition-colors"
              >
                {social.charAt(0)}
              </button>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-muted-foreground hover:text-verge-cyan transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © 2024 The Verge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};