/**
 * <div id =" parent">
 *      <div id = "child">
 *          <h1>" I am an h1 tag"</h1>
 *          <h2>" I am an h2 tag"</h2>
 *       </div> 
 * </div>    
 */

const parent = React.createElement(
    "div",
    {id: "parent" },
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement("h1", {}, "i am an h1 tag"),  
            React.createElement("h2", {}, "i am an h2 tag")
        ]
    )
);

console.log('parent', parent);
// root.render(parent);

const heading =  React.createElement(
    "h1", 
    {id: "heading", xyz : "ABC"},
    "Hello World from React!"
    );

    console.log('heading', heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);