import { useState } from "react";
import "./Experience.css";
import { mockUpProject } from "../Data/MockUpProject";

export interface data {
  name: string;
  image: string;
  imageShow: string[];
  comment: string;
}

const Experience = () => {
  const [dataProject] = useState(mockUpProject);
  const [listData, setListData] = useState<data>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const renderDialog = () => {
    return (
      <dialog open={openDialog} className="container-Dialog">
        <div className="wrap-container-Dialog">
          <h1>{listData?.name}</h1>
        </div>
      </dialog>
    );
  };
  return (
    <div className="container-experience">
      <div className="wrap-container-experience">
        <h1>Experience</h1>
        <div className="line"></div>
        <div className="card">
          {dataProject.map((item, index) => {
            return (
              <div key={index}>
                <div className="wrap-card">
                  <h2>{item.name}</h2>
                  <img src={item.image} alt="" />
                  <button
                    onClick={() => {
                      setListData(item);
                      setOpenDialog(!openDialog);
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {renderDialog()}
      </div>
    </div>
  );
};

export default Experience;
