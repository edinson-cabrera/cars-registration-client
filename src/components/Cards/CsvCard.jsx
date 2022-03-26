import { useState } from "react";
import { DownloadIcon, UploadIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router";
import NotificationCard from "../../helpers/NotificationCard";
export default function CSVCard() {
  const navigator = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    console.log(event.target.files[0]);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch("http://localhost:8080/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigator("/");
        } else {
          setIsFailed(true);
        }
      })
      .finally(() => {
        setIsFilePicked(false);
      });
  }

  return (
    <>
      <div className="bg-white p-7 mt-5 shadow-md rounded-md">
        <div className="flex justify-center">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            {isFilePicked ? (
              <div className="text-center">
                <p>Filename: {selectedFile.name}</p>
                <p>Size: {selectedFile.size} KB</p>
              </div>
            ) : (
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
            )}

            <input type="file" className="hidden" onChange={changeHandler} />
          </label>
        </div>
        <div className="text-right">
          <button
            onClick={handleSubmit}
            className="px-2.5 py-1.5 bg-indigo-500 mt-5 mr-3 items-center p-2 text-center text-white rounded-md"
          >
            <DownloadIcon className="h-5 w-5 inline-flex mr-1" />
            <label>Download Demo</label>
          </button>
          <button
            onClick={handleSubmit}
            className="px-2.5 py-1.5 bg-indigo-500 mt-5 items-center p-2 text-center text-white rounded-md"
          >
            <UploadIcon className="h-5 w-5 inline-flex mr-1" />
            <label>Upload File</label>
          </button>
        </div>
      </div>
      <div className="mt-2">
        <NotificationCard
          title={"Upload Failed"}
          content={"Try with another file"}
          show={isFailed}
          setShow={setIsFailed}
        />
      </div>
    </>
  );
}
