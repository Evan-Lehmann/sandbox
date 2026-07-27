const linkGroups = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us', 'Fairness & RNG', 'System Status'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Responsible Gaming', 'AML Policy'],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        {linkGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.links.map((link) => (
                <li key={link}>
                  <button className="footer-link" disabled>{link}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {year} scrims.io. All rights reserved.</span>
        <span className="footer-bottom-links">
          <button className="footer-link" disabled>Terms</button>
          <button className="footer-link" disabled>Privacy</button>
          <button className="footer-link" disabled>Cookies</button>
        </span>
      </div>
    </footer>
  );
}