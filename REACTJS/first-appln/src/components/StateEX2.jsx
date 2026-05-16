import { useState } from "react";

const StateEx2 = () => {
  const [emps, setEmps] = useState([
  { eno: 111, ename: "EOne", eimg: "https://picsum.photos/id/1011/100" },
  { eno: 222, ename: "ETwo", eimg: "https://picsum.photos/id/1012/100" },
  { eno: 333, ename: "EThree", eimg: "https://picsum.photos/id/1013/100" },
  { eno: 444, ename: "EFour", eimg: "https://picsum.photos/id/1014/100" },
  { eno: 555, ename: "EFive", eimg: "https://picsum.photos/id/1015/100" }
]);


  return (
    <>
      <table border={1} align="center" cellPadding={10} cellSpacing={10}>
        <thead>
          <tr>
            <th>eno</th>
            <th>ename</th>
            <th>eimg</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((element, index) => (
            <tr key={index}>
              <td>{element.eno}</td>
              <td>{element.ename}</td>
              <td>
                <img src={element.eimg} width={100} alt="Employee" />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StateEx2;