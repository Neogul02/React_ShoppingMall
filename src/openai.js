import axios from 'axios';

const chat = async (prompt, onMessage) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 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',
  };
  const messages = [{ role: 'user', content: prompt }];

  console.log('=>', prompt);
  axios
    .post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        temperature: 0.5,
        messages: messages,
      },
      { headers, timeout: 30000 }
    )
    .then((response) => {
      console.log(response.data.choices[0].message.content);
      onMessage(response.data.choices[0].message.content);
    })
    .catch((err) => {
      console.log(err);
      onMessage(err.message);
    }); // error처리
};

export { chat };
