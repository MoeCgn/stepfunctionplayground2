export const postCreate = (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      routingCode: '40327653113+99000933090010',
    }),
  }
};
