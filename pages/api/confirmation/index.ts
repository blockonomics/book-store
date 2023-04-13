// pages/api/post/index.ts


import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: email
// Required fields in body: message
// Required fields in body: amount
// Required fields in body: name
export default async function handle(req, res) {
  const { uuid, status } = req.query;

  const d = await fetch(`https://www.blockonomics.co/api/merchant_order/${uuid}`, {
    headers: {
      'Authorization': 'Bearer ' + process.env.BLOCKONOMICS_API_KEY
    }
  });
 

  const j = await d.json();
  const email = j.data.emailid;
  const name = j.data.name;
  const amount = j.value;
  const state = "confirmed";


    //   // The following query uses upsert to update a User record with a specific email address,
    //   // or create that User record if it does not exist
    await prisma.user.upsert({
      where: {
        email: email
      },
      create: {
        email: email,
        name: name
      },
      update: {
        name: name
      }
    });

    // // We then create/update a new oreder  information
    const result = await prisma.order.create({
    data:{
      orderTotal: amount,
      user: { connect: { email: email } },
      status: state,
      uuid: uuid }
    });
    
    res.json(result);

}