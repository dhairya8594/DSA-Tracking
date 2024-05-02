import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
    {
        id:1 ,
        Concept: "Binary Trees",
        Que: "level order traversal",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/level-order-traversal_796002?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/level-order-traversal/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 2,
        Concept: "Binary Trees",
        Que: "Reverse Level Order traversal",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/reverse-level-order-traversal_764339?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 3,
        Concept: "Binary Trees",
        Que: "Height of a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/calculate-the-height-of-binary-tree-using-inorder-and-level-order-traversal_841416?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 4,
        Concept: "Binary Trees",
        Que: "Diameter of a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/diameter-of-the-binary-tree_920552?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 5,
        Concept: "Binary Trees",
        Que: "Mirror of a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/convert-binary-tree-to-mirror-tree_873140?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://leetcode.com/problems/invert-binary-tree/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 6,
        Concept: "Binary Trees",
        Que: "Inorder Traversal of a tree both using recursion and Iteration",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/tree-traversal_981269?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id:7 ,
        Concept: "Binary Trees",
        Que: "Preorder Traversal of a tree both using recursion and Iteration",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/preorder-traversal_2035934?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 8,
        Concept: "Binary Trees",
        Que: "Postorder Traversal of a tree both using recursion and Iteration",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/name_2035933?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id:9 ,
        Concept: "Binary Trees",
        Que: "Left View of a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/left-view-of-a-binary-tree_920519?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 10,
        Concept: "Binary Trees",
        Que: "Right View of Tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/right-view_764605?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 11,
        Concept: "Binary Trees",
        Que: "Top View of a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/top-view-of-the-tree_799401?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 12,
        Concept: "Binary Trees",
        Que: "Bottom View of a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/bottom-view-of-binary-tree_893110?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id:13 ,
        Concept: "Binary Trees",
        Que: "Zig-Zag traversal of a binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/zigzag-binary-tree-traversal_920532?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 14,
        Concept: "Binary Trees",
        Que: "Check if a tree is balanced or not",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/is-height-balanced-binary-tree_975497?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 15,
        Concept: "Binary Trees",
        Que: "Diagonal Traversal of a Binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/diagonal-traversal_893029?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 16,
        Concept: "Binary Trees",
        Que: "Boundary traversal of a Binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/boundary-traversal_790725?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 17,
        Concept: "Binary Trees",
        Que: "Construct Binary Tree from String with Bracket Representation",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/binary-tree-from-bracket_1118117?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 18,
        Concept: "Binary Trees",
        Que: "Convert Binary tree into Doubly Linked List",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/bst-to-sorted-dll_1263694?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id:19 ,
        Concept: "Binary Trees",
        Que: "Convert Binary tree into Sum tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/convert-a-binary-tree-to-its-sum-tree_920395?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 20,
        Concept: "Binary Trees",
        Que: "Construct Binary tree from Inorder and preorder traversal",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/construct-binary-tree-from-inorder-and-postorder-traversal_1266106?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/construct-tree-1/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id:21 ,
        Concept: "Binary Trees",
        Que: "Find minimum swaps required to convert a Binary tree into BST",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-swaps-to-convert-binary-tree-into-bst_1118109?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 22,
        Concept: "Binary Trees",
        Que: "Check if Binary tree is Sum tree or not",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/check-if-binary-tree-is-sum-tree-or-not_1164404?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/sum-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 23,
        Concept: "Binary Trees",
        Que: "Check if all leaf nodes are at same level or not",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/level-leaf_3210614?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 24,
        Concept: "Binary Trees",
        Que: "Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/check-for-duplicate-subtree_1089641?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 25,
        Concept: "Binary Trees",
        Que: "Check if 2 trees are mirror or not",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/check-for-mirror-trees_3125887?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 26,
        Concept: "Binary Trees",
        Que: "Sum of Nodes on the Longest path from root to leaf node ",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/longest-path_3210613?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 27,
        Concept: "Binary Trees",
        Que: "Check if given graph is tree or not.  [ IMP ]",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/is-graph-tree_1115787?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.geeksforgeeks.org/check-given-graph-tree/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 28,
        Concept: "Binary Trees",
        Que: "Find Largest subtree sum in a tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/maximum-subtree-sum_1082330?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 29,
        Concept: "Binary Trees",
        Que: "Maximum Sum of nodes in Binary tree such that no two are adjacent ",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/maximum-sum-of-nodes-in-a-binary-tree-such-that-no-two-nodes-are-adjacent_1118112?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 30,
        Concept: "Binary Trees",
        Que: "Print all \"K\" Sum paths in a Binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/number-of-ways-for-the-sum-k_1164407?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id:31,
        Concept: "Binary Trees",
        Que: "Find LCA in a Binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/least-common-ancestor_1092611?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 32,
        Concept: "Binary Trees",
        Que: "Find distance between 2 nodes in a Binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/distance-between-two-nodes-of-a-tree_800303?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 34,
        Concept: "Binary Trees",
        Que: "Kth Ancestor of node in a Binary tree",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/kth-ancestor-of-a-node-in-binary-tree_842561?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 35,
        Concept: "Binary Trees",
        Que: "Find all Duplicate subtrees in a Binary tree [ IMP ]",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/duplicate-subtrees_920530?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    },
    {
        id: 36,
        Concept: "Binary Trees",
        Que: "Tree Isomorphism Problem",
        Code: <Link to="https://www.codingninjas.com/codestudio/problems/isomorphic-trees_794946?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
        Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
        
    }
];

function BinaryTree() {
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
<h2>Binary Tree 🔥</h2>
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

export default BinaryTree;