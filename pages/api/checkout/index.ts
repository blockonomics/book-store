
export default async function handle(req, res) {
  const body = JSON.parse(req.body)

  const reqData = await fetch('https://www.blockonomics.co/api/create_temp_product', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + process.env.BLOCKONOMIC_API_KEY
    },
    body: JSON.stringify(body),
  });

  const data = await reqData.json();

  res.json(data);
}