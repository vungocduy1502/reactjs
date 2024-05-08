import Child1 from "./Child1";

const Test = () => {
  const text = "Hello, world!";
  const arr = ["Hi", "Hello", "Hello1"];
  const obj = {
    text: "Hello, world",
  };

  var word_array = obj.text.split();
  console.log(word_array);

  const newArr = word_array.map((word) => {
    // Tìm xem từ đó có trong mảng arr không
    const foundWord = arr.find((item) => item === word);
    // Nếu từ đó có trong mảng arr, thì thay thế nó bằng "Hi"
    if (foundWord) {
      return "Hi";
    }
    // Nếu không tìm thấy từ đó trong mảng arr, trả về từ ban đầu
    return "Hi";
  });

  console.log(newArr);
  // Áp dụng hàm checkAndReplace cho mỗi phần tử của mảng arr

  return <>{/* <Child1 test={text} /> */}</>;
};

export default Test;
