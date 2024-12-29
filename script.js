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
    document.getElementById('image-upload').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '80px';  
                img.style.height = '80px'; 
                document.getElementById('editor').appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
    
     document.getElementById('video-upload').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const video = document.createElement('video');
                video.src = e.target.result;
                video.controls = true;
                video.style.maxWidth = '100%';
                video.style.marginTop = '10px';

                const editor = document.getElementById('editor');
                editor.appendChild(video);
                editor.focus(); 
            };
            reader.readAsDataURL(file);
        }
    });

    let mediaRecorder;
    let audioChunks = [];
    const recordButton = document.getElementById('record-button');
    const audioPreview = document.getElementById('audio-preview');

    recordButton.addEventListener('click', async () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            recordButton.textContent = 'Record';
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };


            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioURL = URL.createObjectURL(audioBlob);
            
                const audioElement = document.createElement('audio');
                audioElement.src = audioURL;
                audioElement.controls = true;
                document.getElementById('editor').appendChild(audioElement);
            
                audioPreview.style.display = 'block';
                audioChunks = [];
            };
        mediaRecorder.start();
        recordButton.textContent = 'Stop Recording';
    });

    document.getElementById('save-button').addEventListener('click', () => {
        const letterContent = document.getElementById('editor').innerHTML;
        console.log('Letter Content:', letterContent);
        alert('Letter saved! Check console for details.');
    });
