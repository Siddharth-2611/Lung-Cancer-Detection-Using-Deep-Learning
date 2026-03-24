# 🫁 Lung Cancer Detection using Deep Learning (Xception + Grad-CAM)

An AI-powered web application that detects lung cancer from CT scan images and generates a smart medical report with explainable AI (Grad-CAM).

---
**Upload CT scan → AI prediction → Tumor highlight → Smart medical report (PDF)**

![Python](https://img.shields.io/badge/Python-3.10-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.1.3-000000?style=for-the-badge&logo=flask&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-2.21-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-4.x-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![HTML](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-blue?style=for-the-badge)

</div>

## 🚀 Overview

This project combines **deep learning, computer vision, and web development** to build a real-world healthcare application.

The system:
- Classifies CT scan images into cancer types
- Highlights affected regions using Grad-CAM
- Generates a structured medical report (PDF)
- Provides a modern, user-friendly interface

---

## 🎯 Features

- 📤 Upload CT scan image
- 🧠 AI-based prediction (4 classes)
- 🔥 Grad-CAM tumor localization
- 📊 Confidence + severity + region detection
- 👨‍⚕️ Patient information input
- 📄 Downloadable PDF report

---

## 🛠️ Tech Stack

| Phase | Technology |
|---|---|
| Training | Python 3.10, TensorFlow 2.21, Keras 3.13, NumPy 2.4, Matplotlib, Seaborn, Scikit-learn |
| Model Architecture | Xception (Transfer Learning, ImageNet pretrained) |
| Data Processing | ImageDataGenerator (augmentation), Class Weights, Preprocessing (299×299) |
| Backend | Flask 3.1.3, Flask-CORS 6.0.2 |
| Computer Vision | OpenCV (cv2), Pillow (PIL) |
| Explainable AI | Grad-CAM (TensorFlow GradientTape) |
| PDF Generation | ReportLab 4.x |
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| UI/UX Features | Progress Bar, Image Preview, Responsive Layout |
| Development Tools | VS Code, Google Colab (T4 GPU), Git, GitHub |
| Environment | Windows 10/11, Python venv |

## 🧠 Model Architecture

- Model: **Xception (Transfer Learning)**
- Input Size: **299 × 299**
- Output Classes:
  - Adenocarcinoma
  - Large Cell Carcinoma
  - Squamous Cell Carcinoma
  - Normal

---

## 🏋️ Training Strategy

The model was trained in **3 phases**:

### 🔹 Phase 1: Feature Extraction
- Base model frozen
- Only top layers trained
- Learning Rate: `1e-3`

### 🔹 Phase 2: Fine-Tuning (Partial)
- Last 40 layers unfrozen
- Learning Rate: `1e-4`

### 🔹 Phase 3: Full Fine-Tuning
- Entire model unfrozen
- Learning Rate: `1e-6`

### 🔹 Techniques Used
- Data Augmentation
- Class Balancing
- Dropout + Batch Normalization
- Early Stopping
- ReduceLROnPlateau

---

## 📊 Training Results

### 🔹 Accuracy & Loss Curves
<img width="1389" height="490" alt="download (1)" src="https://github.com/user-attachments/assets/6926c4b5-d75f-4a45-bbae-6aa3cf960721" />

### 🔹 Confusion Matrix
<img width="500" height="450" alt="download" src="https://github.com/user-attachments/assets/d3981fc0-a734-4686-9afb-25b19db44b35" />

---

## 🧠 Explainable AI (Grad-CAM)
Gradient-weighted Class Activation Mapping (Grad-CAM) is an explainable AI (XAI) technique used to generate heatmaps highlighting important regions in an image that drive a CNN-based model's prediction.
Original CT Scan → Heatmap → Overlay

---

## 🖥️ Web Application UI

### 🔹 Main Interface
<img width="1623" height="821" alt="Screenshot 2026-03-24 002908" src="https://github.com/user-attachments/assets/39e217c2-da80-4b08-8f99-a4673accc4d8" />

---

### 🔹 After Filling Details
<img width="1406" height="776" alt="Screenshot 2026-03-24 003040" src="https://github.com/user-attachments/assets/94c8534b-87d8-47c1-904b-756c06a28469" />

---

### 🔹 Result Display
<img width="1337" height="831" alt="Screenshot 2026-03-24 003055" src="https://github.com/user-attachments/assets/7c0a6843-f180-46c0-ba0d-806569c568fb" />

---
### 🔹 Report PDF
<img width="985" height="624" alt="Screenshot 2026-03-24 104528" src="https://github.com/user-attachments/assets/9058a4fb-52ac-404a-a38f-61394e16d087" />

---

## 📂 Project Structure
```

lung-cancer-detection/
│
├── backend/
│   ├── app.py                # Flask/FastAPI server for inference
│   ├── model/
│   │   ├── lung_cancer_model.h5  # Pre-trained Xception/ResNet50 model
│   │   └── class_indices.json    # Mapping of indices to class labels
│   │
│   ├── static/               # Frontend assets
│   │   ├── style.css
│   │   ├── script.js
│   │   └── gradcam.png       # Generated heatmap for model explainability
│   │
│   ├── templates/
│   │   └── index.html        # Main UI for file upload and results
│   │
│   ├── uploads/              # Temporary storage for user-uploaded images
│   ├── report.pdf            # Generated diagnosis report (optional)
│   └── requirements.txt      # Python dependencies
│
└── training/
    └── lung_cancer.ipynb     # Research, Data Augmentation, and Training notebook
```
---

### ⚠️ Disclaimer
This project is for educational purposes only
Not a substitute for professional medical diagnosis
