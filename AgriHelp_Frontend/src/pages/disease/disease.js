import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Disease = () => {
  const [photo, setPhoto] = useState([]);
  //const [load] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [lang] = useState("en");

  let url = "http://localhost:3001/disease-detection" + lang;
  let form = new FormData();
  //form.append("file", photo[0]);

  if (Array.isArray(photo) && photo.length > 0) {
    form.append("file", photo[0]);
  } else if (photo instanceof File) {
    form.append("file", photo);
  }

  const onClick = async () => {
    try {
      const response = await fetch(url, {
        method: "post",
        body: form
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const main_data = data["data"];
      setPrediction(main_data["prediction"]);
      console.log("res", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <Header />
      <section className="">
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100  p-10 grid place-items-center my-14 ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Upload your image to get the disease prediction
              <br />
            </p>

            <p className="title">Select Image:</p>
            <div className=" m-6">
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            {/* <button
              onClick={() => onClick()}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Upload
            </button> */}

            {/* {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>} */}

            {photo && photo instanceof File && (
              <div>
                <p className="title" style={{ marginTop: 30 }}>
                  Uploaded Image:
                </p>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    marginTop: "10px"
                  }}
                />
              </div>
            )}
            <button
              onClick={() => onClick()}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Upload
            </button>
          </div>
        </div>

        <div>
          {/* {load ? (
            <div className="grid place-items-center my-14  ">loading </div>
          ) : (
            <div></div>
          )} */}
          {/* <button
            onClick={() => onClick()}
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Upload
          </button> */}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3">Disease From Image Predicted: </p>
              {prediction}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Disease;
