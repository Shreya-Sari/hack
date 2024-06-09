import streamlit as st
import cv2
from PIL import Image
from ultralytics import YOLO
import time

# Load the YOLO model
model_path = r"C:/Users/My Pc/Desktop/Hackathon/aquarium_pretrain/runs/detect/train12/weights/last.pt"
model = YOLO(model_path)

# Set up Streamlit interface
st.title("Marine life Detection Demo")

# Create a column layout for the start and stop buttons
col1, col2 = st.columns(2)

# Add start and stop buttons
start_button = col1.button("Start")
stop_button = col2.button("Stop")

# Areas to display logs and video feed
video_area = st.empty()
detected_objects_area = st.empty()

# Variables to control the detection loop and alert status
run_detection = False
alert_triggered = False

# Function to process and display the webcam feed
def process_webcam():
    global alert_triggered
    cap = cv2.VideoCapture(0)
    while run_detection:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Perform detection
        results = model.predict(source=frame)

        # Extract detected object names and count them
        detected_objects = [model.names[int(cls)] for result in results for cls in result.boxes.cls]
        detected_counts = {obj: detected_objects.count(obj) for obj in set(detected_objects)}

        # Check for sharks in the predictions
        if 'shark' in detected_objects and not alert_triggered:
            st.warning("Alert: Shark detected!")
            alert_triggered = True

        # Display the frame as a live video feed
        video_area.image(frame, channels="BGR")

        # Log the detected object counts
        if not alert_triggered:
            detected_objects_text = "\n".join([f"{obj}: {count}" for obj, count in detected_counts.items()])
            detected_objects_area.text(detected_objects_text)
        
        # Add delay to simulate real-time processing
        time.sleep(0.1)
    cap.release()

# Start detection if the start button is pressed
if start_button:
    run_detection = True
    alert_triggered = False
    process_webcam()

# Stop detection if the stop button is pressed
if stop_button:
    run_detection = False
    st.write("Detection stopped.")
