import { Link } from "react-router-dom";
import "../App.css";
import Back from "../Icons/icons8-go-back-30.png";
import Coding from "../Icons/Codingninja.svg";
import GeekFGeek from '../Icons/GeekForGeek.svg';
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    Concept: "String",
    Que: "Reverse a String",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/string-reverse_3210207?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="Coding"/></Link>,
    Concept_Exp: <Link to=""><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 2,
    Concept: "String",
    Que: "Check whether a String is Palindrome or not",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/check-if-the-string-is-a-palindrome_1062633?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/palindrome-string0817/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 3,
    Concept: "String",
    Que: "Find Duplicate characters in a string",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/duplicate-characters_3189116?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 4,
    Concept: "String",
    Que: "Why strings are immutable in Java?",
    Code: <Link to="https://www.naukri.com/code360/library/strings-415"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to=""><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 5,
    Concept: "String",
    Que: "Write a Code to check whether one string is a rotation of another",
    Code: <Link to="https://www.naukri.com/code360/problems/check-if-one-string-is-a-rotation-of-another-string_1115683?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 6,
    Concept: "String",
    Que: "Write a Program to check whether a string is a valid shuffle of two strings or not",
    Code: <Link to="https://www.naukri.com/code360/problems/shuffle-two-strings_1115692?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 7,
    Concept: "String",
    Que: "Count and Say problem",
    Code: <Link to="https://www.naukri.com/code360/problems/write-as-you-speak_1090543?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to=""><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 8,
    Concept: "String",
    Que: "Write a program to find the longest Palindrome in a string [Longest palindromic Substring]",
    Code: <Link to="https://www.naukri.com/code360/problems/longest-palindromic-substring_758900?topList=love-babbar-dsa-sheet-problems&utm_source=website&utm_medium=affiliate&utm_campaign=450dsatracker"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 9,
    Concept: "String",
    Que: "Find Longest Recurring Subsequence in String",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/longest-repeating-subsequence_1062697?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 10,
    Concept: "String",
    Que: "Print all Subsequences of a string",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/subsequences-of-string_985087?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/print-subsequences-string/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 11,
    Concept: "String",
    Que: "Print all the permutations of the given string",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/print-permutations-string_758958?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 12,
    Concept: "String",
    Que: "Split the Binary string into two substrings with equal 0’s and 1’s",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/sort-array-of-0s-and-1s_2656186?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 13,
    Concept: "String",
    Que: "Word Wrap Problem [VERY IMP]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/word-wrap_982931?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/word-wrap/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 14,
    Concept: "String",
    Que: "EDIT Distance [Very Imp]",
    Code: <Link to="https://practice.geeksforgeeks.org/problems/edit-distance3702/1"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/edit-distance3702/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 15,
    Concept: "String",
    Que: "Find next greater number with the same set of digits [Very Very IMP]",
    Code: <Link to=""><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/next-permutation/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 16,
    Concept: "String",
    Que: "Balanced Parenthesis problem [Imp]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/valid-parenthesis_795104?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/parenthesis-checker/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 17,
    Concept: "String",
    Que: "Word break Problem [ Very Imp]",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/word-break-1_758963?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/word-break/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 18,
    Concept: "String",
    Que: "Rabin Karp Algo",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/stringmatch-rabincarp_1115738?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 19,
    Concept: "String",
    Que: "KMP Algo",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/find-pattern-in-string_1112621?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 20,
    Concept: "String",
    Que: "Convert a Sentence into its equivalent mobile numeric keypad sequence",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/convert-sentence_1115490?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 21,
    Concept: "String",
    Que: "Minimum number of bracket reversals needed to make an expression balanced",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-cost-to-make-string-valid_1115770?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/count-the-reversals/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 22,
    Concept: "String",
    Que: "Count All Palindromic Subsequence in a given String",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/count-palindrome-words-in-a-sentence_975378?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 23,
    Concept: "String",
    Que: "Count of number of given string in 2D character array",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/count-strings_1118116?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 24,
    Concept: "String",
    Que: "Search a Word in a 2D Grid of characters",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/word-search_630520?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 25,
    Concept: "String",
    Que: "Boyer Moore Algorithm for Pattern Searching",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/boyer-moore-algorithm-for-pattern-searching_1115634?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 26,
    Concept: "String",
    Que: "Converting Roman Numerals to Decimal",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/roman-number-to-integer_981308?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 27,
    Concept: "String",
    Que: "Longest Common Prefix",
    Code: <Link to=""><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://leetcode.com/problems/longest-common-prefix/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 28,
    Concept: "String",
    Que: "Number of flips to make binary string alternate",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/beautiful-string_1115625?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/min-number-of-flips/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 29,
    Concept: "String",
    Que: "Find the first repeated word in string",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/second-most-repeated-word_3210218?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/find-first-repeated-word-string/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 30,
    Concept: "String",
    Que: "Minimum number of swaps for bracket balancing",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-number-of-swaps-for-bracket-balancing_1115682?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 31,
    Concept: "String",
    Que: "Find the longest common subsequence between two strings",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/longest-common-subsequence_1063255?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 32,
    Concept: "String",
    Que: "Program to generate all possible valid IP addresses from given string",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/ip-address_992846?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 33,
    Concept: "String",
    Que: "Write a program to find the smallest window that contains all characters of string itself",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/shortest-substring-with-all-characters_704894?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/smallest-distant-window/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 34,
    Concept: "String",
    Que: "Rearrange characters in a string such that no two adjacent are same",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/rearrange-string_982765?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/rearrange-characters4649/1"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 35,
    Concept: "String",
    Que: "Minimum characters to be added at front to make string palindrome",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-characters-for-palindrome_893000?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 36,
    Concept: "String",
    Que: "Given a sequence of words, print all anagrams together",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/group-anagrams-together_985354?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/k-anagrams-1/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 37,
    Concept: "String",
    Que: "Find the smallest window in a string containing all characters of another string",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/smallest-window-in-string-containing-all-the-characters-of-another-string_981175?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.codingninjas.com/codestudio/problems/smallest-window-in-string-containing-all-the-characters-of-another-string_981175?topList=love-babbar-dsa-sheet-problems"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 38,
    Concept: "String",
    Que: "Recursively remove all adjacent duplicates",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/remove-consecutive-duplicates_893195?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://practice.geeksforgeeks.org/problems/consecutive-elements/0"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 39,
    Concept: "String",
    Que: "String matching where one string contains wildcard characters",
    Code: <Link to=""><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to=""><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 40,
    Concept: "String",
    Que: "Function to find Number of customers who could not get a computer",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/count-customers-who-did-not-get-a-computer_1115775?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 41,
    Concept: "String",
    Que: "Transform One String to Another using Minimum Number of Given Operation",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-shift-operations_1115784?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 42,
    Concept: "String",
    Que: "Check if two given strings are isomorphic to each other",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/minimum-shift-operations_1115784?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  },
  {
    id: 43,
    Concept: "String",
    Que: "Recursively print all sentences that can be formed from list of word lists",
    Code: <Link to="https://www.codingninjas.com/codestudio/problems/ninja-and-sentences_1123512?topList=love-babbar-dsa-sheet-problems"><img src={Coding} alt="CodiReverse the arrayng"/></Link>,
    Concept_Exp: <Link to="https://www.geeksforgeeks.org/program-to-reverse-an-array/"><img src={GeekFGeek} alt="GeekFGeek"/></Link>
  }
];

function Stringlist() {
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
<h2>String 🔥</h2>
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
            <th>Practice Links </th>
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

export default Stringlist;