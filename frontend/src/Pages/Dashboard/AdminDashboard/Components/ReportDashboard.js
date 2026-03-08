import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function ReportDashboard(){

const [stats,setStats] = useState({
books:0,
members:0,
borrowed:0,
returned:0
})

useEffect(()=>{

// Example data (replace with API later)
setStats({
books:120,
members:45,
borrowed:30,
returned:90
})

},[])

const barData = {
labels:["Books","Members","Borrowed","Returned"],
datasets:[
{
label:"Library Statistics",
data:[stats.books,stats.members,stats.borrowed,stats.returned]
}
]
}

const pieData = {
labels:["Borrowed","Returned"],
datasets:[
{
data:[stats.borrowed,stats.returned]
}
]
}

const downloadPDF = () => {

const doc = new jsPDF()

doc.text("Library Report",20,20)

autoTable(doc,{
head:[["Category","Total"]],
body:[
["Books",stats.books],
["Members",stats.members],
["Borrowed",stats.borrowed],
["Returned",stats.returned]
]
})

doc.save("library_report.pdf")

}

return(

<div style={{padding:"20px"}}>

<h2>Library Report Dashboard</h2>

<div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>

<div style={{width:"400px"}}>
<Bar data={barData}/>
</div>

<div style={{width:"400px"}}>
<Pie data={pieData}/>
</div>

</div>

<br/>

<button onClick={downloadPDF}>
Download Report PDF
</button>

</div>

)

}

export default ReportDashboard