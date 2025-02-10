document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("dateDisplay");
    if (dateElement) {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        dateElement.textContent = `A letter from ${currentDate.toLocaleDateString('en-US', options)}`;
    }

    const boldBtn = document.getElementById("bold");
    const italicBtn = document.getElementById("italic");
    const underlineBtn = document.getElementById("underline");
    const editor = document.getElementById("editor1");

    if (boldBtn && italicBtn && underlineBtn && editor) {
        boldBtn.addEventListener("click", () => toggleFormatting(boldBtn, "fontWeight", "bold"));
        italicBtn.addEventListener("click", () => toggleFormatting(italicBtn, "fontStyle", "italic"));
        underlineBtn.addEventListener("click", () => toggleFormatting(underlineBtn, "textDecoration", "underline"));
    }

    function toggleFormatting(btn, styleProperty, styleValue) {
        const isCurrentlyApplied = editor.style[styleProperty] === styleValue;
        editor.style[styleProperty] = isCurrentlyApplied ? "" : styleValue;
        btn.classList.toggle("active");
    }
    const saveBtn = document.getElementById("save-button");
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            const letterContent = document.getElementById('editor1').value;
            console.log('Letter Content:', letterContent);
            alert('Letter saved! Check console for details.');
        });
    }
    const resetBtn = document.getElementById("reset");
    if (resetBtn && editor) {
        resetBtn.addEventListener("click", function () {
            editor.value = "Dear Future Me,";
        });
    }
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
    const editor = document.getElementById('editor1');
    editor.value = inspirations[Math.floor(Math.random() * inspirations.length)]
}
function showAlert() {
    let letterContent = document.getElementById("editor1").value;
    let deliveryTime = document.getElementById("delivery").value; // Time in milliseconds
    let email = document.getElementById("email").value.trim();

    // Check if email is empty
    if (email === "") {
        alert("Please enter your email before sending the letter!");
        return;
    }

    // Show confirmation alert immediately
    alert(`Your letter will be delivered to: ${email}\nDelivery Time: ${document.getElementById("delivery").selectedOptions[0].text}\n\nLetter Content:\n${letterContent}`);

    // Set a timeout to show another alert after the chosen time
    setTimeout(() => {
        alert(`✅ Your letter has been inserted into the database successfully!\n\n📩 Email: ${email}\n📝 Letter Content:\n${letterContent}`);
    }, parseInt(deliveryTime)); // Wait for the selected delivery time (in ms)
}

