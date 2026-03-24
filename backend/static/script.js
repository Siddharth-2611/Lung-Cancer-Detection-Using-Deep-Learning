let resultData = null;

function previewImage() {
    const file = document.getElementById("image").files[0];
    const preview = document.getElementById("preview");
    const text = document.getElementById("uploadText");

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        text.style.display = "none";
    }

    document.getElementById("downloadBtn").style.display = "none";
}

// 🔥 Check if all inputs filled
function validateForm() {
    const imageFile = document.getElementById("image").files[0];
    const nameVal = document.getElementById("name").value.trim();
    const ageVal = document.getElementById("age").value.trim();
    const genderVal = document.getElementById("gender").value.trim();
    const doctorVal = document.getElementById("doctor").value.trim();
    const hospitalVal = document.getElementById("hospital").value.trim();

    return (
        imageFile &&
        nameVal &&
        ageVal &&
        genderVal &&
        doctorVal &&
        hospitalVal
    );
}

async function predict() {
    if (!validateForm()) {
        alert("Please fill all details and upload CT scan");
        return;
    }

    const form = new FormData();
    form.append("image", image.files[0]);
    form.append("name", document.getElementById("name").value);
    form.append("age", document.getElementById("age").value);
    form.append("gender", document.getElementById("gender").value);
    form.append("doctor", document.getElementById("doctor").value);
    form.append("hospital", document.getElementById("hospital").value);

    const bar = document.getElementById("progress-bar");
    bar.style.width = "0%";

    // 🔥 Start progress AFTER clicking analyze
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        bar.style.width = progress + "%";
        if (progress >= 99.9) clearInterval(interval);
    }, 120);

    const res = await fetch("/predict", {
        method: "POST",
        body: form
    });

    const data = await res.json();
    resultData = data;

    bar.style.width = "100%";

    // 🔥 FINAL RESULT FORMAT (as you want)
    document.getElementById("result").innerHTML = `
        <h2>Result</h2>

        <p><b>Prediction:</b> ${data.prediction}</p>
        <p><b>Confidence:</b> ${data.confidence}%</p>
        <p><b>Severity:</b> ${data.severity}</p>
        <p><b>Region:</b> ${data.region}</p>

        <img src="${data.gradcam}" style="width:300px; border-radius:12px; margin-top:10px;">
    `;

    document.getElementById("downloadBtn").style.display = "inline-block";
}

async function downloadPDF() {
    if (!resultData) return;

    const res = await fetch("/generate-report", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(resultData)
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "report.pdf";
    a.click();
}