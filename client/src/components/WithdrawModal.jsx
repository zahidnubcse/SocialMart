import { X } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from '@clerk/clerk-react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import api from "../configs/axios";
import { getAllUserListing } from "../app/features/listingSlice";

const WithdrawModal = ({ onClose }) => {

  const {getToken} = useAuth()
  const dispatch = useDispatch()
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState([
    { type: "text", name: "Account Holder Name", value: "" },
    { type: "text", name: "Bank Name", value: "" },
    { type: "number", name: "Account Number", value: "" },
    { type: "text", name: "Account Type", value: "" },
    { type: "text", name: "SWIFT Code", value: "" },
    { type: "text", name: "Branch", value: "" },
  ]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      //check if there is at least one field
      if (account.length === 0) {
        return toast.error("Please add at least one field")
      }
      //check all fields are filled
      for(const field of account){
        if (!field.value) {
          return toast.error(`Please fill in the ${field.name} field`)
        }
      }
      const confirm = window.confirm(
      "Are you sure you want to submit?"
    );
    if (!confirm) return;
    const token = await getToken();
    const {data} = await api.post('/api/losting/withdraw', {account,
      amount: parseInt(amount)},{ headers: {Authorization: `Bearer ${token}`}}
    )
    toast.success(data.message)
    dispatch(getAllUserListing({getToken}))
    onClose();

    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message)
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-lg sm:rounded-lg shadow-2xl flex flex-col max-h-[95vh]">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <h3 className="font-semibold text-lg">Withdraw Funds</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmission}
          className="p-4 flex flex-col gap-4 overflow-y-auto"
        >
          {/* Amount */}
          <div className="flex flex-col sm:grid sm:grid-cols-[2fr_3fr] gap-2 sm:items-center sm:gap-3">
            <label className="text-sm font-medium text-gray-800">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Account Fields */}
          {account.map((field, index) => (
            <div
              key={index}
              className="flex flex-col sm:grid sm:grid-cols-[2fr_3fr] gap-2 sm:items-center sm:gap-3"
            >
              <label className="text-sm font-medium text-gray-800">
                {field.name}
              </label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) =>
                  setAccount((prev) =>
                    prev.map((item, i) =>
                      i === index ? { ...item, value: e.target.value } : item
                    )
                  )
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          ))}

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium transition"
          >
            Apply for Withdrawal
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawModal;
