import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  className="main_pizzas"
    speed={2}
    width={500}
    height={329}
    viewBox="0 0 300 329"
    backgroundColor="#e6d1d1"
    foregroundColor="#faebd7"
    {...props}
  >
    <circle cx="153" cy="108" r="88" /> 
    <rect x="65" y="202" rx="3" ry="3" width="184" height="19" /> 
    <rect x="145" y="225" rx="2" ry="2" width="22" height="25" /> 
    <rect x="227" y="227" rx="2" ry="2" width="22" height="25" /> 
    <rect x="65" y="256" rx="3" ry="3" width="54" height="25" /> 
    <rect x="152" y="257" rx="3" ry="3" width="99" height="20" /> 
    <rect x="65" y="283" rx="3" ry="3" width="108" height="35" /> 
    <rect x="105" y="313" rx="0" ry="0" width="1" height="0" /> 
    <rect x="201" y="283" rx="0" ry="0" width="50" height="35" /> 
    <rect x="66" y="226" rx="2" ry="2" width="22" height="25" />
  </ContentLoader>
)

export default MyLoader

