import "../../UserDashboard.css";
import $ from "jquery";
import useUser from "../../hooks/useUser";

const SideBar = () => {
  const { user } = useUser();

  $(document).on("click", '[data-toggle="push-menu"]', function () {
    if (
      !$("body").hasClass("sidebar-collapse") &&
      $("body").hasClass("sidebar-open")
    ) {
      $("body").removeClass("sidebar-open");
      $("body").addClass("sidebar-collapse");
      $("body").addClass("sidebar-mini");
      //console.log('menu kapa');
    } else if ($("body").hasClass("sidebar-collapse")) {
      $("body").removeClass("sidebar-collapse");
      $("body").addClass("sidebar-open");
      //console.log('menu ac');
    } else {
      $("body").addClass("sidebar-collapse");
      $("body").addClass("sidebar-open");
    }
  });
  return (
    <>
      <aside className="main-sidebar">
        <div className="sidebar">
          <div className="user-panel">
            <div className="image text-center">
              <img
                src={
                  "http://localhost:8001/uploads/ProfileImage/" +
                  user?.[0]?.customer_photo
                }
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="info">
              <p>test</p>
            </div>

            <ul className="sidebar-menu" data-widget="tree">
              <li className="active">
                {" "}
                <a href="/dashboard">
                  {" "}
                  <i className="fa fa-home"></i> <span>Dashboard</span>{" "}
                </a>
              </li>

              <li>
                {" "}
                <a href="/user-draft">
                  {" "}
                  <i className="fa fa-pencil-square-o"></i> <span>Draft</span>{" "}
                </a>
              </li>

              <li>
                {" "}
                <a href="/user-design-request">
                  <i className="fa fa-desktop"></i>
                  <span>Design Request</span>{" "}
                </a>
              </li>

              <li>
                {" "}
                <a href="/user-profile">
                  <i className="fa fa-user-o"></i> <span>Profile</span>
                </a>
              </li>

              <li>
                {" "}
                <a href="/logout">
                  <i className="fa fa-power-off"></i> <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
