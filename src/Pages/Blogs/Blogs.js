import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="g-5 col-sm-12 col-md-6 ">
          <h4>
            1.Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
          <p>
            Ans: i'm Using Firebase For Multipurposes First of all i'm using
            firebase for Authorised user and also i can build Authentication
            systeam using firebase Second Of all i'm Hosting Website Using
            Firebase and firebase is a data base thats why i can used firebase
            for store data .At this moment i have lot of firebase alternative
            for implement authentication
            <ul>
              <li>Paese</li>
              <li>Back4App</li>
              <li>AWS Amplify</li>
              <li>Kuzzle</li>
            </ul>
            <br />
            Here are just five examples but there are many more Firebase
            Alternative for implement authentication !!
          </p>
        </div>
        <div className="g-5 col-sm-12 col-md-6">
          <h4>
            2.What other services does firebase provide other than
            authentication?
          </h4>
          <p>
            Firebase provide Lot of things First of all you can host website
            fully free in firebase and second of all firebase has real time
            database you can use firebase as a database and firebase provide
            cloud you can used cloud function And firebase provide lot of that
            you can used in your project
          </p>
          <div className="mt-5">
            <h4>3.Difference between authorization and authentication</h4>
            <p>
              Ans :First Of All Authentication Means Verify who some one is , i
              mean who are you whats your account is real or fake and you i mean
              user is real or fake and second of all authorization means Verify
              whats specific applications, filses data and etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
