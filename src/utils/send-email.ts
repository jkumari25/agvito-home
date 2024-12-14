export function sendEmail(data : any) {
    // TODO: send email
    // console.log(data);
    const apiEndpoint = "/api/email";
  
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        alert(err);
      });
  }

  export function sendHomeEmail(data: any){
    // console.log(data);
    const apiEndpoint = "/api/brochure";
  
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        alert(err);
      });
  }
  