export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
          <img src="/images/Data.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5008 Algorithm
            </a>
            <p className="wd-dashboard-course-title">
              Data Structure and Algorithm
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
          <img src="/images/solid.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5004 OOD
            </a>
            <p className="wd-dashboard-course-title">
              Object-Oriented Design
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        
        <div className="wd-dashboard-course"> 
          <img src="/images/3.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5005 OOD Recitation
            </a>
            <p className="wd-dashboard-course-title">
              Object-Oriented Design Recitation
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
          <img src="/images/4.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5002 Discrete Structure
            </a>
            <p className="wd-dashboard-course-title">
            Discrete Structure
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
          <img src="/images/2.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5800 Algorithm
            </a>
            <p className="wd-dashboard-course-title">
            Algorithm
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course"> 
          <img src="/images/web.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS6100 Artificial Intelligence
            </a>
            <p className="wd-dashboard-course-title">
            Artificial Intelligence
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        


      </div>
    </div>
);}
