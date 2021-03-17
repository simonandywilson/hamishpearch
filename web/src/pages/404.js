import React from "react"
import {Link} from "gatsby"
import Ticker from "react-ticker";

const main = {
    height: "calc(100vh - 15px)",
    width: "100vw",
    padding: "0",
    margin: "0",
    paddingTop: "15px",
    overflow: "hidden"
};

const NotFound = () => {
  return (
      <main style={main}>
          <Ticker direction={"toRight"} offset={"100%"}>
              {() => (
                  <>
                      &nbsp;<Link to="/">Hamish Pearch</Link>&nbsp;
                  </>
              )}
          </Ticker>

          <Ticker>
              {() => (
                  <>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                      <p> 404 </p>
                  </>
              )}
          </Ticker>
      </main>
  );
}

export default NotFound