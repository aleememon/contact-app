import React from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact Added Sucessfully");
    } catch (error) {
      console.log(error?.message);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact Update Sucessfully");
    } catch (error) {
      console.log(error?.message);
    }
  };

  console.log(contact);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(
    isUpdate
      ? {
          defaultValues: {
            name: contact.name,
            email: contact.email,
          },
        }
      : {
          defaultValues: {
            name: "",
            email: "",
          },
        }
  );
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    isUpdate ? updateContact(data, contact.id) : addContact(data);
    reset();
    onClose();
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form className="flex gap-1 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            className="border h-8"
            {...register("name", { required: "Required Name" })}
          />
          {errors.name && (
            <div className="text-red-500">{errors.name?.message}</div>
          )}

          <label>Email</label>
          <input
            className="border h-8 ro"
            {...register("email", {
              required: "Required Email (name@example.com)",
            })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email?.message}</div>
          )}
          <button
            className="self-end bg-[#FCCA3F] hover:bg-[#fcec3f] duration-300 px-2 mt-1 rounded border "
            type="submit"
          >
            {isUpdate ? "Update" : "Add"} Contact
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
