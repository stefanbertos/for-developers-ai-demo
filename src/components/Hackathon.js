import React, { useState } from "react";
import { Banner, HackathonDashboard } from "../ui-components";
import { Image } from "@aws-amplify/ui-react";
import { Collection } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

export function Hackathon(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageResolution, setImageResolution] = React.useState("1024x1024");
  const [numberOfImages, setNumberOfImages] = React.useState(1);
  const [prompt, setPrompt] = React.useState("a white siamese cat");
  const [generatedImages, setGeneratedImages] = useState([]);

  function generateImage() {
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
      defaultValue: numberOfImages,
      onStepChange: (newValue) => setNumberOfImages(newValue),
    },
    PromptTextAreaField: {
      defaultValue: prompt,
      onChange: (newValue) => setPrompt(newValue),
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
      <HackathonDashboard
        overrides={hackathonDashboardOverrides}
        imageLoader={
          <input
            type="file"
            name="myImage"
            accept="image/png"
            onChange={(event) => {
              console.log(event);
              setSelectedImage(event.target.files[0]);
            }}
          />
        }
      />

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
