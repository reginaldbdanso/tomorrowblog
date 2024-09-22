import React from 'react';
import BlogPostEditor from './BlogpostEditor';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Blog Post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Text Editor Area */}
        <BlogPostEditor />
        

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="p-8">
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//       >
//         Create New Post
//       </button>

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

// export default App;
