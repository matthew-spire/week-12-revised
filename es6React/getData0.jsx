// Add and remove code as necessary to follow along with Dr. Williams

// const name = "Mart";
// const element = <h1>Hello {name}</h1>
// ReactDOM.render(<App />, document.getElementById("root"));

// App component that will be rendered into the root div of standalone.html
const App = () => {
  const name = "Fred";
  return (<h1>Hello {name}</h1>)
}
//---------------
ReactDOM.render(<App />, document.getElementById("root"));