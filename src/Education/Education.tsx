import "./Education.css";

const Education = () => {
  return (
    <div className="container-education">
      <div className="wrap-container-education">
        <h1>Education</h1>
        <div className="line"></div>
        <div className="information">
          <div className="ribbon"></div>
          <div className="ribbon1"></div>
          <div className="ribbon2"></div>
          <div className="ribbon3"></div>
          <i className="fa-solid fa-user-graduate"></i>
          <div className="songvit">
            <img src="/assets/image/Schools/songvit.png" alt="" />
            <div className="information-songvit">
              <div className="text-songvit">
                <p>Songvithaya Theparak School.</p>
                <p>Cum GPA 3.20</p>
              </div>
              <button>PDF</button>
            </div>
          </div>
          <div className="samtech">
            <img src="/assets/image/Schools/samtech.png" alt="" />
            <div className="information-samtech">
              <div className="text-samtech">
                <p>Samutprakan Institute of Commerce and Technology.</p>
                <p>Business Computer Branch.</p>
                <p>Cum GPA 3.42</p>
              </div>
              <button>PDF</button>
            </div>
          </div>
          <div className="bu">
            <img src="/assets/image/Schools/bangkok_university.png" alt="" />
            <div className="information-bu">
              <div className="text-bu">
                <p>Bangkok University.</p>
                <p>Faculty of Engineering.</p>
                <p>Computer and Robotics Department.</p>
                <p>Cum GPA 3.58</p>
              </div>
              <button>PDF</button>
            </div>
          </div>
          <div className="year-songvit">
            <p>2014 - 2017</p>
          </div>
          <div className="year-samtech">
            <p>2017 - 2020</p>
          </div>
          <div className="year-bu">
            <p>2020 - 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
