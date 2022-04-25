const lencal=()=>{
    const ipp = document.getElementById('ip');
    console.log(ipp.innerText)
    const txt = document.getElementById('len');
    txt.innerText= ipp.value.length;
}