

import Container from "../Components/Ui/Container";
import introImage from "../assets/images/intro.jpg"

const Home = () => {
     return (
          <Container>
               <div className="flex flex-col md:flex-row items-center gap-10 h-screen py-5 md:py-0">
                    <div className="flex-1 space-y-5">
                         <h1 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold  leading-tight">Quality Cleaning <br /> <span className="text-green-600">For Your Home</span></h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum unde perspiciatis quae doloribus optio cumque placeat ut mollitia molestiae?</p>

                         <div className="flex flex-wrap gap-4">
                              <button className="btn btn-success">Book a Service</button>
                              <button className="btn btn-outline btn-success">Read More</button>
                         </div>

                         <div className="divider"></div>

                         <div className="avatar-group -space-x-6">
                              <div className="avatar">
                                   <div className="w-12">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                   </div>
                              </div>
                              <div className="avatar">
                                   <div className="w-12">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                   </div>
                              </div>
                              <div className="avatar">
                                   <div className="w-12">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                   </div>
                              </div>
                              <div className="avatar placeholder">
                                   <div className="w-12 bg-neutral-focus text-neutral-content">
                                        <span>+99</span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="flex-1">
                         <img className="h-[650px] object-cover overflow-hidden" src={introImage} alt="" />
                    </div>
               </div>
          </Container>
     );
};

export default Home;