import axios from "axios";

const postData = {
  identifier: "jesper@mail.dk",
  password: "123456",
};

axios
  .post("https://dinmaegler.onrender.com/auth/local", postData, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
