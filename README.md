# Next JS Checkout API Bitcoin Payments - Blockonomics
Contributors: aadyanthaya blockonomics Tags: bitcoin, accept bitcoin, bitcoin checkout api, bitcoin payments Requires at least: 3.0.1 Tested up to: 6.1.1 Stable tag: 3.6 License: MIT License URI: http://opensource.org/licenses/MIT
This example shows how to create a headless ecommerce [Next.js]application using Checkout API(https://www.salesforce.com/products/commerce-cloud/overview/), and [Tailwind](https://tailwindcss.com).

## Description

The fastest and easiest way to start accepting Bitcoin payments on your  online store. Since 2015, Blockonomics has helped thousands of ecommerce sites increase sales by including Bitcoin and Bitcoin Cash as payment options for their customers.

-> A truly decentralized bitcoin payment processor for you ecommerce  website

Blockonomics is the only Bitcoin payment gateway that enables full decentralization in the e-commerce industry. Purchases made to your website are instantly sent to your wallet, rather than to a payment gateway wallet. This not only saves you fees when taking your coins out, but it allows you to take ownership of your revenue without the need for a middle man.

Accept bitcoin payments, fast & easy
Payments are received directly into your wallet
Safe and secure transactions
Implemenation is faster and easier with single button for multiple child product
Eliminate the need of multiple payment links


## Implmentating and deploying the Next.js website template 

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or view the demo [here](https://salesforce-cloud-commerce.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-sfcc&project-name=with-sfcc&repository-name=with-sfcc&env=SFDC_CLIENT_ID,SFDC_SECRET,SFDC_ORGANIZATIONID,SFDC_SHORTCODE,SFDC_SITEID&envDescription=API%20Keys%20from%20SFCC%20needed%20to%20run%20this%20application.)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example::

```bash
 npx create-next-app --example with-sfcc nextjs-sfcc-app
```

```bash
yarn create next-app --example with-sfcc nextjs-sfcc-app
```

```bash
pnpm create next-app --example with-sfcc nextjs-sfcc-app
```

## References

- SDK: https://github.com/SalesforceCommerceCloud/commerce-sdk

## Implmentating the Checkout API in your website 

First you need to create post the data api called as /api/checkout inside the pages/product/[slug].tsx file from your website 
In the body of the /api/checkout you need to pass the custom product data as well as that parent uid which you will get after creating the product on the Blockonomic>Merchant>product site.
After that you have to fetch and transport the data to the https://www.blockonomics.co/api/create_temp_product which is defined inside the pages/api/index.tsx file 
To pass or fetch data from the https://www.blockonomics.co/api/create_temp_product you need to pass the API key in the authorization section.
This API key you will get from the Blockonomics>merchant>store.
That API key you will pass in the authorization section of the checkout API as mentioned in the documentation
The data.UID which you get from the checkout api is passed to the blockonomics payment widget which is defined inside the buyproduct function in the file pages/product/[slug].tsx






