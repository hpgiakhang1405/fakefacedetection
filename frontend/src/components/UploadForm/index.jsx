import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

function UploadForm() {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
        setResult('');
    };

    const handleUpload = async () => {
        if (!image) return alert('Vui lòng chọn ảnh!');

        const formData = new FormData();
        formData.append('file', image);

        try {
            const res = await axios.post('http://localhost:8000/predict/', formData);
            setResult(res.data.result);
        } catch (err) {
            console.error('Lỗi khi gọi API:', err);
            setResult('Có lỗi xảy ra. Vui lòng thử lại!');
        }
    };

    return (
        <div className="upload-container">
            <label className="custom-file-upload">
                <input type="file" onChange={handleFileChange} accept="image/*" />
                Chọn ảnh
            </label>

            {preview && <img src={preview} alt="preview" className="image-preview" />}

            <button className="predict-button" onClick={handleUpload}>
                Dự đoán
            </button>

            {result && <p className="result-text">Kết quả: {result}</p>}
        </div>
    );
}

export default UploadForm;
