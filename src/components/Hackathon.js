import React, { useState } from "react";
import { Banner, HackathonDashboard } from "../ui-components";
import { Image } from "@aws-amplify/ui-react";
import { Collection } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Hackathon(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageResolution, setImageResolution] = React.useState("1024x1024");
  const [numberOfImages, setNumberOfImages] = React.useState(1);
  const [prompt, setPrompt] = React.useState("a white siamese cat");
  const [generatedImages, setGeneratedImages] = useState([]);
    const notifyToast = (info) => toast.info(info);
  function generateImage() {
    console.log(prompt, numberOfImages, imageResolution);
    notifyToast("Generating");
    API.post("openapi", "/image", {
      body: {
        prompt: prompt,
        numberOfImages: numberOfImages,
        imageResolution: imageResolution,
      },
    })
      .then((result) => {
        console.log(result);
        setGeneratedImages(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function generateVariation() {
    getBase64(selectedImage)
      .then((encodedImage) => {
        API.post("openapi", "/image", {
          body: {
            prompt: prompt,
            numberOfImages: numberOfImages,
            imageResolution: imageResolution,
            image: encodedImage,
          },
        })
          .then((result) => {
            console.log(result);
            setGeneratedImages(result);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error); // Logs an error if there was one
      });
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const hackathonDashboardOverrides = {
    ImageResolutionSelectField: {
      options: ["1024x1024", "512x512", "256x256"],
      defaultValue: imageResolution,
      onChange: (e) => setImageResolution(e.target.value),
    },
    NumberOfImagesStepperField: {
      min: 1,
      max: 10,
      defaultValue: numberOfImages,
      onStepChange: (newValue) => setNumberOfImages(newValue),
    },
    PromptTextAreaField: {
      defaultValue: prompt,
      onChange: (newValue) => {setPrompt(newValue.target.value)},
    },
    GenerateImageButton: {
      onClick: () => {
        generateImage();
      },
    },
    GenerateVariationButton: {
      onClick: () => {
        generateVariation();
      },
    },
  };

  return (
    <>
      <Banner className="hackathon" width={"100%"} height={"1000px"} />
      
      <Image src="/image1.png"/>
      <Image src="/image2.png"/>
      <Image src="/image3.png"/>
      <Image src="/image4.png"/>
      <Image src="/image5.png"/>
      <Image src="/image6.png"/>
      <Image src="/image7.png"/>
      <Image src="/image8.png"/>
      <Image src="/image9.png"/>
      <Image src="/image10.png"/>
      <Image src="/image11.png"/>
      <Image src="/image12.png"/>
      <Image src="/image13.png"/>
      <Image src="/image14.png"/>
      <Image src="/image15.png"/>
      <Image src="/image16.png"/>
      <Image src="/image17.png"/>
      
      <
        HackathonDashboard
        overrides={hackathonDashboardOverrides}
        imageLoader={
          <input
            type="file"
            name="myImage"
            accept="image/png"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
        }
      />

        <ToastContainer/>

      <Collection
        items={generatedImages}
        type="list"
        direction="row"
        gap="20px"
        wrap="nowrap"
      >
        {(item, index) => <Image key={index} src={item.url}></Image>}
      </Collection>
    </>
  );
}
