'use client'
import React from 'react';
import { useCompareImagesContext } from "../store/compare-images-context";

const CompareImages = () => {
  const { selectedImages } = useCompareImagesContext()


  return (
    <div>{selectedImages}</div>
  );
};

export default CompareImages;
