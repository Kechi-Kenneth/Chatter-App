
import "./NavBar.css";


interface NavbarProps {
  title: string;
  icon: string; 
  items: string[]; 
}
const NavBar:React.FC <NavbarProps> = ({icon, title, items}) => {
  return (
    <>
      <section>
        <nav className="nav-wrapper">
         <div className="nav-content">
        <div>
          <h1 className="app-name">{title}</h1>
          <img className="nav-logo" src={icon} />
        </div>
        <ul className="menu-item">
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
        </ul>
        </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
