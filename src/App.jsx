const App = (props) => {
  console.log(props);
  const handleClick = () => {
    alert("aaa");
  };
  return (
    <>
      <h1
        onClick={() => {
          alert("con");
        }}
      >
        {props.test}
        {/* lấy test từ bên parent */}
      </h1>
      <h1 onClick={handleClick}>{props.test2}</h1>
    </>
  );
};
export default App;
