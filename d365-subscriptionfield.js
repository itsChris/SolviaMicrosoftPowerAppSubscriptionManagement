function setSubscription(executionContext) {
    try {
        console.log("Function setSubscription started.");

        var formContext = executionContext.getFormContext();
        console.log("Form context obtained.");

        // Get the Product and Contact fields
        var productField = formContext.getAttribute("cr5ad_product");
        var contactField = formContext.getAttribute("cr5ad_contact");
        var assetField = formContext.getAttribute("cr5ad_asset");
        console.log("Product, Contact and Asset fields retrieved.", productField, contactField, assetField);

        // Initialize variables
        var productName = "";
        var contactName = "";
        var assetName = "";
        console.log("Variables initialized: productName='', contactName='', assetName=''");

        // Get Asset name
        if (assetField) {
            var assetValue = assetField.getValue();
            if (assetValue && assetValue.length > 0) {
                assetName = assetValue[0].name;
                console.log("Asset name obtained: " + assetName);
            } else {
                console.warn("Asset field value is empty.");
            }
        } else {
            console.error("Asset field attribute 'cr5ad_asset' not found.");
        }

        // Get Product name
        if (productField) {
            var productValue = productField.getValue();
            if (productValue && productValue.length > 0) {
                productName = productValue[0].name;
                console.log("Product name obtained: " + productName);
            } else {
                console.warn("Product field value is empty.");
            }
        } else {
            console.error("Product field attribute 'cr5ad_product' not found.");
        }

        // Get Contact name
        if (contactField) {
            var contactValue = contactField.getValue();
            if (contactValue && contactValue.length > 0) {
                contactName = contactValue[0].name;
                console.log("Contact name obtained: " + contactName);
            } else {
                console.warn("Contact field value is empty.");
            }
        } else {
            console.error("Contact field attribute 'contact_field_logical_name' not found.");
        }

        // Concatenate names
        var subscriptionValue = productName + " " + contactName + " " + assetName;
        console.log("Subscription value created: '" + subscriptionValue + "'");

        // Set the Subscription field value
        var subscriptionField = formContext.getAttribute("cr5ad_subscription");
        if (subscriptionField) {
            subscriptionField.setValue(subscriptionValue);
            console.log("Subscription field value set successfully.");
        } else {
            console.error("Subscription field attribute 'cr5ad_subscription' not found.");
        }

        console.log("Function setSubscription completed successfully.");
    } catch (error) {
        console.error("An error occurred in setSubscription:", error);
    }
}
