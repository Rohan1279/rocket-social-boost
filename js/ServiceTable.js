new DataTable("#services-table", {
  ajax: "data.json",
  columns: [
    { data: "service_title" },
    { data: "max_amount" },
    { data: "min_amount" },
    { data: "price" },
    {
      data: null,
      defaultContent: `<a href="#contact-modal" class="btn btn-solid btn-hover-txt-marquee btn-hover-txt-marquee-y btn-icon-right text-14 font-medium rounded-6 leading-30 bg-blue-200 text-blue-900 module-btn-sm px-25" data-lity="#order-modal">
      <span class="btn-txt" data-text="Buy" data-split-text="true" data-split-options='{"type": "chars, words"}'>Buy</span>
      <span class="btn-icon m-0">
        <i aria-hidden="true" class="lqd-icn-ess icon-ion-ios-add"></i>
      </span>
    </a>`,

      orderable: false,
    },
  ],

  // Customizations
  responsive: true,
  autoWidth: false,
  initComplete: function () {
    const tableLength = document.querySelector(".dataTables_length");
    $(tableLength).css({
      display: "none",
    });
    const searchInputDiv = document.querySelector(".dataTables_filter ");
    $(searchInputDiv).css({
      float: "left",
      "font-size": "0.75rem",
      "font-weight": "500",
      "text-transform": "uppercase",
      "letter-spacing": "0.05em",
      color: "#6b7280",
    });
    const searchInput = document.querySelector(".dataTables_filter input");
    $(searchInput).attr("placeholder", "Search for Services");
    $(searchInput).css({
      border: "1px solid gray",
      "border-radius": "20px",
      padding: "5px 10px",
      outline: "none",
      width: "400px",
    });

    // Create a dropdown menu
    let dropdown = document.createElement("select");
    dropdown.innerHTML = `
    <select id="categoryFilter">
      <option value="option1">All Category</option>
      <option value="option2">Instagram</option>
      <option value="option3">Facebook</option>
      <option value="option3">TikTok</option>
    </select>
  `;
    $(dropdown).css({
      float: "right",
      border: "1px solid gray",
      "border-radius": "20px",
      width: "250px",
      padding: "5px",
      outline: "none",
      "margin-left": "10px",
    });
    // Add the dropdown menu beside the search bar
    searchInputDiv.appendChild(dropdown);

    //styles for the pagination buttons
    const paginationButtons = document.querySelectorAll(".dataTables_paginate ");
    paginationButtons.forEach((button) => {
      $(button).css({
        display:"none",
        border: "1px solid gray",
        "border-radius": "20px",
        padding: "5px 10px",
        outline: "none",
        margin: "8px 5px",
      });
    });
    // styles for the table headings
    const tableHeadings = document.querySelectorAll(".sorting");
    tableHeadings.forEach((heading) => {
      $(heading).css({
        "font-size": "0.75rem",
        "font-weight": "900",
        "text-transform": "capitalize",
        "letter-spacing": "0.05em",
        color: "#6b7280",
      });
    });
    //  styles for the table cells
    const tableCells = document.querySelectorAll("td");
    tableCells.forEach((cell) => {
      $(cell).css({
        "font-size": "0.875rem",
        "font-weight": "400",
        color: "#374151",
        "line-height": "1.25rem",
        "letter-spacing": "0.05em",
        padding: "1rem 0.75rem",
        "text-align": "left",
        "vertical-align": "middle",
      });
    });
    // styles for the table itself
    const dataTable = document.querySelector("#services-table");
    $(dataTable).css({
      width: "100%",
      margin: "0 auto",
      clear: "both",
      "border-spacing": "5px",
      "border-collapse": "collapse",
    });
    //  styles for the dataTables_info
    const dataTableInfo = document.querySelector(".dataTables_info");
    $(dataTableInfo).css({
      "font-size": "0.75rem",
      "font-weight": "500",
      "text-transform": "none",
      "letter-spacing": "0.05em",
      color: "#6b7280",
    });
    // styles for the dataTables_paginate
    const dataTablePaginate = document.querySelector(".dataTables_paginate");
    $(dataTablePaginate).css({
      "font-size": "0.75rem",
      "font-weight": "500",
      "text-transform": "none",
      "letter-spacing": "0.05em",
      color: "#6b7280",
    });
    // Select the text node inside the label
    let textNode = document.querySelector("#services-table_filter label")
      .childNodes[0];
    // Remove the text "Search"
    textNode.nodeValue = textNode.nodeValue.replace("Search:", "");

    // styles for the action button
    const actionButton = document.querySelectorAll(
      "#services-table #action-button"
    );
    $(actionButton).css({
      cursor: "pointer",
      // margin: "0 0px",

      // "border": "none",
      // "outline": "none",
      // "background-color": "#fff5df",
      // "color": "#f59e0b",
      padding: "0.3rem 2rem",
      // "border-radius": "0.375rem",
      // "font-size": "0.875rem",
      // "font-weight": "500",
      // "line-height": "1.25rem",
      // "letter-spacing": "0.05em",
      // "text-transform": "uppercase",
      // "cursor": "pointer",
      // "transition": "all 0.15s ease",
    });

    // action button functions
    const servicesTable = $("#services-table").DataTable();
    $("#services-table").on("click", "#action-button", function () {
      // Get the row data
      var rowData = servicesTable.row($(this).parents("tr")).data();

      // Log the id
      // console.log("window.location.origin", window.location.origin);
      // console.log("window.location.pathname",window.location.pathname);
      // redirect to orders
      // window.location.href = `${window.location.origin}/orders.html?id=${rowData.id}&type=service`;
      // window.location.href = "or.html";
                      

    });
  },
});
