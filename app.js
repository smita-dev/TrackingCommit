let clientId= "033e09c0c3a6711439b5";
let clientSecret="bbfbb86813046dee2f96a4ae87f1073b32ce0901"; 
let userName;
let repoUrl;
function init(){

console.log("SDdf")

const getUser=async(user)=>{
    const apiCall= await fetch(`https://api.github.com/users/${userName}?client_id=${clientId}&
    client_secret=${clientSecret}`)
    let userData=await apiCall.json();
    return{data:userData}
}
$("#search").click(function(){
    console.log("dshjdkh")
    showData();
})

 function showData(){
    userName=document.getElementById("username").value;
    console.log(userName)
     getUser(userName).then((res)=>{
         console.log(res);
         document.getElementById("name").innerHTML="Name : "+res.data.name;
         document.getElementById("repo-no").innerHTML="No. of repository : "+res.data.public_repos;
         document.getElementById("location").innerHTML="URL : "+res.data.location;
         repoUrl=res.data.repos_url;
         showRepo(repoUrl);
     })
 }
 
 const getRepo=async(data)=>{
    const apiCall= await fetch(repoUrl)
    data=await apiCall.json();
    return{data}
}
 
function showRepo(repo){
    getRepo(repo).then((res)=>{
        console.log(res);
        document.getElementById("repo").innerHTML="Repositores :"
        res.data.forEach(element => {
            $('#reponame').append('<li>'+element.name +'</li>');
        });
    })
}
}

window.onload=init;