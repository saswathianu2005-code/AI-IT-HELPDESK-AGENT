const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");


function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    userInput.value = "";

    setTimeout(() => {
        const response = getAIResponse(message);
        addBotMessage(response);
    }, 600);
}


function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "message user-message";

    div.innerHTML = `
        <div class="message-content">
            ${message}
        </div>
    `;

    chatBox.appendChild(div);

    scrollChat();
}


function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "message bot";

    div.innerHTML = `
        <div class="avatar">🤖</div>

        <div class="message-content">
            ${message}
        </div>
    `;

    chatBox.appendChild(div);

    scrollChat();
}


function getAIResponse(message) {

    const text = message.toLowerCase();


    if (text.includes("wifi") || text.includes("internet")) {

        return `
        📶 <b>Wi-Fi Troubleshooting</b><br><br>
        1. Check whether Wi-Fi is turned ON.<br>
        2. Disconnect and reconnect to the network.<br>
        3. Restart your laptop.<br>
        4. Restart the Wi-Fi router.<br><br>
        If the problem continues, please create an IT support ticket.
        `;
    }


    if (
        text.includes("password") ||
        text.includes("forgot password")
    ) {

        return `
        🔑 <b>Password Reset</b><br><br>
        You can reset your password using the company password
        recovery portal.<br><br>
        If you are unable to reset it, contact the IT administrator.
        `;
    }


    if (
        text.includes("slow") ||
        text.includes("slow computer")
    ) {

        return `
        💻 <b>Slow Computer</b><br><br>
        Try these steps:<br>
        1. Close unnecessary applications.<br>
        2. Restart the computer.<br>
        3. Check available storage.<br>
        4. Install pending system updates.<br><br>
        If the issue continues, raise a support ticket.
        `;
    }


    if (
        text.includes("email") ||
        text.includes("mail")
    ) {

        return `
        📧 <b>Email Troubleshooting</b><br><br>
        Please check your internet connection first.<br>
        Then restart your email application and try again.<br><br>
        If you still cannot access email, contact IT support.
        `;
    }


    if (
        text.includes("printer") ||
        text.includes("print")
    ) {

        return `
        🖨️ <b>Printer Support</b><br><br>
        Check whether the printer is powered ON and connected
        to the network.<br>
        Also check whether paper and ink are available.
        `;
    }


    return `
        🤖 I understand that you are facing an IT issue.<br><br>
        Please provide more details about the problem,
        such as the device, application, or error message.
        <br><br>
        You can also select one of the quick help options above.
    `;
}


function quickMessage(message) {

    userInput.value = message;

    sendMessage();
}


function handleKeyPress(event) {

    if (event.key === "Enter") {
        sendMessage();
    }
}


function scrollChat() {

    chatBox.scrollTop = chatBox.scrollHeight;
}