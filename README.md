#Checkout API Bitcoin Payments in Next JS- Blockonomics
This demo uses the Checkout API provided by Blockonomics to receive Bitcoin payments. It can be easily integrated with your online store. The video tutorial for this demo can be found [here]().


## Installing Guide
<details>
<summary> Installing dependencies </summary>

*`npm install`

*`npm install @prisma/client`

*`sudo npm install -g yarn`
</details>

<details>
<summary> How to use </summary>

*`git clone`

*For more details you can visit the site(https://vercel.com/guides/nextjs-prisma-postgres)
</details>


<details>
<summary> Setting up Environment Configurations </summary>

* In the .env file, add database information to allow NextJS website  to connect to the database.That is the database link for PRISMA.

* npm install prisma --save-dev

* npx prisma init

*This creates the following files inside a new prisma directory:

schema.prisma: Your main Prisma configuration file that will contain your database schema
.env: A dotenv file to define the database connection URL and other sensitive info as environment variables

*Open the .env file and replace the dummy connection URL with the connection URL of your PostgreSQL database.

*For further query you can visit the link(https://vercel.com/guides/nextjs-prisma-postgres)
</details>


<details>
<summary>  Implmentating the Checkout API in your website </summary>
*First you need to create post the data api called as /api/checkout inside the pages/product/[slug].tsx file from your website.

*In the body of the /api/checkout you need to pass the custom product data as well as that parent uid which you will get after creating the product on the Blockonomic>Merchant>product site.

*After that you have to fetch and transport the data to the https://www.blockonomics.co/api/create_temp_product which is defined inside the pages/api/index.tsx file 

*To pass or fetch data from the https://www.blockonomics.co/api/create_temp_product you need to pass the API key in the authorization section.

*This API key you will get from the Blockonomics>merchant>store.

*That API key you will pass in the authorization section of the checkout API as mentioned in the documentation

*The data.UID which you get from the checkout api is passed to the blockonomics payment widget which is defined inside the buyproduct function in the file pages/product/[slug].tsx
</details>

<details>
<summary> The Last Line! </summary>

*`yarn dev`/`yarn build`

<p> Now you are all set to locally run the demo! </p>
<p>You can deploy your website using(ercel.com/guides/nextjs-prisma-postgres#step-12.-deploy-to-vercel)</p>

</details>




