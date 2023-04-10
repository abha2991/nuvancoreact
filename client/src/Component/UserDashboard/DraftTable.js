import Header from "./Header";

import Footer from "./Footer";

import SideBar from "./SideBar";

const DraftTable = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>Form Details</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> Form Details
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="card">
            <div className="card-body">
              <h4 className="text-black">Form Details</h4>

              <p></p>
              <div className="table-responsive">
                <table className="table table-hover table-bordered">
                  <thead>
                    <tr className="table-heading">
                      <th scope="col">Basic Details</th>
                      <th scope="col">Property Details</th>
                      <th scope="col">Construction Details</th>
                      <th scope="col">Additional Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="/user-basic-details">Basic Details</a>
                      </td>
                      <td>Property Details</td>
                      <td>Construction Details</td>
                      <td>Additional Details</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DraftTable;
