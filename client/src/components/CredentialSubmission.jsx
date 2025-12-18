import { CirclePlus, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CredentialSubmission = ({ onClose, listing }) => {
  const [newField, setNewField] = useState("");
  const [credential, setCredential] = useState([
    { type: "email", name: "Email", value: "" },
    { type: "password", name: "Password", value: "" },
  ]);

  const handleAddField = () => {
    const name = newField.trim();
    if (!name) return toast("Please enter a field name");

    setCredential((prev) => [
      ...prev,
      { type: "text", name, value: "" },
    ]);
    setNewField("");
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(credential);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center sm:p-4">
      <div className="bg-white w-full max-w-lg h-screen sm:h-auto sm:rounded-lg shadow-2xl flex flex-col">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">
              {listing?.title}
            </h3>
            <p className="text-sm opacity-90 truncate">
              Adding credentials for {listing?.username} on {listing?.platform}
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-4 p-1 rounded-lg hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmission}
          className="p-4 flex flex-col gap-4 max-h-[70vh] overflow-y-auto"
        >
          {credential.map((cred, index) => (
            <div
              key={`${cred.name}-${index}`}
              className="grid grid-cols-[2fr_3fr_1fr] items-center gap-3"
            >
              <label className="text-sm font-medium text-gray-800">
                {cred.name}
              </label>

              <input
                type={cred.type}
                value={cred.value}
                onChange={(e) =>
                  setCredential((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, value: e.target.value } : c
                    )
                  )
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setCredential((prev) =>
                    prev.filter((_, i) => i !== index)
                  )
                }
                className="text-gray-500 hover:text-red-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}

          {/* Add Field */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Field name..."
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              className="px-2 py-1 border-b border-gray-300 focus:outline-none focus:border-indigo-400 text-sm"
            />
            <button
              type="button"
              onClick={handleAddField}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-indigo-600 transition"
            >
              <CirclePlus className="w-5 h-5" />
              Add
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-md font-medium transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CredentialSubmission;
