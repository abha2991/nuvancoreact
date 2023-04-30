import "../../UserDashboard.css";
import Logo from "../../images/logo.png";
import useUser from "../../hooks/useUser";
import smallLogo from "../../images/favicon.png";

const Header = () => {
  const { user } = useUser();

  return (
    <>
      <header className="main-header">
        <a href="/" className="logo blue-bg">
          <span className="logo-mini">
            <img src={smallLogo} />
          </span>
          <span className="logo-lg">
            <img src={Logo} alt="" style={{ height: "50px", width: "150px" }} />
          </span>{" "}
        </a>
        <nav className="navbar blue-bg navbar-static-top">
          <ul className="nav navbar-nav pull-left">
            <li>
              <a
                className="sidebar-toggle"
                data-toggle="push-menu"
                href="#"
              ></a>{" "}
            </li>
          </ul>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu p-ph-res">
                {" "}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  <img
                    src={
                      "http://localhost:8001/uploads/ProfileImage/" +
                      user?.[0]?.customer_photo
                    }
                    className="user-image"
                    alt="User Image"
                  />{" "}
                  <span className="hidden-xs">{user?.[0]?.customer_name}</span>{" "}
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <div className="pull-left user-img">
                      <img
                        src={
                          "http://localhost:8001/uploads/ProfileImage/" +
                          user?.[0]?.customer_photo
                        }
                        className="img-responsive img-circle"
                        alt="User"
                      />
                    </div>
                    <p className="text-left">
                      {user?.[0]?.customer_name}
                      <small>{user?.[0]?.customer_email}</small>{" "}
                    </p>
                  </li>
                  <li>
                    <a href="/user-profile">
                      <i className="fa fa-user"></i> My Profile
                    </a>
                  </li>

                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="/logout">
                      <i className="fa fa-power-off"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
