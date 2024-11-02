// JavaScript function to calculate total monthly and yearly sales prices
function calculateTotalPrices(executionContext) {
    console.log("calculateTotalPrices function called");

    var formContext = executionContext.getFormContext();

    // Get the values of 'Quantity' and 'Sales Price'
    var quantity = formContext.getAttribute("cr5ad_quantity").getValue();
    var salesPrice = formContext.getAttribute("cr5ad_salesprice").getValue();
    console.log("Retrieved Quantity:", quantity);
    console.log("Retrieved Sales Price:", salesPrice);

    // Initialize total monthly and yearly prices
    var totalMonthly = null;
    var totalYearly = null;

    if (quantity != null && salesPrice != null) {
        // Calculate total monthly and yearly prices
        totalMonthly = quantity * salesPrice;
        totalYearly = totalMonthly * 12;
        console.log("Calculated Total Monthly Sales Price:", totalMonthly);
        console.log("Calculated Total Yearly Sales Price:", totalYearly);
    } else {
        console.log("Calculation skipped due to missing Quantity or Sales Price");
    }

    // Set the 'Sales Price Total Monthly' field
    formContext.getAttribute("cr5ad_salespricetotalmonthly").setValue(totalMonthly);
    formContext.getAttribute("cr5ad_salespricetotalmonthly").setSubmitMode("always"); // Ensure the field is saved
    console.log("Total Monthly Sales Price set:", totalMonthly);

    // Set the 'Sales Price Total Yearly' field
    formContext.getAttribute("cr5ad_salespricetotalyearly").setValue(totalYearly);
    formContext.getAttribute("cr5ad_salespricetotalyearly").setSubmitMode("always"); // Ensure the field is saved
    console.log("Total Yearly Sales Price set:", totalYearly);
}
