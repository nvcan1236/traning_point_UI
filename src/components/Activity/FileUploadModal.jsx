/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactModal from 'react-modal';
import SecondaryButton from '../Buttons/SecondaryButton';
import PrimaryButton from '../Buttons/PrimaryButton';
import Input from '../formControls/Input';
import { fetchUploadActivity } from '../../hooks/useFetch';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export default function FileUploadModal({ isOpen, onRequestClose, activityId }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      await fetchUploadActivity(activityId, file);
      onRequestClose();
    } else {
      alert('Vui lòng chọn file');
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Upload Attendance File"
    >
      <h2>Nộp file điểm danh</h2>
      <Input type="file" accept=".csv" onChange={handleFileChange} />
      <div className="mt-4 flex justify-end gap-2">
        <SecondaryButton onClick={onRequestClose}>Hủy</SecondaryButton>
        <PrimaryButton onClick={handleSubmit}>Xác nhận</PrimaryButton>
      </div>
    </ReactModal>
  );
}
