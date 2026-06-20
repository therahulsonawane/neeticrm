import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-clash text-2xl font-bold tracking-tight text-porcelain">
              Neeti<span className="text-amber-signal">CRM</span>
            </span>
            <p className="mt-4 text-sm text-slate-custom leading-relaxed max-w-xs">
              The lead conversion platform that captures, qualifies, and
              follows up with every lead — automatically.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-satoshi font-semibold text-porcelain text-sm uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-custom hover:text-porcelain transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-satoshi font-semibold text-porcelain text-sm uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {["Real Estate", "Education", "Healthcare", "Insurance", "Solar", "Agencies"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#industries"
                      className="text-sm text-slate-custom hover:text-porcelain transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-satoshi font-semibold text-porcelain text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact", "Privacy Policy", "Terms of Service"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-custom hover:text-porcelain transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-custom">
            © {new Date().getFullYear()} NeetiCRM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-slate-custom hover:text-amber-signal transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
