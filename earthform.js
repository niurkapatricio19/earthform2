 var form = document.getElementById("myform");
    
    async function handleSubmit(event) {
      event.preventDefault();

     

      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      })
      function success () {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        status.classList.add("success");
      })
      function error() {
        
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit);

    function ajax(method, url, data, succ);{
      var xhr= new XMLHttpRequest();
      xhr.open(method, url);
      xhr. setRequestHeader("accept", "application/json");
      xhr.onreadystatechange=function(){
        if (xhr.readystate !==XMLHttpRequest.DONE)return;
        if (xhr.status===200){
          success(xhr.response, xhr.responsetype);
        }else{
          error(xhr.status, xhr.response, xhr.responsetype);

        }
      };
      xhr.send(data);
    }

