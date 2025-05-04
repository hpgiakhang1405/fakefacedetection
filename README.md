# 🧠 Fake Face Detection Web App

Ứng dụng web giúp phân biệt khuôn mặt **thật** và **giả** bằng mô hình Deep Learning.  
Giao diện React cho phép người dùng upload ảnh, backend FastAPI xử lý và trả kết quả dự đoán từ mô hình `.h5`.

---

## 🚀 Cách chạy project

### ✅ 1. Backend (FastAPI)

**Yêu cầu:** Python 3.8+, đã cài pip

```bash
cd backend

# Tạo môi trường ảo
python -m venv venv
venv\Scripts\activate         # (Windows)
# source venv/bin/activate    # (Linux/macOS)

# Cài thư viện
pip install -r requirements.txt

# Chạy server FastAPI
uvicorn app.main:app --reload
```

> Server backend sẽ chạy ở: http://localhost:8000

---

### ✅ 2. Frontend (React + Vite)

**Yêu cầu:** Node.js 18+

```bash
cd frontend

# Cài thư viện
npm install

# Chạy dev server
npm run dev
```

> Frontend chạy tại: http://localhost:5173

---

## 📷 Cách sử dụng

1. Truy cập `http://localhost:5173`
2. Nhấn **"Chọn ảnh"** để upload ảnh khuôn mặt
3. Nhấn **"Dự đoán"**
4. Kết quả sẽ hiển thị như sau:
    ```
    Kết quả: 86.27% Fake.
    ```

---

## 📦 Thư viện sử dụng

### Backend:

-   `FastAPI`
-   `Uvicorn`
-   `TensorFlow`
-   `python-multipart`

### Frontend:

-   `React`
-   `Vite`
-   `Axios`
