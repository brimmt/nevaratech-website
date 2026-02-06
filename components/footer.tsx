import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-strong border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gradient-text">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gradient-text">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 gradient-text">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@nevaratech.com" className="hover:text-primary transition-colors">
                  info@nevaratech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold gradient-text">NevaraTech</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Empowering businesses through AI automation and intelligent systems.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>Copyright © 2025 NevaraTech LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
