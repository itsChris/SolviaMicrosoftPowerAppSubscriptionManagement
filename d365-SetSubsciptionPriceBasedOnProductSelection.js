// JavaScript function to set Sales Price based on selected Product's Sales Price
function setSalesPriceFromProduct(executionContext) {
    console.log("setSalesPriceFromProduct function called");

    var formContext = executionContext.getFormContext();

    // Get the 'Product' lookup field value
    var productLookup = formContext.getAttribute("cr5ad_product").getValue();
    console.log("Product lookup field value:", productLookup);

    if (productLookup != null && productLookup.length > 0) {
        // Get the GUID of the selected Product
        var productId = productLookup[0].id.replace("{", "").replace("}", "");
        console.log("Product ID:", productId);

        // Define the fields to retrieve (cr5ad_salesprice)
        var query = "?$select=cr5ad_salesprice";
        console.log("Query for Web API call:", query);

        // Retrieve the Product record using Web API
        Xrm.WebApi.retrieveRecord("cr5ad_solviaproduct", productId, query).then(
            function success(result) {
                console.log("Product record retrieved successfully:", result);

                var salesPrice = result.cr5ad_salesprice;
                console.log("Retrieved Sales Price:", salesPrice);

                if (salesPrice != null) {
                    // Set the 'Sales Price' field with the retrieved 'Sales Price'
                    formContext.getAttribute("cr5ad_salesprice").setValue(salesPrice);
                    formContext.getAttribute("cr5ad_salesprice").setSubmitMode("always"); // Ensure the field is saved
                    console.log("Sales Price set to Sales Price:", salesPrice);
                } else {
                    // Clear the 'Sales Price' field if 'Sales Price' is null
                    formContext.getAttribute("cr5ad_salesprice").setValue(null);
                    console.log("Sales Price cleared as Sales Price is null");
                }
            },
            function(error) {
                // Handle errors
                console.error("Error retrieving Product record:", error.message);
                // Optionally display an alert to the user
                Xrm.Navigation.openAlertDialog({ text: "An error occurred while retrieving the Product price." });
            }
        );
    } else {
        // Clear the 'Sales Price' field if no Product is selected
        formContext.getAttribute("cr5ad_salesprice").setValue(null);
        console.log("Sales Price cleared as no Product is selected");
    }
}
