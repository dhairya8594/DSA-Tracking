import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
  {
    id:1,
    Concept: "LinkedList",
    Que: "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/reverse-the-singly-linked-list_799897?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/reverse-a-linked-list/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:2,
    Concept: "LinkedList",
    Que: "Reverse a Linked List in group of Given Size. [Very Imp]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/reverse-a-ll_2271431?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:3,
    Concept: "LinkedList",
    Que: "Write a program to Detect loop in a linked list.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/detect-the-cycle_1822910?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:4,
    Concept: "LinkedList",
    Que: "Write a program to Delete loop in a linked list.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/detect-and-remove-cycle_920523?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:5,
    Concept: "LinkedList",
    Que: "Find the starting point of the loop. ",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/detect-the-first-node-of-the-loop_1112628?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:6,
    Concept: "LinkedList",
    Que: "Remove Duplicates in a sorted Linked List.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/unique-sorted-list_2420283?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:7,
    Concept: "LinkedList",
    Que: "Remove Duplicates in a Un-sorted Linked List.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/remove-duplicates-from-unsorted-linked-list_1069331?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:8,
    Concept: "LinkedList",
    Que: "Write a Program to Move the last element to Front in a Linked List.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/deleting-and-adding-the-last-node_1170051?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:9,
    Concept: "LinkedList",
    Que: "Add “1” to a number represented as a Linked List.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/add-one-to-linked-list_920456?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:10,
    Concept: "LinkedList",
    Que: "Add two numbers represented by linked lists.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/add-two-numbers-as-linked-lists_1170520?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:11,
    Concept: "LinkedList",
    Que: "Intersection of two Sorted Linked List.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/intersection-of-linked-lists_3210610?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:12,
    Concept: "LinkedList",
    Que: "Intersection Point of two Linked Lists.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/intersection-of-linked-list_630457?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:13,
    Concept: "LinkedList",
    Que: "Merge Sort For Linked lists.[Very Important]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/mergesort-linked-list_630514?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:14,
    Concept: "LinkedList",
    Que: "Quicksort for Linked Lists.[Very Important]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/quick-sort-on-linked-list_893099?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:15,
    Concept: "LinkedList",
    Que: "Find the middle Element of a linked list.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/middle-of-linked-list_973250?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://leetcode.com/problems/middle-of-the-linked-list/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:16,
    Concept: "LinkedList",
    Que: "Check if a linked list is a circular linked list.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/is-it-a-circular-linked-list_981265?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/circular-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:17,
    Concept: "LinkedList",
    Que: "Split a Circular linked list into two halves.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/split-a-circular-linked-list_1071003?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:18,
    Concept: "LinkedList",
    Que: "Write a Program to check whether the Singly Linked list is a palindrome or not.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/palindrom-linked-list_799352?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:19,
    Concept: "LinkedList",
    Que: "Deletion from a Circular Linked List.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/deletion-in-circular-linked-list_630409?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/deletion-and-reverse-in-linked-list/1/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:20,
    Concept: "LinkedList",
    Que: "Reverse a Doubly Linked list.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/reverse-a-doubly-linked-list_1116098?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:21,
    Concept: "LinkedList",
    Que: "Find pairs with a given sum in a DLL.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-pair-with-a-given-sum-in-a-doubly-linked-list_1164172?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:22,
    Concept: "LinkedList",
    Que: "Count triplets in a sorted DLL whose sum is equal to given value “X”.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/count-triplets_873377?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:23,
    Concept: "LinkedList",
    Que: "Sort a “k”sorted Doubly Linked list.[Very IMP]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/sort-a-k-sorted-doubly-linked-list_1118118?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.codingninjas.com/codestudio/problems/sort-a-k-sorted-doubly-linked-list_1118118"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:24,
    Concept: "LinkedList",
    Que: "Rotate DoublyLinked list by N nodes.",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/rotate-dll_1115782?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:25,
    Concept: "LinkedList",
    Que: "Rotate a Doubly Linked list in group of Given Size.[Very IMP]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/reverse-dll-nodes-in-groups_920399?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:26,
    Concept: "LinkedList",
    Que: "Can we reverse a linked list in less than O(n) ?",
    Code: <Link to=""><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/can-we-reverse-a-linked-list-in-less-than-on/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:27,
    Concept: "LinkedList",
    Que: "Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?",
    Code: <Link to=""><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/why-quick-sort-preferred-for-arrays-and-merge-sort-for-linked-lists/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:28,
    Concept: "LinkedList",
    Que: "Flatten a Linked List",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/flatten-a-linked-list_1112655?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:29,
    Concept: "LinkedList",
    Que: "Sort a LL of 0's, 1's and 2's",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/sort-linked-list-of-0s-1s-2s_1071937?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:30,
    Concept: "LinkedList",
    Que: "Clone a linked list with next and random pointer",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/clone-linked-list-with-random-pointer_873376?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:31,
    Concept: "LinkedList",
    Que: "Merge K sorted Linked list",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/merge-k-sorted-lists_992772?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:32,
    Concept: "LinkedList",
    Que: "Multiply 2 no. represented by LL",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/multiply-linked-lists_983603?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:33,
    Concept: "LinkedList",
    Que: "Delete nodes which have a greater value on right side",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/delete-nodes-which-have-a-greater-value-on-right-side_1115785?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:34,
    Concept: "LinkedList",
    Que: "Segregate even and odd nodes in a Linked List",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/segregate-even-and-odd-nodes-in-a-linked-list_1116100?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:35,
    Concept: "LinkedList",
    Que: "Program for n’th node from the end of a Linked List",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/k-th-node-from-the-end-of-the-linked-list_1171164?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:36,
    Concept: "LinkedList",
    Que: "Find the first non-repeating character from a stream of characters",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/first-unique-character-in-a-string_893404?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp:<Link to="https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  }
  
];

function LinkedListQ() {
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
<h2>Linked List 🔥</h2>
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

export default LinkedListQ;