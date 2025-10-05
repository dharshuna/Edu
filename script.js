// Theme Toggle
let darkMode=false;
function toggleTheme(){
  darkMode=!darkMode;
  document.body.style.background=darkMode?'linear-gradient(135deg,#222,#444)':'linear-gradient(135deg,#FFDEE9,#B5FFFC)';
}

// Page Navigation
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Auth toggle (Login <-> Signup)
function toggleAuth(){
  const title=document.getElementById('authTitle');
  const btn=document.querySelector('.auth-card button');
  const toggle=document.querySelector('.toggle-auth');
  if(title.innerText==='Login'){
    title.innerText='Sign Up';
    btn.innerText='Sign Up';
    toggle.innerText='Already have an account? Login';
  }else{
    title.innerText='Login';
    btn.innerText='Login';
    toggle.innerText="Don't have an account? Sign Up";
  }
}

// Dummy auth functions
function login(){showPage('homePage');}
function signup(){showPage('homePage');}

// Dummy AI chat
function sendMessage(){
  const chatLog=document.getElementById('chatLog');
  const chatInput=document.getElementById('chatInput');
  if(chatInput.value.trim()==='') return;
  const msg=document.createElement('p');
  msg.innerHTML='💬 '+chatInput.value;
  chatLog.appendChild(msg);
  const reply=document.createElement('p');
  reply.innerHTML='🤖 This is a dummy AI response for: "'+chatInput.value+'"';
  chatLog.appendChild(reply);
  chatInput.value='';
  chatLog.scrollTop=chatLog.scrollHeight;
}
