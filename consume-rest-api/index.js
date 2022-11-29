require("dotenv").config();

const axios = require("axios").default;

let p365Url = "https://api.powersoft365.com";

axios
    .get(p365Url + "/test_connection")
    .then((response) => {
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
    })
    .catch((error) => {
        console.error(error);
    });

axios
    .post(p365Url + "/test_login", {
        token: process.env.POWERSOFT365_TOKEN,
    })
    .then((response) => {
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
    })
    .catch((error) => {
        console.error(error);
    });

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "http://localhost/wordpress",
    consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
    consumerSecret: process.env.WOOCOMMERCE_CONSUMER_VALUE,
    version: "wc/v3",
});

api.get("products", {
    per_page: 20,
})
    .then((response) => {
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
    })
    .catch((error) => {
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
    });
