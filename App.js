import { useEffect,useState } from 'react';
import Gallery from './components/gallery';
import SerchBar from './components/serchBar';



import './App.css';

function App() {
let [serch,setSerch] = useState('')
let [message,setMessage] = useState('serch for music')
let [data,setData] =useState([])
useEffect(()=>{
  const fetchData = async()=>{
    if (!serch)
document.tytle=`${serch}music`;
const response = await fetch(`https://itunes.apple.com/search?term=${serch}`)
const resData=await response.json()
if(resData.results.length){
  setData(resData.results)
}
else{
  setData([])

}
console.log(resData)  
}
  fetchData()
},[])




  return (
    <div className="App">
      {message}
     //todo gallery here 
    <SerchBar setSerch={setSerch}/>
    <gallery data={data}/>


    </div>
  );
}

export default App;
