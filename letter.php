<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>main</title>
    <link rel="stylesheet" href="style.css">
    

</head>
<body>
<div class="real">

    <div class="navbar">
        <div class="logo">
            <h2>vaultify</h2>
        </div>
        <div class="imgs">
            <a href="profile.php"><img src="svgs/account-circle-line.svg" alt=""></a>
            <img src="svgs/pencil-fill.svg" alt="Reset Letter" id="reset">
        </div>
    </div>

    <div class="letter">
        <h4 id="dateDisplay">A letter from</h4>
    </div>
    

    <form action="send_letter.php" method="POST" onsubmit="return showAlert()">
    <div class="real-container">
        <div class="realimgs">
            <button id="bold">
                <img src="svgs/bold.svg" alt="Bold">
            </button>
            <button id="italic">
                <img src="svgs/italic.svg" alt="Italic">
            </button>
            <button id="underline">
                <img src="svgs/underline.svg" alt="Underline">
            </button>
        </div>

        <div id="lettercontent">
            <textarea name="letter" id="editor1" placeholder="Write your letter here...">Dear Future Me,</textarea>
        </div>
        <select id="delivery">
            <option value="60000"> 1 minute </option>
            <option value="3600000"> 1 hour</option>
            <option value="86400000"> 1 day</option>
          </select>
          <input type="email" id="email" placeholder="Enter your email" required>
      <div class="actions">
            <button class="inspire" onclick="inspireMe()">Inspire me!</button>
            <button class="submit" id="sendLetter" onclick="showAlert()">Send to the Future</button>
        </div>
    </div>
    </form>
</div>

<script src="script.js"></script>
</body>
</html>
