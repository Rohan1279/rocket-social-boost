function PackagesCards() {
  const { useState, useEffect } = React;
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [allCategories, setAllCategories] = useState({})
  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setAllCategories(data)
        setUniqueCategories(()=>data.filter((item, idx) => data.findIndex((item2) => item2.category_id === item.category_id) === idx));
      });
  }, []);
    const renderOrderModal = (categoryId) => {
    const  selectedCategory =  allCategories.filter((item, idx) => item.category_id === categoryId);
    const orderSectionContainer = document.querySelector(".order-section-container");
    orderSectionContainer.innerHTML = `
    <section class="section1 ">
    ${
      selectedCategory.map((item, idx) => `
          <div>
          <h2>Name: ${item.package_name}</h2>
          <p class="ld-fh-element inline-block relative font-normal text-14 m-0">Package ID: ${item.id}</p>
          </div>
      `).join('')
  }		
							<a  class="order-btn btn btn-solid btn-sm btn-block btn-icon-right btn-hover-reveal  text-15 mt-15 rounded-6 font-medium leading-2em bg-red-100 text-amber-600" ><span class="btn-txt" data-text="Join Simple Plan">Choose another package</span><span class="btn-icon"><i aria-hidden="true" class="lqd-icn-ess icon-md-arrow-forward"></i></span></a>				
							<span>Category</span>
							<select id="categoryFilter" class="w-full">
								<option value="option1">All Category</option>
								<option value="option2">Facebook</option>
								<option value="option3">Instagram</option>
								<option value="option3">TikTok</option>
							  </select>
							<span>Services</span>
							<select id="categoryFilter" class="w-full">
								<option value="option1">Instagram Like Updated</option>
								<option value="option2">TikTok Like</option>
								<option value="option3">Instagram Like and Follow Sache</option>
								<option value="option3">Facebook Like and Follow	</option>
							  </select>
							
							<div class="order-input-group">
								<input required="" type="text" name="username" autocomplete="off" class="order-input">
								<label class="user-label">Link</label>
							  </div>
							<div class="order-input-group">
								<input required="" type="email" name="email" autocomplete="off" class="order-input">
								<label class="user-label">Quantities</label>
							  </div>
				
							  <a  class="order-btn btn btn-solid btn-sm btn-block btn-icon-right btn-hover-reveal  text-15 mt-15 rounded-6 font-medium leading-2em bg-red-100 text-amber-600" ><span class="btn-txt" data-text="Join Simple Plan">Buy now</span><span class="btn-icon"><i aria-hidden="true" class="lqd-icn-ess icon-md-arrow-forward"></i></span></a>
						</section>
						
						<section class="section2 overflow-hidden">
							
							<div class="lg:w-full lg:text-end  bg-center bg-contain bg-no-repeat " style="background-image: url('./assets/images/demo/index/shape-Blob.svg');">
								<div class="lqd-imggrp-single block relative" data-float="ease-in-out">
									<div class="lqd-imggrp-img-container inline-flex relative items-center justify-center">
										<figure class="w-full relative">
											<img width="1080" height="763" src="./assets/images/demo/index/anim-banner.gif" alt="banner image">
										</figure>
									</div>
								</div>
							</div>
						</section>
    
    `
    }
  return (
    <>   
    <style>
  {`
   .order-section-container {
    display: flex;
    width: 100vw;
  }
  
  .section1, 
  .section2 {
    width: 50%;
  }
  .section1{
      background: rgb(228, 223, 223); 
      min-height: 100vh;
      max-height: fit-content;
      padding: 60px 230px;
      
  }
  .section2 {
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background: #edede9;
    border-radius: 20px;
  }
  .section1 h2 p{
      /* text-align: center; */
  }
  
  .order-input-group {
   position: relative;
   margin-top: 1rem;
  }
  
  .order-input {
  width: 400px;
   border: solid 1.5px #9e9e9e;
   border-radius: 1rem;
   background: none;
   padding: .5rem .5rem;
   font-size: 1rem;
   color: #45485f;
   transition: border 150ms cubic-bezier(0.4,0,0.2,1);
  }
  
  .user-label {
   position: absolute;
   font-size: 16px;
   left: 15px;
   color: #45485f;
   pointer-events: none;
   transform: translateY(.5rem);
   transition: 150ms cubic-bezier(0.4,0,0.2,1);
  }
  
  
  
  .order-input:focus ~ label, input:valid ~ label {
   transform: translateY(-50%) scale(0.8);
   background-color: #e4dfdf;
   padding: 0 .2em;
   color: #4c5383;
  }
  
 
  .order-btn:hover, .order-btn:focus {
      background-color: #d5bdaf;
      cursor: pointer;
  }
  .order-btn:hover .btn-txt,.icon-md-arrow-forward{
      color: #edede9;
  }


  `}
    </style>

    <div className="lqd-tabs-content relative  mb-220">
      <div
        id="lqd-tab-pricing-monthly"
        role="tabpanel"
        className="lqd-tabs-pane fade active show"
      >
        <div className="pt-50 pb-20 px-20 lg:p-0 module-sections ">
          <div className="container p-0 ">
            <div className="row m-0">
              {uniqueCategories.map((item, idx) => (
                <div key={item?.category_id} className="co-12 col-md-4 p-0 ">
                  <div className="module-section mx-20 flex flex-wrap bg-white rounded-10 border-0  border-gray-100 shadow-sm transition-all ">
                    <div className="w-full flex flex-col items-center border-bottom  border-gray-100 transition-all pt-15 pb-5 px-35">
                      <div className="mb-20 ld-fancy-heading relative">
                        <p className="font-title text-16 font-bold leading-1 tracking-0 -mb-1em text-amber-600 ld-fh-element inline-block relative">
                         Category: {item?.category_id}
                        </p>
                      </div>
                      <div className="ld-fancy-heading relative">
                        <p>Starts from</p>
                        <h3 className="font-title text-46 font-bold mb-20 ld-fh-element inline-block relative">
                           ${item?.price}{" "}
                          <small className="font-bold text-13 text-sky-900">
                            /mo
                          </small>
                        </h3>
                      </div>
                    </div>
                    <div className="module-section-bottom w-full flex flex-col py-30 px-55 items-center text-center">
                      <div className="mb-20 ld-fancy-heading relative lg:text-start">
                        <p className="text-16 leading-1/5em mb-0/5em text-secondary ld-fh-element inline-block relative">
                          {item?.description}
                        </p>
                      </div>
                      <div className="w-full mb-20 -mt-5 iconbox flex flex-grow-1 relative flex-wrap items-center iconbox-circle">
                        <div className="iconbox-icon-wrap mr-15">
                          <div className="iconbox-icon-container inline-flex relative z-1 rounded-full w-25 h-25 text-14 text-amber-600 bg-amber-100">
                            <i
                              aria-hidden="true"
                              className="lqd-icn-ess icon-ion-ios-checkmark"
                            ></i>
                          </div>
                        </div>
                        <h3 className="text-14 font-normal m-0 text-secondary lqd-iconbox-heading">
                          99.9 Uptime Guarantee{" "}
                        </h3>
                      </div>
                      <div className="w-full mb-20 -mt-5 iconbox flex flex-grow-1 relative flex-wrap items-center iconbox-circle">
                        <div className="iconbox-icon-wrap mr-15">
                          <div className="iconbox-icon-container inline-flex relative z-1 rounded-full w-25 h-25 text-14 text-amber-600 bg-amber-100">
                            <i
                              aria-hidden="true"
                              className="lqd-icn-ess icon-ion-ios-checkmark"
                            ></i>
                          </div>
                        </div>
                        <h3 className="text-14 font-normal m-0 text-secondary lqd-iconbox-heading">
                          Unlimited Storage{" "}
                        </h3>
                      </div>
                      <a
                          onClick={() => {
                            renderOrderModal(item?.category_id)
                          }}
                          href="#contact-modal"
                          className="btn btn-solid btn-sm btn-block btn-icon-right btn-hover-reveal module-btn-1 text-15 mt-15 rounded-6 font-medium leading-2em bg-red-100 text-amber-600"
                          data-lity="#contact-modal"
                      >
                        <span className="btn-txt" data-text="Join Simple Plan">
                          Buy
                        </span>
                        <span className="btn-icon">
                          <i
                            aria-hidden="true"
                            className="lqd-icn-ess icon-md-arrow-forward"
                          ></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  );
}
ReactDOM.render(<PackagesCards />, document.querySelector("#packages-cards"));
