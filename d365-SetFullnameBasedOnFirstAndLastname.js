function setFullname(executionContext) {
    try {
        console.log("Function setFullname started.");

        var formContext = executionContext.getFormContext();
        console.log("Form context obtained.");

        // Get the Firstname and Lastname fields
        var firstnameField = formContext.getAttribute("cr5ad_firstname");
        var lastnameField = formContext.getAttribute("cr5ad_lastname");
        console.log("Firstname and Lastname fields retrieved:", firstnameField, lastnameField);

        // Initialize variables
        var firstName = "";
        var lastName = "";
        console.log("Variables initialized: firstName='', lastName=''");

        // Get First name
        if (firstnameField) {
            var firstnameValue = firstnameField.getValue();
            console.log("Retrieved Firstname field value:", firstnameValue);
            if (firstnameValue) {
                firstName = firstnameValue;
                console.log("First name obtained: " + firstName);
            } else {
                console.warn("Firstname field value is empty.");
            }
        } else {
            console.error("Firstname field attribute 'cr5ad_firstname' not found.");
        }

        // Get Last name
        if (lastnameField) {
            var lastnameValue = lastnameField.getValue();
            console.log("Retrieved Lastname field value:", lastnameValue);
            if (lastnameValue) {
                lastName = lastnameValue;
                console.log("Last name obtained: " + lastName);
            } else {
                console.warn("Lastname field value is empty.");
            }
        } else {
            console.error("Lastname field attribute 'cr5ad_lastname' not found.");
        }

        // Concatenate names
        var fullnameValue = (firstName + " " + lastName).trim();
        console.log("Fullname value created: '" + fullnameValue + "'");

        // Set the Fullname field value
        var fullnameField = formContext.getAttribute("cr5ad_fullname");
        if (fullnameField) {
            fullnameField.setValue(fullnameValue);
            console.log("Fullname field value set successfully to:", fullnameValue);
        } else {
            console.error("Fullname field attribute 'cr5ad_fullname' not found.");
        }

        console.log("Function setFullname completed successfully.");
    } catch (error) {
        console.error("An error occurred in setFullname:", error);
    }
}
