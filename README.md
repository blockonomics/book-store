# Checkout API Bitcoin Payments in Next JS- Blockonomics
This demo uses the Checkout API provided by Blockonomics to receive Bitcoin payments. It can be easily integrated with your online store. The video tutorial for this demo can be found [here](https://www.youtube.com/).


## Installing Guide
<details>
<summary>Installing dependencies </summary>

  `npm install`
  
  This should install all the dependencies needed.
</details>
  
  <details>
<summary>Setting up Environment Configurations</summary>

Open the `.env` file and replace the dummy connection URL with the connection URL of your PostgreSQL database. For example, if your database is hosted on Supabase, the URL might look as follows:
  
```
  # .env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.ObubJTKrJYcPSkdsWqms.supabase.co:5432/postgres"
 
  ```
Get the API key from the Blockonomic>Merchant site inside the store tab and replace the dummy API key with that api
```
  # .env
BLOCKONOMIC_API_KEY=[API_KEY]
  ```
 Get the product UID  from the Blockonomic>Merchant>Paymentlink/Button site inside that product tab after creating the product you will get the uid and replace the dummy parent uid  with that id
  ```
 # .env
BLOCKONOMIC_PARENT_UID=[PARENT_UID]
  ```
  
</details>

<details>
<summary>Sync your database schema to Prisma</summary>

`npx prisma db push`
  
You should see the following output:

```
  Environment variables loaded from /Users/nikolasburk/Desktop/nextjs-guide/blogr-starter/.env 
Prisma schema loaded from prisma/schema.prisma

🚀  Your database is now in sync with your schema. Done in 2.10s
```
  
</details>


<details>
<summary>Start the server</summary>

  `npm run dev`
  
  This will start the application on your localhost.
</details>