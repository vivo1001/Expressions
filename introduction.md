# *EXPRESSIONS*

The purpose of this document is to serve as a quick overview of the website Expressions that I have created for Imbesideyou. The document will describe everything I considered while designing the website and how I tried to implement it.

Expressions is a website where we use AI to detect a person's emotions in real-time. To achieve this, Expressions have used a modern library, FaceApi.js. FaceApi.js provides various functionalities, but I specifically used emotion detection and face landmark functionalities.

The problem statement given by Imbesideyou had asked to integrate AI in the front or backend. **I have integrated the AI with the _backend_ part of the code in expressions**. The main reasons are as follows:

- Implementation in the backend means that I can run analytics 
- Using a load balancer and reverse proxy, I can increase the website's scalability. 

Expressions has used _npm as its package manager_.

The front-end part is made using _create-react-app_, which takes care of all the configurations.

Models are placed in public folder form where package face-API gets all the models through request on their specific URL.

Face-api.js takes the video stream from the users' camera through the `navigator.mediaDevices.getUserMedia` and processes it every 100ms. It returns an array with different types of data I generated through video processing, which is fed to the canvas element that draws these findings on top of the video stream in UI.


It shows the following things:
- Facial features
- Emotion with a level of confidence the model has
- Overall face position


### *Here are a few snapshots of the UI:*

![ink (2)](https://user-images.githubusercontent.com/88387618/199573577-38af65f4-478e-426f-81ff-76ff65f6127f.png)

![ink (3)](https://user-images.githubusercontent.com/88387618/199573591-4e7d5d92-2c76-44bc-b361-549046d7ea38.png)

![ink (1)](https://user-images.githubusercontent.com/88387618/199573587-7671373d-a427-4760-bd55-ac3127485acf.png)

# *Conclusion*

The applications of emotion recognition technology are vast and diverse. It ranges from advertising and marketing to psychological and behavioral analysis of people. With the use of AI in this field, advancements in this field have taken a quantum leap. So to capture a small aspect of this immense field, I have used emotion recognition as my project for Imbesideyou.

At last, I would like to thank Imbesideyou for giving me this opportunity to develop *EXPRESSIONS*. The journey from start to end has been fun for me and made me explore a lot. I hope I will be able to join you in the future and explore more.
