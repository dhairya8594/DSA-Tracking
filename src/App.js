// Filename - App.js
import "./App.css";
// <------------Libarary------------>
import React, { Component } from "react";
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
// <--------------Libarary END-------------->
// <-----Root File----->
import Main from "./main";
// <--------------Root File END--------------->
// ,----------Page Imports-------------->
import MatrixQ from "./Pages/MatrixQ";
import StringQ from "./Pages/Stringlist.jsx";
import SearchSortingQ from "./Pages/SearchSortinsQ";
import LinkedListQ from "./Pages/LinkedListQ";
import ArrayQ from "./Pages/ArrayQ";
import BinaryTree from "./Pages/BinaryTree";
import BST from "./Pages/BST";
// <------Page Imports End------->

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
          <Route path="/" element={<Main/>}>home</Route>
		  <Route path="/Pages/ArrayQ.jsx" element={<ArrayQ/>}>ArrayQ</Route>
          <Route path="/Pages/MatrixQ.jsx" element={<MatrixQ/>}>Matrix</Route>
          <Route path="/Pages/Stringlist.jsx" element={<StringQ/>}>String</Route>
          <Route path="/Pages/SearchSortinsQ.jsx" element={<SearchSortingQ/>}>SearchSorting</Route>
          <Route path="/Pages/LinkedListQ.jsx" element={<LinkedListQ/>}>LinkedList</Route>
		  <Route path="/Pages/BinaryTree.jsx" element={<BinaryTree/>}>BinaryTree</Route>
		  <Route path="/Pages/BST.jsx" element={<BST/>}>BST</Route>

        </Routes>
			</BrowserRouter>
		);
	}
}

export default App;
