// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            <code>kamal</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { Component } from 'react';
// class App extends Component{
//   render(){
//     return(
//       <div>
//       <h1> GOOD MORNING</h1>
//       </div>
//       );
//   //   }
  
//   //   }
//   //   export default App;


//     import React, { Component } from 'react';
//     class App extends Component{
//       constructor(){
//         super();
//         this.state={fruit:"apple"};
//       }
//       render(){
//         return(
//           <div>
//             <h1> i am {this.state.fruit}fruit</h1>
//           </div>
//         )
//       }
//     } 
//     export default App;

//     import React, { Component } from 'react';
//       class App extends Component{
//         constructor(props)
//         {
//           super(props);
        
//         }
//         render(){
//           return(
//             <div>
//               <h1> i am {this.props.fruit}fruit</h1>
//             </div>
//           );
//         }
//       }
//       export default App;

//       import React, { Component } from 'react';
//       class App extends Component{
//         constructor(){
//           super();  
//           this.state={
//             name:"apple",
//             color:"red",
//             county:"washington"
//           };
//         }
//         render(){
//           return(
//             <div>
//               <h1>i am a { this.state.name}and my color is: {this.state.color}
//               my country is {this.state.country}</h1>

//             </div>
//           );
//         }
//           }
//           export default App;

//       import ReactDOM from 'react-dom';
//       import React from 'react';
//       class Inlineeexample extends
//       React.Component{
//         render()
//         {
//           return(
//             <div>
//               <h1 style={{color:'red',textAlign:'center'}}>kAMALESH</h1>
//               <h2>OK</h2>
//             </div>
//           )
//         }
//       }
//       export default Inlineeexample;

    //   import ReactDOM from 'react-dom';
    //   import React from 'react';
    //   import './ap.css';
    //    class Reactstyle extends React.Component{
    //     render()
    //     {
    //       const mystyle={
    //         color:"blue",
    //         fontfamily:"Arial"

    //       };
    //       return(
    //         <div>
    //           <h1 style={mystyle}>OK</h1>
    //           <h1 className='App'>kamalesh</h1>

    //           <div>
    //     <h1>play the video:</h1>
    //     <video width="700" height="700" controls>
    //       <source src='./video/vd.mp4'/>
    //     </video>
    //   </div>
              
    //         </div>
    //       );
    //     }
    //    }
    //    ReactDOM.render(<Reactstyle/>,document.getElementById("root"));


    
    // var a=(x)=>
    // {
    //   var a=5;
    //   var b=10;
    //   var c=a+b+x;
    //   document.getElementById
    //   ('root').innerHTML=c;
    // }
    // a(30);




    import React from "react";
    import img1 from './img/pagani1.jpg';
    import img2 from './img/pagani2.jpg';
    import img3 from './img/pagani3.jpg';
    import img4 from './img/pagani4.webp';
    
    import './pagani.css';
    class Task4 extends React.Component{
        render(){
            return(
                <div>
                    <div>
                        <img className="img" src={img1}/>
                        <img className="img1" src={img2}/>
                        <div>
                        
                        <video autoPlay muted loop className="vid" width={850} controls>
                            <source src='./video/vd.mp4' type='video/mp4'/>
                        </video>
    
                        </div>
                        <img className="img2" src={img3}/>
                        <img className="img3" src={img4}/>
                    </div>
                </div>
            );
        }
    }
    
    export default Task4;



     
      


