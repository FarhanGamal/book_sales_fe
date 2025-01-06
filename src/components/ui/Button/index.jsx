// // css in js 
// const styles = {
//   backgroundColor: 'lightskyblue',
//   padding: '10 px 20px',
//   border: 'none',
//   borderRadius: '5px'
// }
export default function Button(props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{props.txt}</button>
  )
}






