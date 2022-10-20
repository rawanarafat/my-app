import React from "react"; 
import "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/web.css";

const Card = ({data, cardIndex}) => {
    return (
        <div>
            {data[cardIndex].map(item => (
                <div className="card">
                    <p className="bigtitle">{item.name}</p>
                    <p className="date">{item.date}</p>
                    <ol className="a">
                        <li>{item.dis1}</li>
                        <br></br>
                        <li>{item.dis2}</li>
                        <br></br>
                        <li>{item.dis3}</li>
                        <br></br>
                        <li>{item.dis4}</li>
                    </ol>
                   
                </div>
            ))}

            

        </div>
    );

};

export default Card;
