# Danshow_Front

### 참고할 만한 Library
#### 영상분석
    - https://github.com/physera/react-native-pose-decoding
    - https://heartbeat.fritz.ai/human-pose-estimation-using-tensorflows-posenet-model-e5770f0a0a31
    - https://github.com/tensorflow/tfjs-models/tree/master/posenet
    - https://opencv-python.readthedocs.io/en/latest/doc/02.videoStart/videoStart.html#camera

#### React Native
    - https://github.com/react-native-camera/react-native-camera : openCV 연동하기 위한 카메라용
    - https://github.com/react-native-image-picker/react-native-image-picker : 프로필 사진 업로드용
    - https://github.com/react-native-google-signin/google-signin : SNS 구글 로그인용

### 영상처리 구현 과정
    
    1. Colab + openPose + Flask
       Colab : GPU 서버 지원
       openPose : 영상 분석 처리
       Flask : React Native 기반 영상 처리
       
       동영상 DB를 어디에 둘것인가? -> 유튜브 업로드 및 Youtube API 사용 -> 학습 
       사용자가 동영상 유튜브 업로드 -> 유튜브 업로드 및 Youtube API 사용 -> 분석
    
    2. Google Cloud Platform -> GPU 300$ Credit 사용
