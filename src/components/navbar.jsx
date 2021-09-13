//Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendred");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Counters{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
