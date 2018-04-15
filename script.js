// var button = document.getElementById("submit");
// var input1 = document.getElementById("agency1");
// var input2 = document.getElementById("interest1");
// var input3 = document.getElementById("amount1");
// var tb = document.querySelector("tbody");


// function inputLength1() {
// 	return input1.value.length;
// }


// function inputLength2() {
// 	return input2.value.length;
// }


// function inputLength3() {
// 	return input3.value.length;
// }

// function createListElement(){
// 	// var td = document.createElement("td");
// 	// td.appendChild(document.createTextNode(input1.value && input2.value && input3.value));
// 	// tb.appendChild(td);
// 	// input.value = "";
// 	console.log(input1.value, input2.value, input3.value);
// }

// function addListAfterClick () {
// 	if (inputLength1() && inputLength2() && inputLength3() > 0) {
// 		createListElement();
//    }

// }

// // function addListAfterKeypress(event) {
// // 	if (inputLength() > 0 && event.keyCode === 13) {
// // 	createListElement();
// //    }
// // }

// button.addEventListener("click", addListAfterClick)

// input.addEventListener("keypress", addListAfterKeypress)

$("#example-table").tabulator({
    height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns", //fit columns to width of table (optional)
    columns:[ //Define Table Columns
        {title:"Agency", field:"agency", width:150},
        {title:"Interest", field:"interest", align:"left", formatter:"progress"},
        {title:"Amount", field:"amount"},
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
    {id:1, agency:"Oli Bob", interest:"12", amount:"red"},
    {id:2, agency:"Mary May", interest:"1", amount:"blue"},
    {id:3, agency:"Christine Lobowski", interest:"42", amount:"green"},
    {id:4, agency:"Brendon Philips", interest:"125", amount:"orange"},
    {id:5, agency:"Margret Marmajuke", interest:"16", amount:"yellow"},
];

$("#example-table").tabulator("setData", tabledata);
