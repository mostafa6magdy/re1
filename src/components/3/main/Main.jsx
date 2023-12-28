import { useState } from "react";
import './main.css';
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

  const Main = () => {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);
  
    const handleClick = (buttonCategory) => {
      setcurrentActive(buttonCategory);
  
      const newArr = myProjects.filter((item) => {
        const ZZZ = item.category.find((myItem) => {
          return myItem === buttonCategory;
        });
  
        return ZZZ === buttonCategory;
      });
  
      setArr(newArr);
    };
  
    return (
      <main className="flex">
        <section className="flex  left-section">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            all projects
          </button>
  
          <button
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
  
          <button
            onClick={() => {
              handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React & MUI
          </button>
          <button
            onClick={() => {
              handleClick("node");
            }}
            className={currentActive === "node" ? "active" : null}
          >
            Node & Express
          </button>
        </section>
  
        <section className=" flex right-section">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.imgPath}
                  className="  card"
                >
                  <img width={266} src={item.imgPath} alt="" />
  
                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                      tempore dolor in, accusantium laudantium accusamus.
                    </p>
  
                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <div className="icon-link"></div>
                        <div className="icon-github"></div>
                      </div>
  
                      <a className="link flex" href="">
                        more
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-thin-right"
                        ></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    );
  };
  
  export default Main;













































 

//  const Main = () => {
//  return (
 
//     <main className='flex'>
//   <section className='left-section  flex'>
// <button className='active'>all project</button>
// <button>html,css</button>
// <button> javascript</button>
// <button> react & mui</button>
// <button> node & express</button>

//   </section>
//   <section className='right-section flex'>  
  
//    {['aa','bb','cc' ,1.7] .map((item) => {
//     return(
//       <article key={item} className='card'>
//       <img width={255} src='./p1.jpg' alt=''/>
//       <div  style={{width:"255px"}} className='box'
//       >
//     <h1 className='title'> Goda page 2</h1>
//     <p className='sub-title'>Lorem ipsum elit.  beatae quos incidunt quis rem delectus voluptas ea ipsam dolor corporis at nobis aspernatur!</p>
//     <div className=' icons flex'>
//       <div style={{gap:'11px'}} className='flex'>
//        <div className='icon-link'></div>
//        <div className='icon-github'></div>
//       </div>
//       <a className='link flex' href=''>
//         more
//         <span  style={{alignSelf:'end'}} 
//         className='icon-arrow-thin-right'>
    
//         </span>
//       </a>
//     </div>
    
    
    
//       </div>
    
//     </article>
//     )
//    })}


//   </section>
//     </main>
//   );
// }

// export default Main;
