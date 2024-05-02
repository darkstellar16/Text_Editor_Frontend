import './App.css';
import ReszieComp from './ReszieComp';

function App() {
  return (
   <>
   <h2 style={{textAlign: 'center'}}>Text Editor</h2>
   <div style={{display:'flex',flexDirection:'column', marginTop:'50px'}} >
   <div style={{display:'flex',flexDirection:'row' , justifyContent:'center'}}>
   <ReszieComp componentId = '1'/>
   <ReszieComp componentId = '2'/>
   </div>
   <div style={{display:'flex' , justifyContent:'center'}}>
   <ReszieComp componentId ='3'/>
   </div>
   </div>

   </>
  );
}

export default App;
