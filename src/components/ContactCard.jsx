import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";
const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Sucessfully");
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <>
      <div
        className="bg-yellow flex items-center justify-between p-2 rounded-md"
        key={contact.id}
      >
        <div className="flex">
          <HiOutlineUserCircle className="text-orange text-4xl mt-1" />
          <div className="ml-1">
            <h2 className="font-bold">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex gap-1 text-[33px]">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        isOpen={isOpen}
        isUpdate
        contact={contact}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
