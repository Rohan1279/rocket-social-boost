function OrderModal() {
  const {useLayoutEffect, useEffect, useState} = React;
  const [packages, setPackages] = useState([])
  const categoryId = window?.selectedCategoryId;

  // useEffect(() => {

  //   // You can use categoryId here and ensure it's not null
  //   fetch("/categories.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("====================================");
  //     console.log(data);
  //     console.log("====================================");
  //     // filter the packeges based on the selected categoryId
  //     setPackages(()=>data.filter((item, idx) => item.category_id === categoryId));
  //   });
  // }, []);
    
    return (
      <>
        {/* <h1>test</h1> */}
      {
        window.order ===true && (
          <h1>TEST</h1>
    //  <div id="order-modal" class="lity-modal lqd-modal lity-hide" data-modal-type="fullscreen">
		// 	<div class="lqd-modal-inner">
		// 		<div class="lqd-modal-head"></div>
		// 		<section  class="lqd-modal-content link-black bg-center bg-cover bg-norepeat" style="background-image: url(./assets/images/common/modal-bg.jpeg);">
		// 		</section>
		// 		<div id=""><h1>test</h1></div>
		// 		<div class="lqd-modal-foot"></div>
		// 	</div>
		// </div>
          )
      }
      </>
    );
  }
  ReactDOM.render(<OrderModal />, document.querySelector("#order-modal"));
  