
const fs = require("fs");

console.log("Running Code Rwanda tests...");

// Check that the main website files exist
const files = ["index.html", "login.html", "register.html"];

files.forEach((file) => {
    if (!fs.existsSync(file)) {
        throw new Error(`${file} is missing!`);
    }

    console.log(`${file} exists - PASS`);
});

console.log("All tests passed successfully!");
