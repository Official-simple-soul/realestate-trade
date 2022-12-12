

export const sendContact = async (data) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res)=> {
    if(!res.ok) throw new Error('Failed to send message');
    return res.json()
  })
