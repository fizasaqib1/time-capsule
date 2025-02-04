document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dateDisplay");

    const currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    dateElement.textContent = `A letter from ${formattedDate}`;
});

    const boldBtn = document.getElementById("bold");
    const italicBtn = document.getElementById("italic");
    const underlineBtn = document.getElementById("underline");
    const editor = document.getElementById("editor1");

    boldBtn.addEventListener("click", () => toggleFormatting(boldBtn, "fontWeight", "bold"));
    italicBtn.addEventListener("click", () => toggleFormatting(italicBtn, "fontStyle", "italic"));
    underlineBtn.addEventListener("click", () => toggleFormatting(underlineBtn, "textDecoration", "underline"));


function toggleFormatting(btn, styleProperty, styleValue) {
    const isCurrentlyApplied = editor.style[styleProperty] === styleValue;

    if (isCurrentlyApplied) {
        editor.style[styleProperty] = "";
    } else {
        editor.style[styleProperty] = styleValue;    }


    btn.classList.toggle("active"); 
}

    function formatText(command) {
        document.execCommand(command, false, null);
    }
    
    document.getElementById('save-button').addEventListener('click', () => {
        const letterContent = document.getElementById('editor').innerHTML;
        console.log('Letter Content:', letterContent);
        alert('Letter saved! Check console for details.');
    });
    function inspireMe() {
        const inspirations = [
            "Believe in yourself and all that you are. The best is yet to come!",
            "Write down the dreams you want to achieve and start planning for them.",
            "What advice would you give to your future self?",
            "Remember, the little steps you take today shape your future.",
            "Write about the happiest moment you've experienced so far.",
            "How do you envision your life in 5 years? Dream big!",
            "What would you say to inspire yourself on a tough day?",
            "Celebrate your progress and keep striving for greatness."
        ];
    
       
       const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
    const editor = document.getElementById('editor1');
        editor.value = randomInspiration;
    }
    document.addEventListener("DOMContentLoaded", () => {
        const sendButton = document.getElementById("sendLetter");
  
        sendButton.addEventListener("click", () => {
          const letterContent = document.getElementById("editor1").value;
          const deliveryTime = parseInt(document.getElementById("delivery").value); // Time in milliseconds
          const email = document.getElementById("email").value;
  
          // Validate inputs
          if (!letterContent.trim()) {
            alert("Please write your letter.");
            return;
          }
  
          if (!email.trim()) {
            alert("Please provide your email.");
            return;
          }
  
          alert(`Your letter has been scheduled for delivery in ${(deliveryTime / 60000).toFixed(1)} minutes.`);
          setTimeout(() => {
            alert(`Here is your letter:\n\n"${letterContent}"\n\nSent to: ${email}`);
          }, deliveryTime);
        });
      });