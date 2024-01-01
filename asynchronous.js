// promise

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Welcome to my comunity";
    const error = false;

    if (!error) {
      resolve(data);
    } else {
      reject("good by bro");
    }

  }, 2000);
});

// fetchData.then((data) => {
//   console.log(data);
// }).catch((error) => {
//     console.log(error);
// });


const getData = async() => {
    try {
        const data = await fetchData;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData()
