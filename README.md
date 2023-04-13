# Blockonomics Checkout API Bitcoin Payments demo in Next JS
This demo uses the Checkout API provided by Blockonomics to receive Bitcoin payments. It can be easily integrated with your online store. The video tutorial for this demo can be found [here](https://www.youtube.com/watch?v=CstYDj09-ts).


## Installing Guide
<details>
<summary>Installing dependencies </summary>

  ```
    npm install
  ```
  
  This should install all the dependencies needed.
</details>
  
  <details>
<summary>Setting up Environment Configurations</summary>

- Open the `.env` file and replace the dummy connection URL with the connection URL of your PostgreSQL database. Follow the steps in this [guide](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database) to create a local PostgreSQL database.
For example, if your database is hosted on [Supabase](https://supabase.com/), the URL might look as follows:
  
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.ObubJTKrJYcPSkdsWqms.supabase.co:5432/postgres"
```

-  Make sure you have your Blockonomics API Key handy. To get one for free, [create your account](https://www.blockonomics.co/register#) and go to the `STORE` tab on [merchant page](https://www.blockonomics.co/merchants). Now place your api key to the `BLOCKONOMICS_API_KEY` variable in `.env` file.

```
  BLOCKONOMICS_API_KEY=[API_KEY]
```

 - Create your [Blockonomics payment button](https://www.youtube.com/watch?v=1sE2r5tDkNY). Get the button code and assign it to the `BLOCKONOMICS_PARENT_UID` variable in `.env` file as shown below.

```
  BLOCKONOMICS_PARENT_UID=[PARENT_UID]
```

- Remember to save the changes.
  
</details>

<details>
<summary>Sync your database schema to Prisma</summary>

```
npx prisma db push
```
  
You should see the following output:

```
  Environment variables loaded from /Users/nikolasburk/Desktop/nextjs-guide/blogr-starter/.env 
Prisma schema loaded from prisma/schema.prisma

🚀  Your database is now in sync with your schema. Done in 2.10s
```
</details>
<details>
  <summary>Start the server</summary>

  ```
    npm run dev
  ```
  
  This will start the application on your localhost.

  To test the code locally, follow instructions from [this](https://www.youtube.com/watch?v=6Ydk32avIgo) video and make sure to place the `<domain>/api/confirmation` as your order hook url. Here `<domain>` is the domain you get from reverse proxy (Ngro  k/localtunnel).
</details>
