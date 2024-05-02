import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
    {
    id: 1,
    Concept: "Matrix",
    Que: "Spiral traversal on a Matrix",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/spiral-matrix_840698?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 2,
    Concept: "Matrix",
    Que: "Search an element in a matrix",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/search-in-a-row-wise-and-column-wise-sorted-matrix_839811?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to=""><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 3,
    Concept: "Matrix",
    Que: "Find median in a row-wise sorted matrix",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/median-in-matrix_981178?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 4,
    Concept: "Matrix",
    Que: "Find row with maximum number of 1's",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/row-with-maximum-1-s_1112656?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 5,
    Concept: "Matrix",
    Que: "Print elements in sorted order using row-column wise sorted matrix",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/sorted-matrix_758931?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/sorted-matrix/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 6,
    Concept: "Matrix",
    Que: "Maximum size rectangle",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/maximum-size-rectangle-sub-matrix-with-all-1-s_893017?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/max-rectangle/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>      
  },
  {
    id: 7,
    Concept: "Matrix",
    Que: "Find a specific pair in matrix",
    Code: <Link to="https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.codingninjas.com/codestudio/problems/find-a-specific-pair-in-the-matrix_1115467?topList=love-babbar-dsa-sheet-problems"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 8,
    Concept: "Matrix",
    Que: "Rotate matrix by 90 degrees",
    Code:<Link to="https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.codingninjas.com/codestudio/problems/inplace-rotate-matrix-90-degree_839734?topList=love-babbar-dsa-sheet-problems"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 9,
    Concept: "Matrix",
    Que: "Kth smallest element in a row-column wise sorted matrix",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/kth-minimum-floor_1115470?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 10,
    Concept: "Matrix",
    Que: "Common elements in all rows of a given matrix",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/common-elements-present-in-all-rows-of-a-matrix_1118111?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  }
];

function MatrixQ() {
  const [checkedQuestions, setCheckedQuestions] = useState(() => {
    const storedData = localStorage.getItem("checkedQuestions");
    return storedData ? JSON.parse(storedData) : {};
  });

  const handleCheckboxChange = (questionId, isChecked) => {
    const updatedCheckedQuestions = { ...checkedQuestions, [questionId]: isChecked };
    setCheckedQuestions(updatedCheckedQuestions);
  };

  useEffect(() => {
    localStorage.setItem("checkedQuestions", JSON.stringify(checkedQuestions));
  }, [checkedQuestions]);

  const totalQuestions = data.length;
  const checkedCount = Object.values(checkedQuestions).filter((isChecked) => isChecked).length;
  const progressPercentage = (checkedCount / totalQuestions) * 100;
  return (
    <div classid="App">
                      <Link to="/"><img src={Back} alt="back" className="Back"/></Link>

<div className='main-page'>

<h1>DSA Tracker</h1>
<h2>Matrix 🔥</h2>
<div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          >
            {`${Math.floor(progressPercentage)}%`}
            </div>

</div>
<br/>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Concept</th>
            <th>Question</th>
            <th>Code Practice</th>
            <th>Concept Explanation</th>
            <th>Complete </th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.Concept}</td>
                <td>{value.Que}</td>
                <td>{value.Code}</td>
                <td>{value.Concept_Exp}</td>
                <td>
                <input
                  type="checkbox"
                  checked={checkedQuestions[value.id]}
                  onChange={(e) => handleCheckboxChange(value.id, e.target.checked)}
                />
              </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default MatrixQ;