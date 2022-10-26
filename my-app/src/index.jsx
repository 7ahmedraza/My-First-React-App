import React from "react";
import ReactDOM from "react-dom";
function Hi() {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style
          dangerouslySetInnerHTML={{
            __html: "\n body {\n  background-color: lightgreen;\n}\n"
          }}
        />
        <h1>
          {" "}
          AHMED RAZA ABDUL HAMEED
          <br />{" "}
        </h1>
        <img src="./My photo.jpg" alt="left" width={150} />
        <h5> Contact No:03********* </h5>
        <h5> Email:ra*****@gmail.com </h5>
        <h5> Address:****,Karachi,Sindh,Pakistan</h5>
        <h5> Date Of Birth:7/4/2004</h5>
        <h5>
          {" "}
          NIC:************ <br />
          <br />
        </h5>
        <h4 style={{ color: "purple" }}> Career objective :</h4>
        <p>
          I would like to utilize my skills and passion for accounts and educate
          young minds.
          <br /> More over it will be great chance to me to polish and improve
          my proffessional and educational skills <br /> and for personal
          growth.
          <br />
        </p>
        <h4 style={{ color: "purple" }}> Academics :</h4>
        <ol>
          <li>Intermediate: Under Process</li>
          <li>Matric: Science Group Grade "A" , Sindh Board </li>
        </ol>
        <h4 style={{ color: "purple" }}> Work Experience :</h4>
        Fresh Candidate
        <br />
        <h4 style={{ color: "purple" }}> Interests :</h4>
        <ol>
          <li>Willing to experience different educational activities</li>
          <li>Passionate Learner</li>
          <li>Travelling</li>
          <li>Reading</li>
        </ol>
        <h4 style={{ color: "purple" }}> References :</h4>
        References available upon request.
        <br />
        Please keep all information confidential.
      </div>
    </div>
  );
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
