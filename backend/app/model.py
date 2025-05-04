import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array

model = load_model("app/model.h5")

def predict_image(img_path):
    img = load_img(img_path, target_size=(224, 224))
    img_arr = img_to_array(img)
    img_arr = np.expand_dims(img_arr, axis=0) / 255.0

    result = model.predict(img_arr)[0][0]

    fake_score = (1 - result) * 100
    real_score = result * 100

    return f"{fake_score:.2f}% Fake."
