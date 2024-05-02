import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
  {
    id:1,
    Concept: "Searching & Sorting",
    Que: "Find first and last positions of an element in a sorted array",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/first-and-last-position-of-an-element-in-sorted-array_1082549?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:2,
    Concept: "Searching & Sorting",
    Que: "Find a Fixed Point (Value equal to index) in a given array",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/value-equal-to-the-index-value_1115771?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:3,
    Concept: "Searching & Sorting",
    Que: "Search in a rotated sorted array",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/search-in-rotated-sorted-array_1082554?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://leetcode.com/problems/search-in-rotated-sorted-array/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:4,
    Concept: "Searching & Sorting",
    Que: "square root of an integer",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/square-root-integral_893351?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/count-squares3649/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:5,
    Concept: "Searching & Sorting",
    Que: "Maximum and minimum of an array using minimum number of comparisons",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/middle-of-three_1118283?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:6,
    Concept: "Searching & Sorting",
    Que: "Optimum location of point to minimize total distance",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/optimum-location_1116097?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:7,
    Concept: "Searching & Sorting",
    Que: "Find the repeating and the missing",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-the-repeating-and-missing-number_1062727?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:8,
    Concept: "Searching & Sorting",
    Que: "find majority element",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/majority-element_842495?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/majority-element/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:9,
    Concept: "Searching & Sorting",
    Que: "Searching in an array where adjacent differ by at most k",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-student_3161883?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:10,
    Concept: "Searching & Sorting",
    Que: "find a pair with a given difference",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/pair-difference-k_1089634?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:11,
    Concept: "Searching & Sorting",
    Que: "find four elements that sum to a given value",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-four-elements-that-sums-to-a-given-value_983605?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:12,
    Concept: "Searching & Sorting",
    Que: "maximum sum such that no 2 elements are adjacent",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/is-it-a-tree_630511?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/stickler-theif/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:13,
    Concept: "Searching & Sorting",
    Que: "Count triplet with sum smaller than a given value",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/3-sum-smaller_3161884?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:14,
    Concept: "Searching & Sorting",
    Que: "merge 2 sorted arrays",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/ninja-and-sorted-arrays_1214628?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/merge-two-sorted-arrays/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:15,
    Concept: "Searching & Sorting",
    Que: "print all subarrays with 0 sum",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/subarrays-with-zero-sum_3161876?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:16,
    Concept: "Searching & Sorting",
    Que: "Product array Puzzle",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/product-of-array-except-self_630271?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/product-array-puzzle/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:17,
    Concept: "Searching & Sorting",
    Que: "Sort array according to count of set bits",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/sort-an-array-according-to-the-count-of-set-bits_873142?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:18,
    Concept: "Searching & Sorting",
    Que: "minimum no. of swaps required to sort the array",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-swaps-to-sort-array_1806885?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/minimum-swaps/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:19,
    Concept: "Searching & Sorting",
    Que: "Bishu and Soldiers",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/search-in-the-array_1116099?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.hackerearth.com/problem/algorithm/bishu-and-soldiers-227/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:20,
    Concept: "Searching & Sorting",
    Que: "Rasta and Kheshtak",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/ninja-and-his-sword_1164268?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:21,
    Concept: "Searching & Sorting",
    Que: "Kth smallest number again",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/kth-smallest-integer-in-ranges_1115609?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:22,
    Concept: "Searching & Sorting",
    Que: "Find pivot element in a sorted array",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/game-of-largest-element_1170064?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:23,
    Concept: "Searching & Sorting",
    Que: "K-th Element of Two Sorted Arrays",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/k-th-element-of-2-sorted-array_1164159?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:24,
    Concept: "Searching & Sorting",
    Que: "Aggressive cows",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/chess-tournament_981299?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.spoj.com/problems/AGGRCOW/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:25,
    Concept: "Searching & Sorting",
    Que: "Book Allocation Problem",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/ayush-gives-ninjatest_1097574?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:26,
    Concept: "Searching & Sorting",
    Que: "EKOSPOJ:",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/kevin-and-his-fruits_1164267?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.spoj.com/problems/EKO/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:27,
    Concept: "Searching & Sorting",
    Que: "Job Scheduling Algo",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/weighted-job-scheduling_1094885?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:28,
    Concept: "Searching & Sorting",
    Que: "Missing Number in AP",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/missing-number-in-ap_975498?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/arithmetic-number/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:29,
    Concept: "Searching & Sorting",
    Que: "Smallest number with atleastn trailing zeroes infactorial",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/smallest-number-with-at-least-n-trailing-zeros-in-factorial_1115774?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:30,
    Concept: "Searching & Sorting",
    Que: "Painters Partition Problem:",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/painter-s-partition-problem_1089557?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:31,
    Concept: "Searching & Sorting",
    Que: "ROTI-Prata SPOJ",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/cooking-ninjas_1164174?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.spoj.com/problems/PRATA/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:32,
    Concept: "Searching & Sorting",
    Que: "DoubleHelix SPOJ",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/maximize-the-sum_1118624?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.spoj.com/problems/ANARC05B/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:33,
    Concept: "Searching & Sorting",
    Que: "Subset Sums",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/city-of-happy-people_1199336?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.spoj.com/problems/SUBSUMS/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:34,
    Concept: "Searching & Sorting",
    Que: "Find the inversion count",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/equal-global-and-local-inversions_1463976?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/inversion-of-array/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:35,
    Concept: "Searching & Sorting",
    Que: "Implement Merge-sort in-place",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/merge-sort-in-place_1118623?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/in-place-merge-sort/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id:36,
    Concept: "Searching & Sorting",
    Que: "Partitioning and Sorting Arrays with Many Repeated Entries",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/partitioning-and-sorting-arrays-with-many-repeated-entries_1170515?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    
    Concept_Exp: <Link to="https://www.baeldung.com/java-sorting-arrays-with-repeated-entries"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  }
  
];

function SearchSortingQ() {
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
<h2>Search Sorting 🔥</h2>

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

export default SearchSortingQ;