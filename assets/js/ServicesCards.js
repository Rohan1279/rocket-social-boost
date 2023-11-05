function ServicesCards() {
  const { useState, useEffect } = React;
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("/packages.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("====================================");
        console.log(data?.data);
        console.log("====================================");
        setPackages(data?.data);
      });
  }, []);

  return (
    <div class="lqd-tabs-content relative  mb-220">
      <div
        id="lqd-tab-pricing-monthly"
        role="tabpanel"
        class="lqd-tabs-pane fade active show"
      >
        <div class="pt-50 pb-20 px-20 lg:p-0 module-sections ">
          <div class="container p-0 ">
            <div class="row m-0">
              {/* map on packages array and add the item.id in p tag */}
              {packages.map((item) => (
                <div class="co-12 col-md-4 p-0 my-20 ">
                  <div class="module-section mx-20 flex flex-wrap bg-white rounded-10 border-0  border-gray-100 shadow-sm transition-all ">
                    <div class="w-full flex flex-col items-center border-bottom  border-gray-100 transition-all pt-15 pb-5 px-35">
                      <div class="mb-20 ld-fancy-heading relative">
                        <p class="font-title text-16 font-bold leading-1 tracking-0 -mb-1em text-amber-600 ld-fh-element inline-block relative">
                          {item?.package_name}
                        </p>
                      </div>
                      <div class="ld-fancy-heading relative">
                        <h3 class="font-title text-46 font-bold mb-20 ld-fh-element inline-block relative">
                          ${item?.price}{" "}
                          <small class="font-bold text-13 text-sky-900">
                            /mo
                          </small>
                        </h3>
                      </div>
                    </div>
                    <div class="module-section-bottom w-full flex flex-col py-30 px-55 items-center text-center">
                      <div class="mb-20 ld-fancy-heading relative lg:text-start">
                        <p class="text-16 leading-1/5em mb-0/5em text-secondary ld-fh-element inline-block relative">
                          Use customer data to build great and solid product{" "}
                        </p>
                      </div>
                      <div class="w-full mb-20 -mt-5 iconbox flex flex-grow-1 relative flex-wrap items-center iconbox-circle">
                        <div class="iconbox-icon-wrap mr-15">
                          <div class="iconbox-icon-container inline-flex relative z-1 rounded-full w-25 h-25 text-14 text-amber-600 bg-amber-100">
                            <i
                              aria-hidden="true"
                              class="lqd-icn-ess icon-ion-ios-checkmark"
                            ></i>
                          </div>
                        </div>
                        <h3 class="text-14 font-normal m-0 text-secondary lqd-iconbox-heading">
                          99.9 Uptime Guarantee{" "}
                        </h3>
                      </div>
                      <div class="w-full mb-20 -mt-5 iconbox flex flex-grow-1 relative flex-wrap items-center iconbox-circle">
                        <div class="iconbox-icon-wrap mr-15">
                          <div class="iconbox-icon-container inline-flex relative z-1 rounded-full w-25 h-25 text-14 text-amber-600 bg-amber-100">
                            <i
                              aria-hidden="true"
                              class="lqd-icn-ess icon-ion-ios-checkmark"
                            ></i>
                          </div>
                        </div>
                        <h3 class="text-14 font-normal m-0 text-secondary lqd-iconbox-heading">
                          Unlimited Storage{" "}
                        </h3>
                      </div>
                      <a
                        href="#contact-modal"
                        class="btn btn-solid btn-sm btn-block btn-icon-right btn-hover-reveal module-btn-1 text-15 mt-15 rounded-6 font-medium leading-2em bg-red-100 text-amber-600"
                        data-lity="#contact-modal"
                      >
                        <span class="btn-txt" data-text="Join Simple Plan">
                          Join Simple Plan
                        </span>
                        <span class="btn-icon">
                          <i
                            aria-hidden="true"
                            class="lqd-icn-ess icon-md-arrow-forward"
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
  );
}
ReactDOM.render(<ServicesCards />, document.querySelector("#services-cards"));
