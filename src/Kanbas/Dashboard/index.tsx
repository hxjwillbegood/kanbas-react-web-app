export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses"  className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div> 


          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card">
              <img src="/images/Data.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS5008 Algorithm
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Data Structure and Algorithm
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>  

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card">
              <img src="/images/solid.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS5004 OOD
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Object-Oriented Design
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div> 

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card">
              <img src="/images/3.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS5005 OOD Recitation
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Object-Oriented Design Rec
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div> 


          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card">
              <img src="/images/4.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS5002 Discrete Structure
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Discrete Structure
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div> 

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card">
              <img src="/images/2.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS5800 Algorithm
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Algorithm
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div> 

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card">
              <img src="/images/web.jpg"/>
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                  CS6100 Artificial Intelligence
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Artificial Intelligence
                </p>
                <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div> 


        </div>  


      </div>
    </div>
);}
