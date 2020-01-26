import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyB2JVY0nob_IijBj6fCA5ZcWEHar1HYcQE",
  authDomain: "note-manager-fded4.firebaseapp.com",
  databaseURL: "https://note-manager-fded4.firebaseio.com",
  projectId: "note-manager-fded4",
  storageBucket: "note-manager-fded4.appspot.com",
  messagingSenderId: "135373388636",
  appId: "1:135373388636:web:a89c3fe0c9fbb16101df99",
  measurementId: "G-G9Y3R9Y7BK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//Cho toi du lieu can truy cap
var noteData = firebase.database().ref("noteData");

//1.Lay du lieu
/*
 noteData.once('value').then(snapshot => {
   console.log(snapshot.val());
 })
*/

//2.Sua du lieu va co the them du lieu
/*
 noteData.set({
   id: 12,
   title:'Ko biet ghi gi'
 })
 */

//3.Them Du lieu tu sinh ra ID
/*
 noteData.push({
   title: 'Ghi chu so 3',
   content:'noi dung so 3'
 })
 */

//4.Xoa du lieu
/*
  noteData.child('node1').remove();
*/

export { firebase,noteData };
