import React from "react"; 
import "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/web.css";

const ProjectsCards = ({data, cardIndex}) => {
    return (
        <div className="cardnames">
            {data[cardIndex].map(item => (
                <div className="procard">
                    {/*<p className="bigtitle">{item.title}</p>*/}
                    <p className="comname">{item.dis1}</p>
                    <br></br>
                    <br></br>
                    <p className="lang">{item.lang}</p>
                   
                   
                </div>
            ))}

            

        </div>
    );

};

export default ProjectsCards;