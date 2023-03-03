import React, {useState} from "react";
import { Banner } from "../ui-components";
import {toast} from "react-toastify";
import { FileUploader } from "@aws-amplify/ui-react";

export function Hackathon(props) {
  const [myFiles, setMyFiles] = useState([]);

  const onSuccess = ({ key }) => {
    let tempFiles = myFiles;
    tempFiles.push(key);
    setMyFiles(tempFiles);
    notifyToastSuccess('File uploaded ' + key);
  };
  const onError = (error) => {
    notifyToastError("File couldn't be uploaded due to " + error);
  };

  const notifyToastSuccess = (info) => toast.info(info);
  const notifyToastError = (error) => toast.error(error);

  return (
    <>
      <Banner className="hackathon" width={"100%"} height={"1000px"} />
      <ul>
        <li>
          Figma -
          https://www.figma.com/file/SGFDDkwrB7qL4WOwGYBZjd/AWS-Amplify-UI-Kit-(Community)?node-id=861%3A3635&t=1Qkp4W7zNn9wepcv-0
        </li>
        <li>Github - https://github.com/stefanbertos/for-developers-ai-demo</li>
        <li>
          Docs - https://ui.docs.amplify.aws/react/getting-started/installation
        </li>
        <li>https://www.fordevelopers.org/ </li>
      </ul>

      <FileUploader
        onSuccess={onSuccess}
        onError={onError}
        variation="drop"
        showImages={true}
        hasMultipleFiles={true}
        maxFileCount={10}
        shouldAutoProceed={true}
        isPreviewerVisible={true}
        isResumable={true}        
        acceptedFileTypes={['.jpeg', '.jpg', '.png']}
        accessLevel="private"
      />

      <div>{myFiles}</div>
    </>
  );
}
