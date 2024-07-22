import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "../../App.scss";
import "../../styles/main.scss";
import NavBar from "../../components/NavBar/NavBar";
import UploadVideo from "../../components/UploadVideo/UploadVideo";

function VideoUploadPage() {
  return (
    <>
      <UploadVideo /> 
    </>
  );
}

export default VideoUploadPage;
