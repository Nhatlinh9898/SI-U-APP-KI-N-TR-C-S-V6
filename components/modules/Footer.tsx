import React from 'react';

interface FooterLink {
  label: string;
  url: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  companyName: string;
  description: string;
  logo?: string;
  primary_color?: string;
  linkGroups?: FooterLinkGroup[];
  socialLinks?: { platform: string, url: string, icon: string }[];
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  bottomLinks?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({ 
  companyName, 
  description, 
  logo,
  primary_color = '#f59e0b',
  linkGroups = [
    {
      title: 'Sản Phẩm',
      links: [
        { label: 'Tính năng', url: '#' },
        { label: 'Bảng giá', url: '#' },
        { label: 'Tài liệu', url: '#' }
      ]
    },
    {
      title: 'Công Ty',
      links: [
        { label: 'Về chúng tôi', url: '#' },
        { label: 'Tuyển dụng', url: '#' },
        { label: 'Liên hệ', url: '#' }
      ]
    }
  ],
  socialLinks,
  newsletter,
  bottomLinks = [
    { label: 'Chính sách bảo mật', url: '#' },
    { label: 'Điều khoản sử dụng', url: '#' }
  ]
}) => {
  return (
    <footer className="pt-24 pb-12 bg-gray-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-8">
            {logo ? (
              <img src={logo} alt={companyName} className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
            ) : (
              <h3 className="text-3xl font-black uppercase tracking-tighter" style={{ color: primary_color }}>{companyName}</h3>
            )}
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              {description}
            </p>
            {socialLinks && (
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-white/10 hover:scale-110 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Groups */}
          <div className={`lg:col-span-${newsletter ? '4' : '8'} grid grid-cols-2 gap-12`}>
            {linkGroups.map((group, i) => (
              <div key={i}>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-8">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors font-medium">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          {newsletter && (
            <div className="lg:col-span-4 p-8 rounded-[32px] bg-white/5 border border-white/10">
              <h4 className="text-xl font-black mb-4">{newsletter.title}</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{newsletter.description}</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={newsletter.placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                />
                <button 
                  className="w-full py-3 rounded-xl font-black text-black uppercase tracking-widest text-xs transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: primary_color }}
                >
                  {newsletter.buttonText}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
          <div className="flex gap-8">
            {bottomLinks.map((link, i) => (
              <a key={i} href={link.url} className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
