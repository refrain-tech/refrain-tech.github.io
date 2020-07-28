/**
 * @overview Github Pages内で共通で使用する関数・変数を実装する
 * @version 1.0
 * @since 2020/7/28
 * @author Refrain Tech <refrain.tech@gmail.com>
 * @copyright (c) Copyright 2020 refrain.tech All Rights Reserved
 */
"use strict";
firebase.initializeApp({
	apiKey: "AIzaSyC0Q1fvsfu1XevwPMJCrDx7YWBnpIwAxoo",
	appId: "1:832323625618:web:0ad8ba9f5f494b41b7bc4b",
	authDomain: "refrain-tech.firebaseapp.com",
	databaseURL: "https://refrain-tech.firebaseio.com",
	measurementId: "G-1Q8CEKJEJ6",
	messagingSenderId: "832323625618",
	projectId: "refrain-tech",
	storageBucket: "refrain-tech.appspot.com"
});
/**
 * @constant {object} database Firebase Databaseへアクセスするための変数
 */
const database = firebase.database();
