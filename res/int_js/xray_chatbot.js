// Create a link element for Bootstrap CSS
var bootstrapCSS = document.createElement('link');
bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(bootstrapCSS);

var fontawesomeScript = document.createElement('script');
fontawesomeScript.src = 'https://kit.fontawesome.com/89baad1ea2.js';
fontawesomeScript.crossorigin = 'anonymous';
document.head.appendChild(fontawesomeScript);

// Create a style element
var style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

.main {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.5s ease;
    display: none;
}

.main.open {
    width: 680px;
    height: 500px;
    margin: 0;
    border-radius: 10px;
    right: 5%;
    bottom: 10%;
    display: block;
    overflow-x: hidden;
    margin: auto;
    z-index: 9999
}

.column {
  flex: 1;
}

#status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
}

.chat-icon {
    position: fixed;
    right: 2%;
    bottom: 4%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    border: 2px solid #f6f6f6;
}

#assistance {
  display: block;
  font-style: italic;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  width: 15%;
  position: fixed;
  right: 3%;
  bottom: 19%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

#assistance:after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: 10px;
  border-width: 10px;
  border-style: solid;
  border-color: white transparent transparent white;
}

.chat-toggle {
    background: transparent; 
    border: none; 
    outline: none;
    cursor: pointer;
    margin-left: 20px;
}

.name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    padding: 8px 16px;
    color: #7e7e7e;
    background-color: #ebebeb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.name > span {
  color: #bbb;
}

.name-input {
  font-size: 20px;
  font-weight: 700;
  color: #7e7e7e;
  flex-grow: 1;
  border: none;
  margin: 0px 12px;
  outline: none;
  background-color: #ebebeb;
  width: auto;
}

.message-container {
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  width: 100%;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 0px;
}

.message-left,
.message-right {
  list-style: none;
  padding: 8px 12px;
  margin: 12px;
  max-width: 250px;
  font-size: 18px;
  word-wrap: break-word;
}

.message-feedback{
    list-style: none;
    display: block;
}

.message-left {
  border-radius: 20px 20px 20px 0px;
  align-self: flex-start;
  background-color: #fff;
  box-shadow: -2px 2px 4px #dcdcdc;
}

.message-right {
  border-radius: 20px 20px 0px 20px;
  align-self: flex-end;
  background-color: #2d2d2d;
  box-shadow: 2px 2px 4px #dcdcdc;
  color: #f6f6f6;
}

.message-left > p,
.message-right > p {
  display: block;
  font-style: italic;
  font-size: 14px;
}

.feedback {
  font-style: italic;
  font-size: 12px;
  // padding: 0px 16px 16px 16px;
  color: #2d2d2d;
  text-align: center;
}

.message-form {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  border: 2px solid #f6f6f6;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.message-input {
  flex-grow: 1;
  height: 100%;
  font-size: 15px;
  border: none;
  outline: none;
  background-color: #fff;
  border-bottom-left-radius: 10px;
}

.send-button {
  height: 100%;
  font-size: 16px;
  border: none;
  padding: 0px 20px;
  outline: none;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}

.v-divider {
  height: auto;
  width: 2px;
  background-color: #f6f6f6;
}

.external-container {
  width: 100%;
  margin: auto;
}

.column {
  width: 50%;
  float: left;
  background-color: #ffffff;
}

.upload-container-div {
  float: right;
  width: 80%;
  height: 360px;
  border: 2px dashed #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px 10%;
  position: relative;
}
`;
document.head.appendChild(style);

// Create a string of HTML
var html = `
    <img src="https://pulmodetecttb.s3.amazonaws.com/chatbot_logo.png" class="chat-icon" />
    <div class="main">
      <div class="name">
          <div id="status-indicator"></div>
          <span id="name-input" class="name-input">PulmoDetectTB</span>
          <button class="chat-toggle"><i class="fa-sharp fa-regular fa-circle-xmark" style="color: #000000;"></i></button>
      </div>
      <div class="external-container">
        <div class="column">
            <ul class="message-container" id="message-container">
                <!--<p class="feedback" id="feedback">chatbot is generating a response..</p>-->
            </ul>
        </div>
        <div class="column">
            <div class="upload-container-div" id="upload-container-div">
                <div id="overlay" class="overlay">
                    <span>Select XRAY to Upload</span>
                    <button type="button" onclick="document.getElementById('file-input').click()">Upload Image</button>
                </div>
                <img id="preview" src="" alt="Image preview" class="hidden">
            </div>
        </div>
        <input type="file" id="file-input" name="image" style="display: none;" accept="image/*" onchange="previewFile()">
      </div>
      <form class="message-form" id="message-form">
        <input
          type="text"
          name="message"
          id="message-input"
          class="message-input"
          placeholder="Type your message here..."
        />
        <div class="v-divider"></div>
        <button type="submit" class="send-button">
          send <span><i class="fas fa-paper-plane"></i></span>
        </button>
      </form>
    </div>
    <div id="assistance" style="display: block;">
        <p>Click here for Immediate assistance</p>
    </div>
`;
document.body.innerHTML += html;

var script = document.createElement('script');
script.innerHTML = `
function previewFile() {
  var preview = document.getElementById('preview');
  var file    = document.getElementById('file-input').files[0];
  var reader  = new FileReader();
  var overlay = document.getElementById('overlay');

  reader.onloadend = function () {
    preview.src = reader.result;
    preview.classList.remove('hidden');
    overlay.classList.add('hidden');
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.classList.add('hidden');
    overlay.classList.remove('hidden');
  }
}
console.log("Chatbot script loaded successfully.")
document.querySelector('.chat-icon').addEventListener('click', function() {
    var main = document.querySelector('.main');
    var assistance = document.getElementById('assistance');
    main.classList.toggle('open');
    if (main.classList.contains('open')) {
      assistance.style.display = 'none';
    } else {
        assistance.style.display = 'block';
    }
});

const timeElements = document.querySelectorAll('.time');

// Function to update the time
function updateTime() {
    const currentDate = new Date();
    const timeString = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = currentDate.toLocaleDateString([], { month: 'long', day: 'numeric' });
    const formattedTime = \`\${timeString} | \${dateString}\`;

    // Update each time element
    timeElements.forEach(element => {
        element.textContent = formattedTime;
    });
}

// Update the time initially
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// Checking if the site is authenticated
function init(user_id, client_token) {
  var allowedDomains = ["127.0.0.1", "www.rainierpeak.co"];
  var currentDomain = window.location.hostname;

  if (allowedDomains.indexOf(currentDomain) !== -1) {
      console.log("Authorized domain. Chatbot initialization started.")
      initializeChatbot(user_id, client_token);
  } else {
      console.error("Unauthorized domain. Chatbot initialization aborted.");
  }
};

// Initializing the chatbot and using it
function initializeChatbot(user_id, client_token){
    console.log("Initializing chatbot...")
    const developmenturl = \`ws://127.0.0.1:8000/ws/chatbot/\${user_id}/\${client_token}/\`;
    const productionurl = \`wss://chatbot.rainierpeak.co/ws/chatbot/\${user_id}/\${client_token}/\`;
    const toggleButton = document.querySelector('.chat-toggle');
    const mainElement = document.querySelector('.main');
    const messageContainer = document.getElementById('message-container') //ul element
    const feedbackElement = document.querySelector('.feedback');
    const messageForm = document.getElementById('message-form') //form element
    const status = document.getElementById('status-indicator');
    const messageInput = document.getElementById('message-input') //form input element
    
    if (window.location.hostname === "127.0.0.1"){
      var url = developmenturl;
    }
    else{
      var url = productionurl;
    }
    
    const socket = new WebSocket(url);

    // call the sendmessage function when the form is submitted and prevent refresh behavior of submit button 
    messageForm.addEventListener('submit', e => {
      e.preventDefault()
      sendMessage()
    })

    function escapeInput(text) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(text));
      return div.innerHTML;
    }

    // send the messages typed by the user to the chatbot
    function sendMessage() {
      const message = messageInput.value
      const sanitizedmessage = escapeInput(message);
      if (sanitizedmessage === '') return
      socket.send(sanitizedmessage)
      messageInput.value = ''
      addMessageToUI(true, { message: sanitizedmessage })
    }

    // if isOwnMessage is true, then the message is sent by the user hence class is message-right
    // if isOwnMessage is false, then the message is sent by the chatbot hence class is message-left
    function addMessageToUI(isOwnMessage, data){
      var fullelement = \`\`

      const element = \`
        <li class="message-\${isOwnMessage ? 'right' : 'left'}">
          <p class="message">
            \${data.message}
            <span class="time"></span>
          </p>
        </li>
      \`
      const feedback = \`
        \${status.style.backgroundColor === 'green' ? '<p class="feedback">chatbot is responding....</p>' : '<p class="feedback">chatbot did not respond....</p>'}
      \`

      if (isOwnMessage){
        fullelement = element + feedback
      }
      else{
        fullelement = element
      }
      messageContainer.innerHTML += fullelement
      scrollToBottom()
    }

    function scrollToBottom(){
      messageContainer.scrollTo(0, messageContainer.scrollHeight)
    }

    //Show the response from the chatbot to console log
    socket.onmessage = function(e) {
      addMessageToUI(false, {message : e.data } )
    } 
    
    // When the connnection is established
    socket.onopen = function() {
        document.getElementById('status-indicator').style.backgroundColor = 'green';
    }; 

    toggleButton.addEventListener('click', function() {
      // Close the main element
      var main = document.querySelector('.main');
      var assistance = document.getElementById('assistance');
      mainElement.classList.toggle('open');
      
      if (main.classList.contains('open')) {
        assistance.style.display = 'none';
      } else {
          assistance.style.display = 'block';
      }

      // Close the WebSocket connection
      if (socket && socket.readyState === WebSocket.OPEN) {
          socket.close();
          document.getElementById('status-indicator').style.backgroundColor = 'red';
      }

    });

    // When the connection is closed
    socket.onclose = function() {
        if (socket.error != null){
          const errorelement = \`
          <p class="feedback">chatbot failed to respond....</p>
        \`
        messageContainer.innerHTML += errorelement;
        }
    };
}
`;
document.body.appendChild(script);