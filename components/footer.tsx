'use client'

import Link from 'next/link';
//import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Produto: ['Visão Geral', 'Integrações', 'Preços', 'Roadmap'],
    Recursos: ['Documentação', 'Blog', 'Comunidade', 'Contato'],
    Suporte: ['Centro de Ajuda', 'Status', 'Documentação API', 'Termos de Uso'],
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Nexus ERP</h3>
            <p className="text-slate-400 text-sm">
              A plataforma completa para modernizar a gestão da sua empresa.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 text-sm">© 2026 Nexus ERP. Todos os direitos reservados.</p>
            
            <div className="flex gap-6">
              {/*<Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
             </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              */}
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
