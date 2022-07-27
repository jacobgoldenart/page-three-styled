import { useState } from "react";

export default function useFetch(endPoint) {

  const baseUrl = 'https://irt-test01.webhost-tst.csus.edu/api/cs/'

  const [loading, setLoading] = useState(true);

  function get(endPoint) {
    //console.log(url)
    return new Promise((resolve, reject) => {
      fetch(baseUrl + endPoint)
      // .then(res => res.text())          // convert to plain text to test api
       //.then(text => console.log(text))
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          //console.log(data)
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get,loading };
};
