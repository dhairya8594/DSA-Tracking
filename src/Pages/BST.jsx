import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        Concept: "Binary Search Trees",
        Que: "Find a value in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-a-value-in-bst_1170063?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/search-a-node-in-bst/1/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 2,
        Concept: "Binary Search Trees",
        Que: "Deletion of a node in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/delete-node-in-bst_920381?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://leetcode.com/problems/delete-node-in-a-bst/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 3,
        Concept: "Binary Search Trees",
        Que: "Find min and max value in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/guess-price_3211264?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 4,
        Concept: "Binary Search Trees",
        Que: "Find inorder successor and inorder predecessor in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/_893049?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 5,
        Concept: "Binary Search Trees",
        Que: "Check if a tree is a BST or not ",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/validate-bst_799483?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/check-for-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 6,
        Concept: "Binary Search Trees",
        Que: "Populate Inorder successor of all nodes",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/populate-inorder-successor-of-all-nodes-of-a-binary-tree_1118625?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 7,
        Concept: "Binary Search Trees",
        Que: "Find LCA  of 2 nodes in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/lca-in-a-bst_981280?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 8,
        Concept: "Binary Search Trees",
        Que: "Construct BST from preorder traversal",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/bst-from-preorder_2689307?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 9,
        Concept: "Binary Search Trees",
        Que: "Convert Binary tree into BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/binary-tree-to-bst_893074?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 10,
        Concept: "Binary Search Trees",
        Que: "Convert a normal BST into a Balanced BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/normal-bst-to-balanced-bst_920472?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 11,
        Concept: "Binary Search Trees",
        Que: "Merge two BST [ V.V.V>IMP ]",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/h_920474?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 12,
        Concept: "Binary Search Trees",
        Que: "Find Kth largest element in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/k-th-largest-number_920438?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 13,
        Concept: "Binary Search Trees",
        Que: "Find Kth smallest element in a BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/kth-smallest-node-in-bst_920441?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 14,
        Concept: "Binary Search Trees",
        Que: "Count pairs from 2 BST whose sum is equal to given value \"X\"",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/count-couples_3208653?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 15,
        Concept: "Binary Search Trees",
        Que: "Find the median of BST in O(n) time and O(1) space",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/median-of-a-bst_893184?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 16,
        Concept: "Binary Search Trees",
        Que: "Count BST nodes that lie in a given range",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/bst-queries_1095658?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 17,
        Concept: "Binary Search Trees",
        Que: "Replace every element with the least greater element on its right",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/least-greater-element_1164266?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 18,
        Concept: "Binary Search Trees",
        Que: "Given \"n\" appointments, find the conflicting appointments",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-conflicting-meetings_1170047?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 19,
        Concept: "Binary Search Trees",
        Que: "Check preorder is valid or not",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/check-if-preorder-traversal-is-valid_1164410?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 20,
        Concept: "Binary Search Trees",
        Que: "Check whether BST contains Dead end",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/check-for-dead-end-in-a-bst_1169457?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 21,
        Concept: "Binary Search Trees",
        Que: "Largest BST in a Binary Tree [ V.V.V.V.V IMP ]",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/largest-bst-subtree_893103?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://practice.geeksforgeeks.org/problems/largest-bst/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    },
    {
        id: 22,
        Concept: "Binary Search Trees",
        Que: "Flatten BST to sorted list",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/flatten-bst-to-a-sorted-list_1169459?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp:<Link to= "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
    }
];

function BST() {
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
<h2>Binary Search Trees(BST) 🔥</h2>
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

export default BST;