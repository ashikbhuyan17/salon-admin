import { Modal, Upload } from "antd";
import Iconify from "../../../components/iconify";
import { useState } from "react";
import PropTypes from "prop-types";
const shape ={
  circle:"picture-circle",
  square:"picture-card"
}
const uploadButton = (
  <button
    style={{
      border: 0,
      background: "none",
    }}
    className="flex flex-col justify-center items-center"
    type="button"
  >
    <Iconify icon="ic:twotone-plus" />
    <div
      style={{
        marginTop: 8,
      }}
    >
      ছবি আপলোড
    </div>
  </button>
);
export default function UploadImage({onFileListChange,type="circle",imgCount=1}) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const handleCancelImage = () => setPreviewOpen(false);
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setTimeout(() => {
      onFileListChange(newFileList?.[0]?.thumbUrl);
    }, 200);
  };
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleRemove = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
    onFileListChange(newFileList?.[0]?.thumbUrl);
  };
  return (
    <>
      <Upload
        listType={shape[type]}
        beforeUpload={() => false}
        onPreview={handlePreview}
        onChange={handleChange}
        // onRemove={handleRemove}
        accept=".jpeg,.jpg,.png"
      >
        {fileList.length >= imgCount ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancelImage}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }} 
          src={previewImage}
        />
      </Modal>
    </>
  );
}
UploadImage.propTypes = {
  onFileListChange: PropTypes.func,
  type: PropTypes.oneOf(["circle", "square"]),
  imgCount: PropTypes.number,
};