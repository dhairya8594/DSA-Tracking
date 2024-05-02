import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
  {
    check:<input type="checkbox" name = "box1"/>,
    id: 1,
    Concept: "Array",
    Que: "Reverse the array",
    Code: <Link to="https://www.naukri.com/code360/problems/reverse-the-array_1262298?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/program-to-reverse-an-array/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 2,
    Concept: "Array",
    Que: "Find the maximum and minimum element in an array",
    Code: <Link to="https://www.naukri.com/code360/problems/sum-of-max-and-min_1081476?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MinMaxArrayCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 3,
    Concept: "Array",
    Que: "Find the 'Kth' max and min element of an array",
    Code: <Link to="https://www.naukri.com/code360/problems/kth-smallest-and-largest-element-of-array_1115488?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="KthMinMaxCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 4,
    Concept: "Array",
    Que: "Given an array of 0s, 1s, and 2s, sort the array without using sorting algorithms",
    Code: <Link to="https://www.naukri.com/code360/problems/sort-0-1-2_631055?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="Sort012Code"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 5,
    Concept: "Array",
    Que: "Move all the negative elements to one side of the array",
    Code: <Link to="https://www.naukri.com/code360/problems/move-all-negative-numbers-to-beginning-and-positive-to-end_1112620?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MoveNegativesCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 6,
    Concept: "Array",
    Que: "Find the Union and Intersection of two sorted arrays",
    Code: <Link to="https://www.naukri.com/code360/problems/find-similarities-between-two-arrays_1229070?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="UnionIntersectionCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 7,
    Concept: "Array",
    Que: "Write a program to cyclically rotate an array by one",
    Code: <Link to="https://www.naukri.com/code360/problems/rotate-array_1230543?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="RotateArrayCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 8,
    Concept: "Array",
    Que: "Find Largest sum contiguous Subarray [V. IMP]",
    Code: <Link to="https://www.naukri.com/code360/problems/maximum-subarray-sum_630526?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="LargestSubarraySumCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 9,
    Concept: "Array",
    Que: "Minimise the maximum difference between heights [V. IMP]",
    Code: <Link to="https://www.naukri.com/code360/problems/minimize-the-difference_3208652?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MinimizeMaxDifferenceCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 10,
    Concept: "Array",
    Que: "Minimum no. of Jumps to reach end of an array",
    Code: <Link to="https://www.naukri.com/code360/problems/minimum-jumps_1062693?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MinJumpsArrayCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 11,
    Concept: "Array",
    Que: "Find duplicate in an array of N+1 Integers",
    Code: <Link to="https://www.naukri.com/code360/problems/duplicate-in-array_893397?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="FindDuplicateCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 12,
    Concept: "Array",
    Que: "Merge 2 sorted arrays without using Extra space",
    Code: <Link to="https://www.naukri.com/code360/problems/merge-intervals_699917?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MergeArraysCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 13,
    Concept: "Array",
    Que: "Kadane's Algorithm [V.V.V.V.V IMP]",
    Code: <Link to="https://leetcode.com/problems/maximum-subarray/description/"><img src={Coding} alt="KadanesAlgorithmCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 14,
    Concept: "Array",
    Que: "Merge Intervals",
    Code: <Link to="https://leetcode.com/problems/merge-intervals/description/"><img src={Coding} alt="MergeIntervalsCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/merging-intervals/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 15,
    Concept: "Array",
    Que: "Next Permutation",
    Code: <Link to="https://www.naukri.com/code360/problems/next-permutaion_893046?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="NextPermutationCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/next-permutation/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 16,
    Concept: "Array",
    Que: "Count Inversions",
    Code: <Link to="https://www.naukri.com/code360/problems/count-inversions_615?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CountInversionsCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 17,
    Concept: "Array",
    Que: "Best time to buy and Sell stock",
    Code: <Link to="https://www.naukri.com/code360/problems/stocks-are-profitable_893405?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="BuySellStockCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 18,
    Concept: "Array",
    Que: "Find all pairs in integer array whose sum is equal to a given number",
    Code: <Link to="https://www.naukri.com/code360/problems/pair-sum_1171154?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="PairsSumCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 19,
    Concept: "Array",
    Que: "Find common elements in 3 sorted arrays",
    Code: <Link to="https://www.naukri.com/code360/problems/common-elements-in-three-sorted-arrays_1113130?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CommonElementsCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/common-elements1132/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 20,
    Concept: "Array",
    Que: "Rearrange the array in alternating positive and negative items with O(1) extra space",
    Code: <Link to="https://www.naukri.com/code360/problems/rearrange-alternatively_873851?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="RearrangeArrayCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 21,
    Concept: "Array",
    Que: "Find if there is any subarray with sum equal to 0",
    Code: <Link to="https://www.naukri.com/code360/problems/subset-sum-equal-to-k_1550954?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="SubarraySumZeroCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 22,
    Concept: "Array",
    Que: "Find factorial of a large number",
    Code: <Link to="https://www.naukri.com/code360/problems/factorial-of-a-large-number_1115471?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="FactorialCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 23,
    Concept: "Array",
    Que: "Find maximum product subarray",
    Code: <Link to="https://www.naukri.com/code360/problems/maximum-product-subarray_1115474?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MaxProductSubarrayCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/maximum-product-subarray3604/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 24,
    Concept: "Array",
    Que: "Find longest consecutive subsequence",
    Code: <Link to="https://www.naukri.com/code360/problems/longest-consecutive-sequence_759408?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="LongestConsecutiveSeqCode"/></Link>,
    Concept_Exp:<Link to="https://www.geeksforgeeks.org/problems/longest-consecutive-subsequence2449/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 25,
    Concept: "Array",
    Que: "Given an array of size n and a number k, find all elements that appear more than 'n/k' times",
    Code: <Link to="https://www.naukri.com/code360/problems/elements-occur-more-than-n-k-times_1113146?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MoreThanNKTimesCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 26,
    Concept: "Array",
    Que: "Maximum profit by buying and selling a share at most twice",
    Code: <Link to="https://www.naukri.com/code360/problems/buy-and-sell-stock_1071012?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MaxProfitTwiceCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 27,
    Concept: "Array",
    Que: "Find whether an array is a subset of another array",
    Code: <Link to="https://www.naukri.com/code360/problems/check-subset_762948?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="SubsetArrayCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 28,
    Concept: "Array",
    Que: "Find the triplet that sums to a given value",
    Code: <Link to="https://www.naukri.com/code360/problems/triplets-with-given-sum_893028?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="TripletSumCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 29,
    Concept: "Array",
    Que: "Trapping Rain Water problem",
    Code: <Link to="https://www.naukri.com/code360/problems/trapping-rainwater_630519?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="TrappingRainWaterCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 30,
    Concept: "Array",
    Que: "Chocolate Distribution problem",
    Code: <Link to="https://www.naukri.com/code360/problems/chocolate-problem_893280?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="ChocolateDistributionCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 31,
    Concept: "Array",
    Que: "Smallest Subarray with sum greater than a given value",
    Code: <Link to="https://www.naukri.com/code360/problems/rahul-and-minimum-subarray_1551987?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="SmallestSubarraySumCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 32,
    Concept: "Array",
    Que: "Three way partitioning of an array around a given value",
    Code: <Link to="https://www.naukri.com/code360/problems/three-way-partition_1170519?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="ThreeWayPartitionCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/three-way-partitioning-of-an-array-around-a-given-range/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 33,
    Concept: "Array",
    Que: "Minimum swaps required to bring elements less than or equal to K together",
    Code: <Link to="https://www.naukri.com/code360/problems/minimum-swaps-to-bring-all-elements-less-than-or-equal-to-k-together_1112657?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MinSwapsCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/minimum-swaps-required-bring-elements-less-equal-k-together/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 34,
    Concept: "Array",
    Que: "Minimum no. of operations required to make an array palindrome",
    Code: <Link to="https://www.naukri.com/code360/problems/make-it-palindrome_3189160?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MakePalindromeCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 35,
    Concept: "Array",
    Que: "Median of 2 sorted arrays of equal size",
    Code: <Link to="https://www.naukri.com/code360/problems/find-the-median-of-all-subarrays-of-a-particular-size_1229069?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MedianEqualArraysCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/median-of-two-sorted-arrays/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 36,
    Concept: "Array",
    Que: "Median of 2 sorted arrays of different size",
    Code: <Link to="https://www.naukri.com/code360/problems/median-of-two-sorted-arrays_985294?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="MedianDifferentArraysCode"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  }
];

function ArrayQ() {
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
    <div className="App">
                      <Link to="/"><img src={Back} alt="back" className="Back"/></Link>

      <div className="main-page">
        <h1>DSA Tracker</h1>
        <h2>Array 🔥</h2>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          >
            {`${Math.floor(progressPercentage)}%`}
            </div>
            </div>
      <br />
      <div className="scroll">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Concept</th>
              <th>Question</th>
              <th>Code Practice</th>
              <th>Concept Explanation</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => (
              <tr key={value.id}>
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
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
    </div>
  );
}

export default ArrayQ;